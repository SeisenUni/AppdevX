from flask import request,Flask,jsonify
from flask_cors import CORS,cross_origin
from pymongo.mongo_client import MongoClient
import pymongo
from datetime import datetime
from datetime import datetime, timedelta



uri = "mongodb+srv://kitti:bun12345@cluster0.bxs0qg3.mongodb.net/"
client = MongoClient(uri)
db = client["planlendar"]
collection = db["planlendar_info"]
info_in_plan = collection.find()
use = "iamdb"

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


@app.route("/login", methods=["POST"])
@cross_origin()
def check_credentials():
    global use
    data = request.get_json() 
    username = data["username"]
    password = data["password"]
    
    # Check if username and password match
    user = id_collection.find_one({"username": username, "password": password})
    if user:
        
        use=username
        return jsonify({"message": "Credentials match"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401




@app.route("/reset_pass", methods=["POST"])
@cross_origin()
def update_password():
    data = request.get_json() 
    global use
    
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
   
    
   
    newpassword= data["newpassword"]
    conpassword = data["conpassword"]
    
    
    # Check if username and old password match
    user = id_collection.find_one({"username": use})
    if not user:
        return jsonify({"error": "Invalid username or password"}), 401
     
     # Update password
    if user and newpassword ==conpassword :
        id_collection.update_one({"username": use}, {"$set": {"password": newpassword}})
    
        return jsonify({"message": "Password updated successfully"}), 200

@app.route("/reset_email", methods=["POST"]) 
@cross_origin()#changeemail
def update_email():
    data = request.get_json() 
    global use
    
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
   
    
   
    email= data["email"]
    newemail= data["newemail"]
    
    
    # Check  have user?
    user = id_collection.find_one({"username": use})
    if not user:
        return jsonify({"error": "Invalid username or password"}), 401
     
     # Update password
    if user and email == newemail :
        id_collection.update_one({"username": use}, {"$set": {"email": email}})
    
        return jsonify({"message": "Password updated successfully"}), 200


@app.route("/forget",methods=["POST"])
@cross_origin()
def forget():
    data=request.get_json()
    global use
    check=data["check"]
    phone_number=data["phone_number"]
    
    check_id=id_collection.find_one({"username":check})
    
    check_email=id_collection.find_one({"email":check})
    check_number=id_collection.find_one({"phone_number":phone_number})
    if check_email  :
        if check_number :
            use= check_number["username"]
            return jsonify({"message": "Can reset password"}), 200
    if check_id  :
        if check_number :
            use= check_id["username"]
            return jsonify({"message": "Can reset password"}), 200   
            
    return jsonify({"message": "invalid"}),401    
    
    
    
    








@app.route("/add_task", methods=["POST"]) #infoplan
@cross_origin()
def add_task():
    global use
    data = request.get_json()
    count = len(info_plan)
    ttt = 0
    if count != 0:
        ttt = info_plan[-1]["_id"] + 1
    
    timestart = data["startT"]
    timeend = data["endT"]
    time = timestart +"-"+ timeend
    # str1=data["start"]
    # str2 =str1[0:2]
    # int(str2)
    
    # str4 =str1[3:5]
    # int(str4)
    
    # str3=data["end"]
    # str5 =str3[0:2]
    # int(str5)
    
    # str6 =str3[3:5]
    # int(str6)

    date_object = datetime.strptime(data["start"], "%Y-%m-%d")
    date_object2 = datetime.strptime(data["end"], "%Y-%m-%d")
    new_task = {
        "_id": ttt,
        "title": data["title"],
        "priority": data["priority"],
        "finish": False,
        "username":use,
        "date_start": date_object,
        "date_end": date_object2,
        "time" : time 
        # "day_start": int(str2),
        # "month_start": int(str4),
        # "day_end": int(str5),
        # "month_end":int(str6)
    }
    info_plan.append(new_task)
    try:
        collection.insert_one(new_task)
    except pymongo.errors.PyMongoError as e:
        return jsonify({"error": str(e)}), 500  

    return jsonify({"message": "Task added successfully"}), 200




@app.route("/delete_info/<task_id>", methods=["DELETE"])  #delete info plan
@cross_origin()
def delete_task(task_id):
    try:
        
        result = collection.delete_one({"_id": int(task_id)})
        if result.deleted_count == 1:
            return jsonify({"message": "Task deleted successfully"}), 200
        else:
            return jsonify({"error": "Task not found"}), 404
    except pymongo.errors.PyMongoError as e:
        return jsonify({"error": str(e)}), 500


@app.route("/date_check", methods=["GET"])
@cross_origin()
def date_check():
    global use
    global info_in_plan
    day = "01"
    month= "02"
    str= "2024"+month+day
    date_input = datetime.strptime(str, "%Y-%m-%d")
    arr=[]
    for i in info_in_plan:
        date_end = info_plan["date_end"]
        date_start = info_plan["date_start"]
        if date_end - date_input >=timedelta(0):
            if date_start - date_input <=timedelta(0):
                arr.append(i)
    
    return jsonify(arr),200            
        
    
    
   
                 

              
                    









@app.route("/get_by_user", methods=["GET"])
@cross_origin()
def get_user():
    global use
   
    filter = {"username": use}

    users = list(collection.find(filter))
    
    if users:
        return jsonify(users), 200
    else:
        return jsonify({"error": "No users found"}), 404


@app.route("/test", methods=["POST"])
@cross_origin()
def test():
    
    data=request.get_json()
   
    tt = data["value"]
    
   
    if tt==2 :
            return jsonify(tt), 200
    else:
         return jsonify({"error": "No users found"}), 404
   
   
    
    
   







if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)