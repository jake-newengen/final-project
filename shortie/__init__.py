from flask import Flask

def create_app():
  # Configure application
  app = Flask(__name__, static_folder="static", static_url_path="/static")

  with app.app_context():
    from flask import Blueprint

    # Blueprints
    from .controllers.auth import auth
    from .utils.catch_all import catch_route

    # Blueprints
    app.register_blueprint(auth)
    app.register_blueprint(catch_route)

    return app