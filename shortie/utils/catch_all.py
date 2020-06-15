from flask import Blueprint, current_app, request

from ..utils.helpers import json_response

catch_route = Blueprint("catch_route", __name__)

@catch_route.route("/", defaults={"path": ""})
@catch_route.route("/<path:path>")
def catch_all(path):
  return current_app.send_static_file("index.html")