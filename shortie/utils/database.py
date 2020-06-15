import os

import sqlite3
from flask import g, current_app

DATABASE = "database.db"

def make_dicts(cursor, row):
  return dict((cursor.description[idx][0], value) for idx, value in enumerate(row))

def get_db():
  if "db" not in g:
    g.db = sqlite3.connect(
      os.path.join(current_app.root_path, DATABASE),
      detect_types=sqlite3.PARSE_DECLTYPES
    )
    g.db.row_factory = make_dicts

  return g.db
  
def close_db(e=None):
  db = g.pop('db', None)
  if db is not None:
    db.close()

def query_db(query, args=(), one=False):
  conn = get_db()
  cur = conn.execute(query, args)
  conn.commit()
  rv = cur.fetchall()
  cur.close()
  return (rv[0] if rv else None) if one else rv
