import Car_card from "./Car_card";
import { useEffect, useState } from "react";
import useCarTypeState from "../../hooks/useCarTypeState";
import { get_all_cars, get_cars_by_type } from "../../api/car";
import { toast } from "react-hot-toast";
import { CarArray, Car } from "../../types/index";

const Cars_container = () => {
  const car_type = useCarTypeState();
  const [car_data, Setcar_data] = useState<CarArray>([]);
  useEffect(() => {
    if (car_type.type === "") {
      get_all_cars()
        .then((data: Car[]) => {
          Setcar_data(data);
        })
        .catch(() => {
          toast.error("Error getting cars");
        });
    } else {
      get_cars_by_type(car_type.type)
        .then((data: Car[]) => {
          Setcar_data(data);
        })
        .catch(() => {
          toast.error("Error getting cars");
        });
    }
  }, [car_type.type]);
  return (
    <div className="w-[100%] min-h-[25vh] flex-col flex justify-start items-center mt-1 sm:mt-0 gap-2">
      <div
        className="rounded-xl p-4 pl-8 sm:pl-4 bg-[rgba(255,255,255,0.45)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
    backdrop-blur-[4px] -webkit-backdrop-blur-[4px] grid grid-cols-1 sm:grid-cols-2
     md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-w-[96%] gap-3"
      >
        {car_data.map((car) => (
          <Car_card
            key={car.id}
            title={car.name}
            image_url={car.first_photo}
            type={car.type}
            description={car.description}
            price={car.price}
            id={car.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars_container;
