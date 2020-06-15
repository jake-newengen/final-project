from flask import current_app, json

# Simple JSON Response
def json_response(data, code = 200):
  return current_app.response_class(
    response = json.dumps(data),
    status = code,
    mimetype = "application/json"
  )