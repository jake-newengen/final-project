from flask import Flask, Blueprint, jsonify, request

# Blueprints
from .controllers.auth import auth

# Application Helper Functions
from .utils.helpers import json_response

# Configure application
app = Flask(__name__, static_folder="static", static_url_path="/static")

# Blueprints
app.register_blueprint(auth)

# Auto-reload templates
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    return app.send_static_file("index.html")

if __name__ == "__main__":
  app.run(debug=True)