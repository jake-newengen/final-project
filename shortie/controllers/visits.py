# Core
from flask import Blueprint, request, jsonify, redirect

# Utils
from ..utils.helpers import json_response
from ..utils.database import query_db
from ..utils.shorten import decode

# Blueprint
visits = Blueprint("visits", __name__, url_prefix="/v")

# SQL Queries
FETCH_USER_URL = "SELECT * FROM urls WHERE id = :link_id LIMIT 1;"

## Visit URL
@visits.route("/<short_link>", methods=["GET"])
def redirect_to_externa_link(short_link):
  link_id = decode(short_link)
  url = query_db(FETCH_USER_URL, { "link_id": link_id }, one=True)
  if url:
    return redirect(url["external_link"])
  return json_response({ "ok": True })