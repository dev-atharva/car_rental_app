import { useNavigate } from "react-router-dom";
import Buttons from "../Buttons";

const HeroText = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-4 sm:top-32 max-w-[83vw] left-7 sm:left-24  sm:max-w-[30vw] max-h-[20vh] md:min-h-[20vh] p-2">
      <div className="flex flex-col gap-2 p-4">
        <div className="text-xl sm:text-6xl font-logofont text-[#333333]">
          Luxury Car
          <br /> Rentals
        </div>
        <div className="font-light text-sm sm:text-lg mt-3 text-black">
          Experience the epitome of luxury with AutoWheels, your gateway to
          unparalleled elegance and prestige. Discover a curated collection of
          premium cars designed to elevate your journey.
        </div>
        <div className="mt-4 w-full sm:w-[50%] flex flex-row justify-center items-center z-10">
          <Buttons label="Open Fleet" onClick={() => navigate("/fleets")} />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
