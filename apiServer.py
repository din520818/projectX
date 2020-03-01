from os import path
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
CORS(app)
api = Api(app)


class Welcome(Resource):
    def get(self):
        return {"key": "Welcome to Project X"}


class firstPost(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("arg", type=str, default="It works")
        args = parser.parse_args()
        arg = args['arg']
        retValue = {"key": "Haha Vayo hai guyz::: {} :: :D".format(arg)}
        return retValue


# welcome page
api.add_resource(Welcome, "/")

api.add_resource(firstPost, "/firstPost")

if __name__ == "__main__":
    absPath = path.abspath(__file__)
    app.run(debug=True, port=4000, host="localhost")