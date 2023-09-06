import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface Detailheadprops {
  title: string;
  imageSrc: string;
}

const Detailhead: React.FC<Detailheadprops> = ({ title, imageSrc }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate("/fleets")}
        className="flex flex-row items-center justify-start cursor-pointer p-2"
      >
        <IoArrowBackCircleOutline size={40} color="white" />
      </div>
      <div className="text-[#444444] font-bold text-3xl p-2">{title}</div>
      <div className="w-full h-[50vh] xl:h-[90vh] overflow-hidden rounded-xl relative ">
        <img src={imageSrc} alt="Car Image" className="object-cover w-[100%] h-[100%]" />
      </div>
    </>
  );
};

export default Detailhead;
