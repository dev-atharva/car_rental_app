interface CarInfoprops {
  category: string;
  description: string;
  seats: number;
  milage: number;
  horsepower: number;
}

const CarInfo: React.FC<CarInfoprops> = ({
  category,
  description,
  seats,
  milage,
  horsepower,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold flex flex-row items-center gap-2">
          <div>Details</div>
        </div>
        <div className="flex flex-row items-center gap-4 font-medium text-[#444444]">
          <div>{seats} Seats</div>
          <div>{milage} Mileage</div>
          <div>{horsepower} CC</div>
        </div>
      </div>
      <hr />
      {category}
      <hr />
      <div className="text-lg font-light text-[#444444]">{description}</div>
    </div>
  );
};

export default CarInfo;
