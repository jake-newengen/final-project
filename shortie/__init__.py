import os

# Core
from flask import Flask
from flask_jwt_extended import JWTManager

def create_app():
  # Configure application
  app = Flask(__name__, static_folder="static", static_url_path="/static")

  # Configure JWT
  app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")
  JWTManager(app)

  with app.app_context():
    from flask import Blueprint

    # Blueprints
    from .controllers.auth import auth
    from .controllers.urls import urls
    from .utils.catch_all import catch_route

    # Blueprints
    app.register_blueprint(auth)
    app.register_blueprint(urls)
    app.register_blueprint(catch_route)

    return app