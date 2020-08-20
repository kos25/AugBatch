from flask import Flask ,request , jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:7898994162k@localhost:5432/augDB'
db = SQLAlchemy(app)
CORS(app)



class Tasklists(db.Model):
   __tablename__ = "tasklists"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String)    
   
#constructor function of  tasklits 
   def __init__(self, name):
    self.name = name
  

#to create tasks tabel in database 
class Tasks(db.Model):
   __tablename__ = "tasks"
   id = db.Column(db.Integer, primary_key = True)
   text = db.Column(db.String)
   Completed = db.Column(db.Boolean)
   list_id = db.Column(db.Integer)
 
   
#constructor function of  tasklits 
   def __init__(self, text ,list_id):
    self.text = text
    self.list_id = list_id
    self.Completed = False

@app.route('/')
def Hello_Alean():
    return 'Hello Do to app !'


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
