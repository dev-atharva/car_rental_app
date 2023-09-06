from datetime import datetime, timedelta
from ..api.auth import create_access_token, verify_password, get_password_hash
from ..models.User_model import UserCreate
from ..services.user_service import get_user_by_email, create_user
from .config import settings


async def authenticate_user(email: str, password: str):
    user = await get_user_by_email(email)
    if not user or not verify_password(password, user["password"]):
        return None
    return user


def create_access_token_for_user(id: str):
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return create_access_token(data={"sub": id}, expires_delta=access_token_expires)


async def register_new_user(user: UserCreate):
    hashed_password = get_password_hash(user.password)
    created_user = await create_user(user.name, user.email, hashed_password)
    return created_user
