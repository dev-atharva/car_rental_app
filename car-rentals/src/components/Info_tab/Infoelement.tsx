import React from "react";
import { IconType } from "react-icons";

interface Infoelementsprops {
  icon: IconType;
  title: string;
  description_1: string;
  description_2: string;
}

const Infoelement: React.FC<Infoelementsprops> = ({
  icon: Icon,
  title,
  description_1,
  description_2,
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center p-2">
      <div className="flex items-center justify-start flex-row gap-2">
        <Icon size={30} color="white" />
        <span className="text-white font-bold text-2xl">{title}</span>
      </div>
      <span className="p-1 text-white font-semibold">
        {description_1}
        <br /> {description_2}
      </span>
    </div>
  );
};

export default Infoelement;
