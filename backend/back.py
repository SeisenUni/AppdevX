from flask import request,Flask,jsonify
from flask_cors import CORS,cross_origin
from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://kitti:bun12345@cluster0.bxs0qg3.mongodb.net/"
client = MongoClient(uri)
db = client["planlendar"]
collection = db["planlendar_info"]
info_in_DB = collection.find()
info=[]
for i in info_in_DB:
    info.append(i)
app = Flask(__name__) 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'




@app.route("/")
def hello_world():
    return "<p>Welcome to planlendar</p>"

@app.route("/info",methods=["GET"])
def get_all_info():
    return jsonify(info),200




if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)