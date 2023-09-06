import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface CarCardProps {
  title: string;
  image_url: string;
  description: string;
  price: number;
  type: string;
  id: string;
}

const CarCard: React.FC<CarCardProps> = ({
  title,
  image_url,
  description,
  price,
  type,
  id,
}) => {
  const navigate = useNavigate();
  const handlecardclick = useCallback(() => {
    navigate(`/car/${id}`);
  }, [navigate, id]);
  return (
    <div
      onClick={handlecardclick}
      className="max-w-[300px] rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 bg-[rgba(255,255,255,0.6)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[4px] -webkit-backdrop-blur-[4px] flex justify-center items-center cursor-pointer"
    >
      <div className="flex flex-col w-[95%] p-4">
        <img
          src={image_url}
          alt="Card Image"
          className="rounded-lg max-w-[100%] h-[190px] object-cover"
        />
        <h2 className="pt-2 font-bold">{title}</h2>
        <p className=" mt-2 text-[#444444]">{description}</p>
        <div className="flex flex-row justify-between items-center">
          <div className="items-center flex font-bold">₹ {price}</div>
          <div className="flex items-center mr-1">{type}</div>
        </div>
        
      </div>
    </div>
  );
};

export default CarCard;
