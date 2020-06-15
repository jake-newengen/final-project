from flask_jwt_extended import create_access_token

def generate(user_id, username):
  identity = {
    "user_id": user_id,
    "username": username
  }
  return create_access_token(identity=identity)