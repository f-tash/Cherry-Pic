from flask import Flask, render_template, request, jsonify


from api.dreams import get_dreams_from_db
from api.validation import validate_post_dreams


# Flaskの設定
app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/dreams", methods=["GET"])
def get_dreams():
    response = get_dreams_from_db()
    return jsonify(response)


@app.route("/dreams", methods=["POST"])
def post_dream():
    data = request.json
    is_request_ok = validate_post_dreams(data)
    if not is_request_ok:
        return jsonify({"error": "Bad Request"}), 400
    dream_title = data["dream_title"]

    response = {"message": "dream created successfully", "id": 123, "status": "success"}

    return jsonify(response)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
