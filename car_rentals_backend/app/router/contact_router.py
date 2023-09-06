from fastapi import APIRouter, HTTPException, Request
from datetime import datetime
from ..database.database import Contact
from ..models.Contact_model import Contactcreate, Contactmodel


router = APIRouter()


@router.post("/create")
def create_contact(contact: Contactcreate):
    try:
        contact_dict = contact.model_dump()
        contact_dict["created_at"] = datetime.now()
        contact_id = Contact.insert_one(contact_dict).inserted_id
        created_contact = Contactmodel(**contact_dict)
        created_contact.created_at = datetime.now()
        return {"message": "Created Contact"}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Something went wrong")
