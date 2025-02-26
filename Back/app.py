import openai
import os
from flask import Flask, render_template, request, jsonify
from openai import OpenAI


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
