from pydantic import BaseModel
from datetime import datetime


class ContactBase(BaseModel):
    name: str
    email: str
    message: str


class Contactcreate(ContactBase):
    pass


class Contactmodel(ContactBase):
    created_at: datetime = None

    class Config:
        orm_mode = True
