import Testimonialcard from "./Testimonialcard";

const Testimonial = () => {
  return (
    <div className="w-[100%] min-h-[25vh] flex justify-center items-center mt-2 sm:mt-0 ">
      <div
        className="w-[96%] h-[95%] rounded-xl p-4 flex flex-col gap-3
       bg-[rgba(255,255,255,0.4)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[8px] -webkit-backdrop-blur-[8px] justify-around"
      >
        <div className="text-4xl font-bold text h-[30%] flex flex-col items-center justify-center p-3 text-white">
          Don't take our word for it.
          <br />
          <span className=" bg-gradient-to-r from-blue-500 via-red-300 to-yellow-200 bg-clip-text text-transparent">
            Trust Our Customers
          </span>
        </div>
        <div className="flex flex-col sm:flex-row  gap-3 sm:overflow-x-auto items-center justify-evenly">
          <Testimonialcard
            user="JohnDoe123"
            comment="Elegance and comfort combined perfectly in the sedan I chose.
             Made exploring the city an absolute pleasure. Will definitely be back for more."
          />
          <Testimonialcard
            user="WanderlustQueen"
            comment="Rented the convertible for a road trip along the coast.
             The wind in my hair, the sun on my skin it was a dream come true. Thanks for the unforgettable experience"
          />
          <Testimonialcard
            user="ChicNomad"
            comment="Wow, just wow! Rented the sleek black sedan for a weekend getaway. 
          Felt like a celebrity cruising through the scenic routes. A+ service!"
          />
          <Testimonialcard
            user="RoadTripWarrior"
            comment="Our group rented a luxury van for a cross-country journey. 
            Spacious, luxurious, and packed with amenities. Made our road trip unforgettable"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
