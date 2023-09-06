from pymongo import MongoClient, errors, ASCENDING
from ..services.config import settings

# Get database URL and name from environment variables
# database_url = os.environ.get("DATABASE_URL")
# database_name = os.environ.get("DATABASE_NAME")
# print(database_url)
# print(database_name)

# Create a MongoClient instance with a timeout
client = MongoClient(settings.DATABASE_URL, serverSelectionTimeoutMS=5000)

try:
    conn = client.admin.command("isMaster")
    print(f'Connected to MongoDB {conn.get("version")}')
except errors.ServerSelectionTimeoutError:
    print("Unable to connect to the MongoDB server")

# Get the database instance
db = client.get_database(settings.DATABASE_NAME)

# Create a User collection
User = db.users
Car = db.cars
Reservation = db.reservations
Contact = db.contacts

# Create a unique index on the email field
User.create_index([("email", ASCENDING)], unique=True)
