import sqlite3
from sqlite3 import Error

DB_PATH = r"C:/sqlite/db/StaticRoutesManager.db"

# Found at: https://stackoverflow.com/questions/3300464/how-can-i-get-dict-from-sqlite-query
def dict_factory(cursor, row):
  d = {}
  for idx, col in enumerate(cursor.description):
      d[col[0]] = row[idx]
  return d

def get_db_connection():
  conn = None

  try:
    conn  = sqlite3.connect(DB_PATH)
    conn.row_factory = dict_factory
  except Error as e: 
    print("Failed to create DB connection.")
  return conn

