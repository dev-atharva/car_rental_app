import React, { useCallback } from "react";
import useCarTypeState from "../../hooks/useCarTypeState";

interface CarTypesProps {
  title: string;
}

const CarType: React.FC<CarTypesProps> = ({ title }) => {
  const car_type = useCarTypeState();
  const handleclick = useCallback(() => {
    if (car_type.type === title) {
      car_type.change_type("");
    } else {
      car_type.change_type(title);
    }
  }, [car_type, title]);
  return (
    <>
      <div
        onClick={() => handleclick()}
        className={`flex flex-col gap-2 items-center justify-start p-1 h-[50%] w-auto
       bg-[rgba(255,255,255,0.45)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)] backdrop-blur-[4px] -webkit-backdrop-blur-[4px]
        shadow-md rounded-lg cursor-pointer ${
          car_type.type === title ? "border-2 border-black" : "border-0"
        }`}
      >
        <div className="text-[#444444] text-md font-semibold px-2 py-1">
          {title}
        </div>
      </div>
      {/* {isTooltipVisible && (
        <div className="absolute top-12 p-2 text-white bg-gray-800 rounded-lg  text-sm text-center">
          {description}
        </div>
      )} */}
    </>
  );
};

export default CarType;
