from flask import request,Flask,jsonify
from flask_cors import CORS,cross_origin
from pymongo.mongo_client import MongoClient
import pymongo



uri = "mongodb+srv://kitti:bun12345@cluster0.bxs0qg3.mongodb.net/"
client = MongoClient(uri)
db = client["planlendar"]
collection = db["planlendar_info"]
info_in_plan = collection.find()

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
    
    # Check if all required fields are present
    # required_fields = ["username", "password", "email", "phone_number"]
    # if not all(field in data for field in required_fields):
    #     return jsonify({"error": "Missing required fields"}), 400
    
    # Assuming 'info_id' is a list
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





if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)