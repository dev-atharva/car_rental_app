from pydantic import BaseModel
from typing import List
from datetime import datetime
from .Reservation_model import ReservationModel


class CarBase(BaseModel):
    name: str
    image_urls: List[str]  # Make sure to import List from typing
    price_per_day: float
    car_type: str
    num_seats: int
    mileage: float
    horsepower: int


class CarCreate(CarBase):
    pass


class CarModel(CarBase):
    created_at: datetime = None
    reservations: List[ReservationModel] = []

    class Config:
        orm_mode = True
