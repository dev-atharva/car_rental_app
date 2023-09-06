from fastapi import APIRouter, HTTPException, Request
from ..database.database import Reservation, User, Car
from ..models.Reservation_model import ReservationModel, Reservationcreate
from datetime import datetime
from bson import ObjectId
from ..api.auth import get_current_user_from_cookie


router = APIRouter()


@router.post("/create")
def create_reservation(request: Request, reservation: Reservationcreate):
    current_user_id = get_current_user_from_cookie(request.cookies.get("access_token"))
    car_id = ObjectId(reservation.car_id)

    user_exists = User.find_one({"_id": ObjectId(current_user_id)})
    car_exists = Car.find_one({"_id": car_id})

    if not user_exists:
        raise HTTPException(status_code=404, detail="User not found")
    if not car_exists:
        raise HTTPException(status_code=404, detail="Car not found")

    reservation_data = reservation.model_dump()
    reservation_data["user_id"] = current_user_id
    reservation_data["car_id"] = str(car_id)
    reservation_id = Reservation.insert_one(reservation_data).inserted_id

    # Check if car_reservations is None and initialize it if needed
    car_reservations = car_exists.get("reservations", [])
    car_reservations.append(reservation_data)
    Car.update_one({"_id": car_id}, {"$set": {"reservations": car_reservations}})

    created_reservation = ReservationModel(
        **reservation_data, created_at=datetime.now()
    )
    return created_reservation
