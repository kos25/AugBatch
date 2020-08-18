from flask import Flask ,request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:7898994162k@localhost:5432/augDB'
db = SQLAlchemy(app)
CORS(app)


class Contact(db.Model):
  __tablename__ = "Contact"
  id = db.Column(db.Integer, primary_key=True)
  FirstName = db.Column(db.String)
  LastName = db.Column(db.String)
  Email = db.Column(db.String)
  Phone = db.Column(db.BigInteger)


def __init__(self,FirstName,LastName,Email,Phone) :
    self.FirstName  = FirstName
    self.LastName = LastName
    self.Email = Email
    self.Phone = Phone



@app.route('/test/<name>')
def Hello_Alean(name):
    return 'Hello ' +name +'!' 



@app.route('/')
def Hello_Alean2():
    URlvar = request.args.get('Name')
    return  URlvar


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
    