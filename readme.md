# Shortie
A simple Python & Flask + React URL shortener

## Libraries
- Flask
- sqlite3
- bcrypt
- uuid
- flask_jwt_extended
- python-dotenv

- React
- React Router V6@alpha
- Axios

### Run production build
- `git clone https://github.com/jake-newengen/final-project.git`
- `cd final-project/shortie`
- `flask run`

### Run Locally
- `git clone https://github.com/jake-newengen/final-project.git`
- `cd final-project && pip-sync`
- `cd shortie && flask run`

### Build
The build process for react app builds the current react app and copies the output into the static directory which is hosted by flask.
- `cd client && yarn build`