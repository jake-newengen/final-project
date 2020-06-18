import datetime
from flask_jwt_extended import create_access_token

def generate(user_id):
  identity = {
    "user_id": user_id
  }
  expires = datetime.timedelta(days=7)
  return create_access_token(identity=identity, expires_delta=expires)