from bson.objectid import ObjectId
from ..database.database import User
from ..models.User_model import UserCreate


async def create_user(name: str, email: str, password: str):
    user_data = {"name": name, "email": email, "password": password}
    result = User.insert_one(user_data)
    created_user = user_data.copy()
    return created_user


async def get_user_by_email(email: str):
    user = User.find_one({"email": email})
    return user


async def get_user_by_id(user_id: str):
    user = User.find_one({"_id": user_id})
    return user
