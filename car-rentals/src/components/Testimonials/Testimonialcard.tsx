import React from "react";
import { IconType } from "react-icons";
import { BiUserCircle } from "react-icons/bi";

interface testimonialcardprops {
  icon?: IconType;
  user: string;
  comment: string;
}

const Testimonialcard: React.FC<testimonialcardprops> = ({
  icon: Icon = BiUserCircle,
  user,
  comment,
}) => {
  return (
    <div
      className=" w-[90%] overflow-y-auto sm:w-[20%] p-2 overflow-hidden flex flex-col gap-2 h-[20vh]
       bg-[rgba(255,255,255,0.45)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
      backdrop-blur-[4px] -webkit-backdrop-blur-[4px]
     rounded-md border shadow-xl"
    >
      <div className="flex flex-row gap-4 items-center justify-start px-1">
        <Icon size={25} color="black" />
        <div className="text-[#444444] font-semibold text-lg">{user}</div>
      </div>
      <div className="text-[#444444] font-light text-sm px-1">{comment}</div>
    </div>
  );
};

export default Testimonialcard;
