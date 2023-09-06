from pydantic import BaseModel
from typing import List
from datetime import datetime


class ReservationBase(BaseModel):
    car_id: str
    start_date: datetime
    end_date: datetime
    total_price: int


class Reservationcreate(ReservationBase):
    pass


class ReservationModel(ReservationBase):
    user_id: str
    created_at: datetime = None

    class Config:
        orm_mode = True
