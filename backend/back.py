from flask import request,Flask,jsonify
from flask_cors import CORS,cross_origin
from pymongo.mongo_client import MongoClient
import pymongo



uri = "mongodb+srv://kitti:bun12345@cluster0.bxs0qg3.mongodb.net/"
client = MongoClient(uri)
db = client["planlendar"]
collection = db["planlendar_info"]
info_in_plan = collection.find()
use = ""

id_db =client["ID"]
id_collection =id_db["ID_info"]
info_in_ID = id_collection.find()

info_id=[]
for i in info_in_ID:
    info_id.append(i)


info_plan=[]
for i in info_in_plan:
    info_plan.append(i)
app = Flask(__name__) 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'




@app.route("/")
def hello_world(): 
    return "<p>Welcome to planlendar</p>"

@app.route("/info",methods=["GET"])     #get info
def get_all_info():
    return jsonify(info_plan),200
 
@app.route("/id",methods=["GET"])     #get id_info
def get_all_id_info():
    return jsonify(info_id),200



@app.route("/register", methods=["POST"])    #register_account
@cross_origin()
def register():
    data = request.get_json()
    
    
    count = len(info_id)
    ttt = 0
    if count != 0:
        ttt = info_id[-1]["_id"] + 1
    
    new_register = {
        "_id": ttt,
        "username": data["username"],
        "password": data["password"],
        "email": data["email"],
        "phone_number": data["phone_number"]
    }
    
    info_id.append(new_register)
    
    try:
        # Insert into MongoDB
        id_collection.insert_one(new_register)
    except pymongo.errors.PyMongoError as e:
        return jsonify({"error": str(e)}), 500  # Internal Server Error
    
    return jsonify(info_id), 200


@app.route("/login", methods=["GET"])
@cross_origin()
def check_credentials():
    global use
    username = request.args.get("username")
    password = request.args.get("password")
    
    # Check if username and password match
    user = id_collection.find_one({"username": username, "password": password})
    if user:
        use=username
        return jsonify({"message": "Credentials match"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401




@app.route("/update_password", methods=["POST"])
def update_password():
    data = request.json
    
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    username = data.get("username")
    new_password = data.get("new_password")
    confirm_password = data.get("confirm_password")
    
    # Check if username and old password match
    user = id_collection.find_one({"username": username})
    if not user:
        return jsonify({"error": "Invalid username or password"}), 401
     
     # Update password
    if user and new_password ==confirm_password :
        id_collection.update_one({"username": username}, {"$set": {"password": new_password}})
    
        return jsonify({"message": "Password updated successfully"}), 200


@app.route("/add_task", methods=["POST"])  #infoplan
@cross_origin()
def add_task():
    data = request.get_json()
    count = len(info_plan)
    ttt = 0
    if count != 0:
        ttt = info_plan[-1]["_id"] + 1

    new_task = {

        "_id": ttt,
        "title": data["title"],
        "priority": data["priority"],
        "content": data["content"],
        "finish": False,

        "date_start": data["date_start"],
        "date_end": data["date_end"]
    }

    try:

        collection.insert_one(new_task)
    except pymongo.errors.PyMongoError as e:
        return jsonify({"error": str(e)}), 500  

    return jsonify({"message": "Task added successfully"}), 200



if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)