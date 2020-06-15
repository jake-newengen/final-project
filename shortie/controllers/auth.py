from flask import Blueprint, request

from shortie.utils.helpers import json_response

auth = Blueprint("auth", __name__)

@auth.route("/login", methods=["POST"])
def login():
  json = request.get_json()
  return json_response({ "ok": 200, "username": json["username"] }, 200)