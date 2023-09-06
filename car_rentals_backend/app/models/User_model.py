from pydantic import BaseModel
from datetime import datetime

class UserBase(BaseModel):
    name: str
    email: str


class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email:str
    password:str


class User_model(UserBase):
    class Config:
        populate_by_name = True
