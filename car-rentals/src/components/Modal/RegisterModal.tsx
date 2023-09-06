import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Inputs from "../Inputs";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { toast } from "react-hot-toast";
import axios from "axios";

const RegisterModal = () => {
  const registermodal = useRegisterModal();
  const loginmodal = useLoginModal();
  const [loading, Setisloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    Setisloading(true);
    const sub_data = data;
    axios
      .post(`/auth/register`, sub_data)
      .then(() => {
        toast.success("Registered successfully");
        registermodal.onClose();
        loginmodal.onOpen();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        Setisloading(false);
      });
  };
  const toggle = useCallback(() => {
    loginmodal.onOpen();
    registermodal.onClose();
  }, [loginmodal, registermodal]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="text-start">
        <div className="text-2xl font-bold">Welcome to AutoWheels</div>
        <div className="font-light text-white text-xl mt-2">
          Create and account
        </div>
      </div>
      <Inputs
        id="email"
        type="email"
        label="Email"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="name"
        type="text"
        label="Name"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="password"
        type="password"
        label="Password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footercontent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="text-neutral-500 mt-4 font-light text-light ">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div>Already have an account?</div>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline "
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={loading}
      isOpen={registermodal.isOpen}
      title="Register"
      actionLabel="Continue"
      onclose={registermodal.onClose}
      onSubmit={handleSubmit(onsubmit)}
      body={bodyContent}
      footer={footercontent}
    />
  );
};

export default RegisterModal;
