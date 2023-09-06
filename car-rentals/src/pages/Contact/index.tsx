import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import Inputs from "../../components/Inputs";
import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setloading(true);
    const sub_data = data;
    axios
      .post("/contact/create", sub_data)
      .then(() => {
        toast.success("Submitted");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div className="max-w-[100vw] min-h-[100vh] flex flex-col items-center justify-start pt-6">
      <div
        className="flex flex-col sm:flex-row w-[90vw] min-h-[70vh] rounded-xl
       bg-[rgba(255,255,255,0.45)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[4px] -webkit-backdrop-blur-[4px]"
      >
        <div className=" w-[100%] sm:w-[50%] h-[90%] ">
          <img
            src="/src/assets/contact_us.svg"
            className="w-[100%] h-[100%] object-cover rounded-lg"
            alt="Contact Us image"
          />
        </div>
        <div className="w-[100%] sm:w-[50%] h-[90%] flex flex-col justify-start gap-12 p-4">
          <div className="hidden sm:block">
            <div className="flex flex-row justify-center p-4 text-center text-[#444444] font-logofont text-3xl mt-2">
              Contact Us
            </div>
          </div>
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
            id="email"
            type="email"
            label="Email"
            disabled={loading}
            register={register}
            errors={errors}
            required
          />
          <Inputs
            id="message"
            type="text"
            label="Message"
            disabled={loading}
            register={register}
            errors={errors}
          />
          <hr />
          <Buttons label="Submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
