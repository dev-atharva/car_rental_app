import axios from "axios";

export const get_all_cars = async () => {
  try {
    const response = await axios.get("/car/cars");
    return response.data;
  } catch {
    return;
  }
};

export const get_specific_car = async (id: string) => {
  try {
    const response = await axios.get(`/car/cars/${id}`);
    return response.data;
  } catch {
    return;
  }
};

export const get_cars_by_type = async (car_type: string) => {
  try {
    const response = await axios.get(`/car/cars/type/${car_type}`);
    return response.data;
  } catch {
    return;
  }
};
