import { AiOutlineSafety } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { PiCarSimple } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import Infoelement from "./Infoelement";

const Info = () => {
  return (
    <div className="w-[100%] min-h-[25vh] flex justify-center items-center mt-2 sm:mt-0 ">
      <div
        className="w-[96%] h-[95%] rounded-xl p-4 flex flex-col sm:flex-row gap-2
       bg-[rgba(255,255,255,0.5)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[8px] -webkit-backdrop-blur-[8px] justify-around"
      >
        <Infoelement
          icon={AiOutlineSafety}
          title="Safety First"
          description_1="Experienced staff and"
          description_2="well maintained vehicles"
        />
        <Infoelement
          icon={CiDiscount1}
          title="Reasonable Rates"
          description_1="We can offer you vehicle"
          description_2="at right price which fits your budget"
        />
        <Infoelement
          icon={PiCarSimple}
          title="Largest Fleet "
          description_1="We offer and extensive fleet of vehicles"
          description_2="which include premium cars"
        />
        <Infoelement
          icon={IoEarthOutline}
          title="Global Service"
          description_1="We provide our transportation"
          description_2="services globally"
        />
      </div>
    </div>
  );
};

export default Info;
