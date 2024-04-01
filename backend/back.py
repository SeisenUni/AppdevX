from flask import request,Flask,jsonify
from flask_cors import CORS,cross_origin
from pymongo.mongo_client import MongoClient
import pymongo
from datetime import datetime
from datetime import datetime, timedelta



uri = "mongodb+srv://kitti:bun12345@cluster0.bxs0qg3.mongodb.net/"  #urlmongo
client = MongoClient(uri)
db = client["planlendar"]   #db_planner
collection = db["planlendar_info"]   #collection_planner
info_in_plan = collection.find()      #all  
use = "iamdb"       #username

id_db =client["ID"]   #db_id
id_collection =id_db["ID_info"]  #collection_id
info_in_ID = id_collection.find()  

info_id=[]               #arrary collect all id
for i in info_in_ID:
    info_id.append(i)


info_plan=[]        #arrary collect all planner
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
    
    
    count = len(info_id)                        #id not same
    ttt = 0
    if count != 0:
        ttt = info_id[-1]["_id"] + 1
    
    user_s = data["username"]
    check_mail = data["email"]
    x= check_mail.find("@gmail.com")    #check @gmail 
    y= check_mail.find("@hotmail.com")  #check @hotmail 
    
    if id_collection.find_one({"username": user_s}) :    #username same
         return jsonify({"error": "Invalid credentials"}), 401
    else:      
           if x !=-1 or y!=-1 :
                new_register = {                    #register user
            "_id": ttt,
            "username": data["username"],
            "password": data["password"],
            "email": data["email"],
            "phone_number": data["phone_number"]
                         }
           else :
                return jsonify({"error": "Invalid credentials"}), 401
                   
    
    info_id.append(new_register)   #put into arrary
    
    try:
      
        id_collection.insert_one(new_register)   #insert into mongodb
    except pymongo.errors.PyMongoError as e:
        return jsonify({"error": str(e)}), 500  # Internal Server Error
    
    return jsonify(info_id), 200


@app.route("/login", methods=["POST"])      #login
@cross_origin()
def check_credentials():
    global use
    data = request.get_json() 
    username = data["username"]
    password = data["password"]
    
    # Check if username and password match
    user = id_collection.find_one({"username": username, "password": password})
    if user:
        
        use=username  #collect username 
        return jsonify({"message": "Credentials match"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401




@app.route("/reset_pass", methods=["POST"]) #reset password
@cross_origin()
def update_password():
    data = request.get_json() 
    global use
    
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
   
    
   
    newpassword= data["newpassword"]
    conpassword = data["conpassword"]
    
    
    # Check username
    user = id_collection.find_one({"username": use})
    if not user:
        return jsonify({"error": "Invalid username or password"}), 401
     
     # Update password
    if user and newpassword ==conpassword : #password and confrim password match
        id_collection.update_one({"username": use}, {"$set": {"password": newpassword}})
    
        return jsonify({"message": "Password updated successfully"}), 200

@app.route("/reset_email", methods=["POST"])   #reset email
@cross_origin()
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


@app.route("/forget",methods=["POST"])    #forgetpassword
@cross_origin()
def forget():
    data=request.get_json()
    global use
    check=data["check"]
    phone_number=data["phone_number"]
    
    check_id=id_collection.find_one({"username":check})
    
    check_email=id_collection.find_one({"email":check})
    check_number=id_collection.find_one({"phone_number":phone_number})
    if check_email  : #if email match
        if check_number : #if number match
            use= check_number["username"]   #collect username
            return jsonify({"message": "Can reset password"}), 200
    if check_id  :  #if username match
        if check_number :  #if number match
            use= check_id["username"]  #collect username
            return jsonify({"message": "Can reset password"}), 200   
            
    return jsonify({"message": "invalid"}),401    
    

@app.route("/add_task", methods=["POST"]) #add to planner
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
    pri =data["priority"]
    int(pri)
    
    date_object = datetime.strptime(data["start"], "%Y-%m-%d") #change string to date
    date_object2 = datetime.strptime(data["end"], "%Y-%m-%d")   #change string to date
    new_task = {
        "_id": ttt,
        "title": data["title"],
        "priority": int(pri),
        "finish": False,
        "username":use,
        "date_start": date_object,
        "date_end": date_object2,
        "time" : time 
       
    }
    info_plan.append(new_task)
    try:
        collection.insert_one(new_task) 
    except pymongo.errors.PyMongoError as e:
        return jsonify({"error": str(e)}), 500  

    return jsonify({"message": "Task added successfully"}), 200



@app.route("/delete_info/<task_id>", methods=["DELETE"])  #delete planner
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



@app.route("/get_by_user", methods=["GET"])     #get all planner by user
@cross_origin()
def get_user():
    global use
   
    filter = {"username": use}

    users = list(collection.find(filter))
    users.sort(key=lambda x: x['priority'])
    
    if users:
        return jsonify(users), 200
    else:
        return jsonify({"error": "No users found"}), 404


   
if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)