from flask import Blueprint, g, current_app, request, jsonify

## Utils
from ..utils.helpers import json_response
from ..utils.database import query_db
from ..utils.bcrypt import compare, hash_password
from ..utils.jwt import generate

# Blueprint
auth = Blueprint("auth", __name__, url_prefix="/auth")

## SQL Queries
FETCH_QUERY = "SELECT * FROM users WHERE username = :username LIMIT 1;"
SAVE_USER_QUERY = "INSERT INTO users (username, password) VALUES (:username, :password_hash);"
FETCH_SAVED_USER_QUERY = "SELECT last_insert_rowid() as user_id;"

## Login
@auth.route("/login", methods=["POST"])
def login():
  body = request.get_json().keys()

  if not "username" in body or not "password" in body:
    return json_response({ "message": "Missing Params" }, 400)
  else:
    username, password = request.get_json().values()

    # Look for user
    user = query_db(FETCH_QUERY, { "username": username }, one=True)

    if user:
      if compare(password.encode("UTF-8"), user["password"]):
        access_token = generate(user["id"])
        return json_response({ "access_token": access_token }, 200)
      else:
        return json_response({ "message": "Invalid password. "}, 400)
    else:
      return json_response({ "message": "User not found." }, 404)

## Register Account
@auth.route("/register", methods=["POST"])
def register():
  body = request.get_json().keys()

  if not "username" in body or not "password" in body or not "confirmation" in body:
    return json_response({ "message": "Invalid Params" }, 400)
  else:
    username, password, confirmation = request.get_json().values()
    
    # Search for user with username
    user = query_db(FETCH_QUERY, { "username": username }, one=True)

    # Check to see if user with username already exists
    if user:
      return json_response({ "message": "Username already used" }, 403)
    else:
      if password == confirmation:
        # Create new user in database
        query_db(SAVE_USER_QUERY, { "username": username, "password_hash": hash_password(password) }, one=True)
        new_user = query_db(FETCH_SAVED_USER_QUERY, one=True)

        access_token = generate(new_user["user_id"])
        return json_response({ "access_token": access_token }, 200)
      else:
        return json_response({ "message": "Password confirmation does not match." }, 400)