export interface Reservation {
  car_id: string;
  start_date: Date;
  end_date: Date;
  total_price: number;
  user_id: string;
  _id: string;
}

export interface Cardetails {
  _id: string;
  car_type: string;
  horsepower: number;
  image_urls: string[];
  mileage: number;
  name: string;
  num_seats: number;
  price_per_day: number;
  reservations: Reservation[];
}

export interface Car {
  description: string;
  first_photo: string;
  name: string;
  price: number;
  type: string;
  id: string;
}

export type CarArray = Car[];
