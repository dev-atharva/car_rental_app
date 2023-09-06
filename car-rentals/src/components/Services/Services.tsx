import ServiceCard from "./ServiceCard";

export const services_details = [
  {
    image_src: "/src/assets/intercity_service.jpg",
    description: `Discover seamless intercity travel with our premier car rental service. 
      Experience the convenience of exploring new destinations with our diverse fleet of well-maintained vehicles.
       From smooth rides to memorable journeys, we're your trusted partner for intercity travel excellence`,
    title: "Intercity Trips",
  },
  {
    image_src: "/src/assets/airport_transfer_service.jpg",
    description: `Your gateway to hassle-free travel starts here. Enjoy a seamless transition from airport to destination with our reliable airport transfer service.
     With our punctual and comfortable rides, we ensure your journey begins and ends with comfort and ease.`,
    title: "Airport Transfer",
  },
  {
    image_src: "/src/assets/charter_service.jpg",
    description: `Experience the freedom of personalized travel with our premium charter service. From family vacations to corporate outings, our tailored solutions offer comfort, convenience, and flexibility.
     Travel on your terms, wherever your journey takes you, with our diverse fleet of top-notch vehicles.`,
    title: "Charter Service",
  },
  {
    image_src: "/src/assets/business_meeting_service.jpg",
    description: `Elevate your business engagements with our professional meeting service. Seamlessly arrive at your meetings in sophistication and comfort with our executive vehicles and chauffeur service.
     Make a lasting impression with our prompt and reliable business travel solutions.`,
    title: "Business Meeting",
  },
];

const Services = () => {
  return (
    <div className="w-[100%] min-h-[25vh] flex justify-center items-center mt-2 mb-4 sm:mt-0">
      <div
        className="w-[96%] h-[95%] rounded-xl p-4 flex flex-col sm:flex-row gap-3
       bg-[rgba(255,255,255,0.5)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[8px] -webkit-backdrop-blur-[8px] justify-start"
      >
        <div className="relative w-[100%] sm:w-[47%] h-[100%] rounded-md hidden sm:block">
          <img
            src="/src/assets/Limousine-pana.svg"
            alt="Our services image"
            className="w-[100%] max-h-[600px] object-cover"
          />
          <div className="absolute top-8 xl:top-16 left-16 xl:left-44 text-6xl font-semibold text-[#444444] font-logofont hidden sm:block">
            Our Services
          </div>
        </div>
        <div className="p-2 text-xl font-logofont text-[#444444] block sm:hidden text-center">
          Our Services
        </div>
        <div className=" w-[100%] sm:w-[53%] h-[100%]  gap-2 grid grid-cols-1 place-items-center md:grid-cols-2">
          {services_details.map((service) => (
            <ServiceCard
              key={service.title}
              image_src={service.image_src}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
