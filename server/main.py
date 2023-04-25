from flask import Flask, request
from flask_cors import CORS

import db

app = Flask(__name__)
CORS(app)

"""
Handlers related to the management of groups.
"""
@app.post("/groups")
def create_new_group():
  """
  Create new group in which to place static routes. New group needs
  a name and an optional description.

  Params (body):
    name: The name of the new group. Must be unique.
    description: An optional description for this group of routes.
  """
  name = request.json.get("name")
  description = request.json.get("description")

  if not name:
    return "name field required", 422

  sql_create_group = """
    INSERT INTO groups(name, description) VALUES (?, ?)
  """
  new_group = (name, description)

  conn = db.get_db_connection()
  cur = conn.cursor()
  cur.execute(sql_create_group, new_group)
  conn.commit()

  return "Success", 200

@app.get("/groups")
def get_groups():
  """
  Get all groups we have defined.
  """
  sql_get_groups = """
    SELECT * from groups;
  """

  conn = db.get_db_connection()
  cur = conn.cursor()
  cur.execute(sql_get_groups)
  rows = cur.fetchall()
  conn.close()

  return rows, 200

"""
Handlers relating to the management of routes.
"""
@app.post("/routes/<group_name>")
def add_route_to_group(group_name):
  """
  Create a new static route within an existing group. Group must exist.

  Parameters:
    group_name: The group to add the new static route to.
    route: The actual route in text form i.e. "1.1.1.1 via 10.11.12.13"
    name: An optional name
    description: Optional description of this route.
  """
  route = request.json.get("route")
  name = request.json.get("name")
  description = request.json.get("description")

  if not route or not group_name:
    return "route and group_name fields both required.", 422

  new_route = (route, name, description, group_name)
  sql_create_new_route = """
    INSERT INTO routes(route, name, description, group_name)
    VALUES(?, ?, ?, ?);
  """

  conn = db.get_db_connection()
  cur = conn.cursor()
  cur.execute(sql_create_new_route, new_route)
  conn.commit()

  conn.close()

  return "Success.", 200

@app.get("/routes/<group_name>")
def get_routes(group_name):
  """
  Get all routes associated with a particular group name.
  """
  if not group_name:
    return "group_name parametere must be present."

  sql_get_routes = """
    SELECT * FROM routes WHERE group_name=?;
  """

  conn = db.get_db_connection()
  cur = conn.cursor()
  cur.execute(sql_get_routes, (group_name,))

  rows = cur.fetchall()
  conn.close()
  
  conn.close()

  return rows, 200

@app.delete("/routes/<group_name>/<route>")
def delete_route(group_name, route):
  if not group_name or not route:
    return "Both group_name and route fields must be present.", 422
  
  sql_delete_route = """
    DELETE FROM routes WHERE route=? AND group_name=?
  """
  route_info = (route, group_name)
  
  conn = db.get_db_connection()
  cur = conn.cursor()
  cur.execute(sql_delete_route, route_info)
  conn.commit()
  conn.close()

  return "Success.", 200
