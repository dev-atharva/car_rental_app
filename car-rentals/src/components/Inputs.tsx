import React from "react";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface inputprops {
  id: string;
  label: string;
  disabled?: boolean;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Inputs: React.FC<inputprops> = ({
  id,
  label,
  disabled,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
        peer w-full p-4 pt-6 bg-transparent border-2 rounded-md font-light outline-none
         transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
         ${errors[id] ? "border-rose-500" : "border-neutral-300"}
         ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`absolute text-md duration-150
       transform -translate-y-3 top-5 z-10 origin-[0]
       left-4
       peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0
       peer-focus:scale-75
       peer-focus:-translate-y-4
       ${errors[id] ? "text-rose-500" : "text-white"}
       `}
      >
        {label}
      </label>
    </div>
  );
};

export default Inputs;
