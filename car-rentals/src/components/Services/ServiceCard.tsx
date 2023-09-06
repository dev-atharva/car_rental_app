import React from "react";

interface Servicecard_props {
  image_src: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Servicecard_props> = ({
  image_src,
  title,
  description,
}) => {
  return (
    <div
      className=" h-[33vh] w-[90vw] sm:w-[24vw] 
     cursor-pointer group perspective  text-white text-center  "
    >
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
        <div
          className="absolute backface-hidden w-full h-full bg-purple-950 rounded-lg
          font-bold text-xl "
        >
          <img
            src={image_src}
            alt="Service images"
            className="w-[100%] h-[100%] rounded-lg object-cover"
          />
          <div className="absolute bottom-3 text-lg font-semibold text-black bg-white p-2 left-4 rounded-md">
            {title}
          </div>
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full text-[#444444]
         overflow-hidden bg-[rgba(255,255,255,0.4)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
         backdrop-blur-[8px] -webkit-backdrop-blur-[8px] rounded-lg flex items-center justify-center p-2 text-md font-semibold"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
