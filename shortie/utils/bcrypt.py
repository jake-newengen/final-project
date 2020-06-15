import bcrypt

def hash_password(password):
  return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

def compare(password, hashed):
  if bcrypt.checkpw(password, hashed):
    return True
  else:
    return False