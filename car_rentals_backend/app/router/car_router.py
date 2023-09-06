from fastapi import APIRouter, HTTPException, Request
from ..database.database import Car
from ..models.Car_model import CarModel, CarCreate
from datetime import datetime
from bson import ObjectId


router = APIRouter()


@router.post("/create", response_model=CarModel)
def crate_car(request: Request, car: CarCreate):
    try:
        car_dict = car.model_dump()
        car_dict["created_at"] = datetime.now()
        car_id = Car.insert_one(car_dict).inserted_id
        created_car = CarModel(**car_dict)
        crate_car.id = car_id
        return created_car
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error while creating car")


@router.get("/cars")
def get_basic_info():
    try:
        car_details_list = []
        for car_data in Car.find():
            first_photo = (
                car_data["image_urls"][0]
                if "image_urls" in car_data and car_data["image_urls"]
                else ""
            )
            car_details = {
                "first_photo": first_photo,
                "name": car_data["name"],
                "description": f"{car_data['car_type']} with {car_data['num_seats']} seats",
                "price": car_data["price_per_day"],
                "type": car_data["car_type"],
                "id": str(car_data["_id"]),
            }
            car_details_list.append(car_details)
        return car_details_list
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error fetching car data")


@router.get("/cars/{car_id}")
def get_car_details(car_id: str):
    try:
        car_data = Car.find_one({"_id": ObjectId(car_id)})
        if car_data:
            car_data["_id"] = str(car_data["_id"])
            for reservation in car_data.get("reservations", []):
                reservation["_id"] = str(reservation["_id"])
            return car_data
        else:
            raise HTTPException(status_code=404, detail="Car not found")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Something went wrong")


@router.get("/cars/type/{car_type}")
def get_cars_by_type(car_type: str):
    try:
        car_details_list = []
        cars = Car.find({"car_type": car_type})
        if cars == None:
            return []
        for car_data in cars:
            first_photo = (
                car_data["image_urls"][0]
                if "image_urls" in car_data and car_data["image_urls"]
                else ""
            )
            car_details = {
                "first_photo": first_photo,
                "name": car_data["name"],
                "description": f"{car_data['car_type']} with {car_data['num_seats']} seats",
                "price": car_data["price_per_day"],
                "type": car_data["car_type"],
                "id": str(car_data["_id"]),
            }
            car_details_list.append(car_details)
        return car_details_list
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Error fetching data")
