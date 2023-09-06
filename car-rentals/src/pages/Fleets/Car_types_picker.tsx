import Car_type from "./Car_type";

export const cartypes = [
  {
    title: "Economy",
    description:
      "Small and fuel-efficient vehicles suitable for budget-conscious travelers and urban driving",
  },
  {
    title: "Compact",
    description:
      "Slightly larger than economy cars, offering a bit more space and comfort while remaining affordable",
  },
  {
    title: "Midsize",
    description:
      "A versatile choice for both city and highway driving, providing more space and comfort compared to compact cars",
  },
  {
    title: "Full-Size",
    description:
      "Larger sedans with ample passenger and cargo space, ideal for families and longer journeys",
  },
  {
    title: "Luxury",
    description:
      "High-end vehicles known for their premium features, advanced technology, and superior comfort",
  },
  {
    title: "Sports",
    description:
      "Performance-oriented vehicles designed for speed and handling, often with sleek designs and powerful engines",
  },
  {
    title: "SUVs",
    description:
      "Versatile vehicles suitable for various terrains, offering ample space and often available in different sizes (compact, midsize, full-size, and luxury SUVs)",
  },
  {
    title: "Electric",
    description:
      "Environmentally friendly vehicles that run on electricity, contributing to reduced emissions",
  },
  {
    title: "Hybrid",
    description:
      "Vehicles with both a gasoline engine and an electric motor, providing improved fuel efficiency",
  },
  {
    title: "Exotic",
    description:
      "Rare and high-performance vehicles often sought after by enthusiasts and for special occasions",
  },
  {
    title: "Vintage",
    description:
      "Vehicles with both a gasoline engine and an electric motor, providing improved fuel efficiency",
  },
  {
    title: "Antique",
    description:
      "Antique vehicles from earlier decades, appealing to collectors and those seeking a unique experience.",
  },
];

const Car_types_picker = () => {
  return (
    <div className="w-[100%] min-h-[25vh] flex justify-center items-center mt-1 sm:mt-0">
      <div
        className="rounded-xl p-4 flex flex-row gap-3
       bg-[rgba(255,255,255,0.45)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[4px] -webkit-backdrop-blur-[4px]  overflow-x-auto 
    items-center justify-between min-w-[96%]
"
      >
        {cartypes.map((car_type) => (
          <Car_type key={car_type.title} title={car_type.title} />
        ))}
      </div>
    </div>
  );
};

export default Car_types_picker;
