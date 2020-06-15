from flask import Blueprint, request, jsonify

## Utils
from ..utils.helpers import json_response
from ..utils.database import query_db

# Blueprint
urls = Blueprint("urls", __name__, url_prefix="/urls")

## SQL Queries
FETCH_USER_URLS = "SELECT id, short_link, external_link FROM urls WHERE user_id = :user_id;"
CREATE_USER_URL = "INSERT INTO urls (user_id, short_link, external_link) VALUES (:user_id, :short_link, :external_ink);"
FETCH_CREATED_URL_QUERY = "SELECT last_insert_rowid() as link_id;"

## Get User Links
@urls.route("/", methods=["GET"])
def fetch_user_urls():
  links = query_db(FETCH_USER_URLS, { "user_id": 2 })
  return json_response({ "ok": 200, "links": links }, 200)

## Create New User Link
@urls.route("/", methods=["POST"])
def register():
  # body = request.get_json().keys()
  query_db(CREATE_USER_URL, { "user_id": 2, "short_link": "", "external_link": "" })
  new_link = query_db(FETCH_CREATED_URL_QUERY, one=True)
  return json_response({ "ok": True, "link": new_link }, 200)