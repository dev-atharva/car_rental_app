from fastapi import APIRouter, Depends, HTTPException, status, Request
from fastapi.responses import JSONResponse
from ..api.auth import (
    create_access_token,
    verify_password,
    get_password_hash,
    get_current_user,
    get_current_user_from_cookie,
)
from ..models.User_model import UserCreate, User_model, UserLogin
from ..services.user_service import get_user_by_email, create_user
from datetime import timedelta
from ..services.auth_service import create_access_token_for_user
from ..services.config import settings


router = APIRouter()


@router.post("/token")
async def login_for_access_token(user: UserLogin):
    user_got = await get_user_by_email(user.email)
    if not user_got or not verify_password(user.password, user_got["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token_for_user(str(user_got["_id"]))
    response = JSONResponse(
        content={"access_token": access_token, "token_type": "bearer"}
    )
    response.set_cookie(
        key="access_token",
        value=access_token,
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        httponly=True,
    )
    return response


@router.post("/register", response_model=User_model)
async def register_user(user: UserCreate):
    user_got = await get_user_by_email(user.email)
    if user_got is None:
        hashed_password = get_password_hash(user.password)
        created_user = await create_user(user.name, user.email, hashed_password)
        return created_user
    else:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="User already exists"
        )


@router.get("/verify")
async def verify_user(request: Request):
    access_token_cookie = request.cookies.get("access_token")
    current_user = get_current_user_from_cookie(access_token_cookie)
    if current_user:
        return {"message": f"User {current_user} is verified", "logged_in": True}
    else:
        return {"message": "User is not verified", "logged_in": False}


@router.post("/logout")
async def logout_user(request: Request):
    access_token = request.cookies.get("access_token")
    if access_token:
        response = JSONResponse(content={"message": "Logout Success"})
        response.delete_cookie("access_token")
        return response

    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Not Logged in"
        )
