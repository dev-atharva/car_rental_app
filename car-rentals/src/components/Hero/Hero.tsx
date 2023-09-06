import Hero_text from "./Hero_text";
import Hero_video from "./Hero_video";

const Hero = () => {
  return (
    <div
      className=" mt-12  mx-2  sm:mx-8  
      relative rounded-xl max-w-[98vw] sm:max-w-[96vw] min-h-[50vh]
       sm:min-h-[80vh] bg-[rgba(255,255,255,0.5)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[8px] -webkit-backdrop-blur-[8px] -z-30 sm:z-0 "
    >
      <Hero_video />
      <Hero_text />
    </div>
  );
};

export default Hero;
