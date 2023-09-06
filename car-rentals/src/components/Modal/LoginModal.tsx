import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import Modal from "./Modal";
import Inputs from "../Inputs";
import { toast } from "react-hot-toast";
import axios from "axios";
import useUserAuth from "../../hooks/useUserAuth";

const LoginModal = () => {
  const userAuth = useUserAuth();
  const registermodal = useRegisterModal();
  const loginmodal = useLoginModal();
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setloading(true);
    const sub_data = data;
    axios
      .post(`/auth/token`, {
        email: sub_data.email,
        password: sub_data.password,
      })
      .then(() => {
        toast.success("Logged In");
        loginmodal.onClose();
        userAuth.login();
      })
      .catch((error) => {
        console.error(error);
      });

    setloading(false);
  };

  const toggle = useCallback(() => {
    loginmodal.onClose();
    registermodal.onOpen();
  }, [loginmodal, registermodal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="text-start">
        <div className="text-2xl font-bold">Welcome back</div>
        <div className="font-light text-white text-xl mt-2">
          Login to you account
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
          <div>First time using Airbnb?</div>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline "
          >
            Create and account
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={loading}
      isOpen={loginmodal.isOpen}
      title="Login"
      actionLabel="Continue"
      onclose={loginmodal.onClose}
      body={bodyContent}
      footer={footercontent}
      onSubmit={handleSubmit(onsubmit)}
    />
  );
};

export default LoginModal;
