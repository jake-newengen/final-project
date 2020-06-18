import os 

# Core
from flask import Blueprint, request, jsonify, redirect

# 3rd party
import uuid
from flask_jwt_extended import jwt_required,  get_jwt_identity

## Utils
from ..utils.helpers import json_response
from ..utils.database import query_db
from ..utils.shorten import encode, decode

# Blueprint
urls = Blueprint("urls", __name__, url_prefix="/urls")

## SQL Queries
FETCH_USER_URLS = "SELECT id, external_link, created_at FROM urls WHERE user_id = :user_id ORDER BY created_at DESC;"
FETCH_USER_URL = "SELECT * FROM urls WHERE id = :link_id LIMIT 1;"
CREATE_USER_URL = "INSERT INTO urls (user_id, short_link, external_link) VALUES (:user_id, :short_link, :external_link);"
FETCH_CREATED_URL_QUERY = "SELECT last_insert_rowid() as id;"
COUNT_URL_VISITS = "SELECT count(*) as total_visits FROM visits WHERE link_id = :link_id;"

@urls.route("/", methods=["GET"])
@jwt_required
def get_user_urls():
  current_user = get_jwt_identity()

  urls = query_db(FETCH_USER_URLS, { "user_id": current_user["user_id"] })
  for url in urls:
    url_id = url['id']

    # get total visits
    res = query_db(COUNT_URL_VISITS, { "link_id": url_id }, one=True)
    url["total_visits"] = res["total_visits"]
    url["short_link"] = f"{os.getenv('HOST')}/v/{encode(url_id)}"
  return json_response({ "urls": urls }, 200)

## Create New User Link
@urls.route("/create", methods=["POST"])
@jwt_required
def create_user_url():
  current_user = get_jwt_identity()
  body = request.get_json().keys()

  if not "external_link" in body:
    return json_response({ "message": "Provide an external link to shorten. "}, 400)
  else:
    data = request.get_json()
    short_link = uuid.uuid4()

  query_db(CREATE_USER_URL, { "user_id": current_user["user_id"], "short_link": str(short_link), "external_link": data["external_link"] })
  last_row_id = query_db(FETCH_CREATED_URL_QUERY, one=True)
  return json_response({ "short_link": f"{os.getenv('HOST')}/v/{encode(last_row_id['id'])}" }, 200)