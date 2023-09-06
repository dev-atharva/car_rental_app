from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.router.auth_router import router as auth_router
from app.router.car_router import router as car_router
from app.router.reservation_router import router as reservation_router
from app.router.contact_router import router as contact_router

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse


app = FastAPI()
app.mount("/assets", StaticFiles(directory="dist/assets"), name="static")
app.mount("/src/assets", StaticFiles(directory="dist/assets"), name="static2")

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(car_router, prefix="/car", tags=["car"])
app.include_router(reservation_router, prefix="/reservation", tags=["reservation"])
app.include_router(contact_router, prefix="/contact", tags=["contact"])

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/{path:path}")
async def server_react_app(path: str):
    return FileResponse("dist/index.html")
