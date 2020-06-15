from flask import Blueprint, g, request, jsonify

from ..utils.helpers import json_response
from ..utils.database import query_db
from ..utils.bcrypt import hash_password

auth = Blueprint("auth", __name__, url_prefix="/auth")

@auth.route("/login", methods=["POST"])
def login():
  json = request.get_json()
  return json_response({ "ok": 200, "username": json["username"] }, 200)


FETCH_QUERY = "SELECT id, username FROM users WHERE username = :username;"
SAVE_USER_QUERY = "INSERT INTO users (username, password) VALUES (:username, :password_hash);"
FETCH_SAVED_USER_QUERY = "SELECT last_insert_rowid() as user_id;"

## Register Account
@auth.route("/register", methods=["POST"])
def register():
  body = request.get_json().keys()

  if not "username" in body or not "password" in body or not "confirmation" in body:
    return json_response({ "ok": False, "error": "Invalid Params" }, 400)
  else:
    username, password, confirmation = request.get_json().values()
    
    # Search for user with username
    user = query_db(FETCH_QUERY, { "username": username }, one=True)

    # Check to see if user with username already exists
    if user:
      return json_response({ "ok": False, "message": "Username already used"}, 403)
    else:
      if password == confirmation:
        # Create new user in database
        query_db(SAVE_USER_QUERY, { "username": username, "password_hash": hash_password(password) }, one=True)
        res = query_db(FETCH_SAVED_USER_QUERY, one=True)
        return json_response({ "ok": True, "user_id": res["user_id"] }, 200)
      else:
        return json_response({ "ok": False, "message": "Password confirmation does not match." }, 400)