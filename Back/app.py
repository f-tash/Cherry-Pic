from flask import Flask, render_template, request, jsonify


from api.dreams import get_dreams_from_db, post_dreams_to_db, submit_dream
from api.validation import validate_post_dreams, validate_update_dreams

from returns.pipeline import is_successful
# Flaskの設定
app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/dreams", methods=["GET"])
def get_dreams():
    limit = request.args.get("limit", 10)
    res = get_dreams_from_db(limit=limit)

    if not is_successful(res):
        return jsonify({"error": "Internal Server Error"}), 500
    
    dreams = res.unwrap()
    return jsonify(dreams)


@app.route("/dreams", methods=["POST"])
def post_dream():
    data = request.json
    is_request_ok = validate_post_dreams(data)
    if not is_request_ok:
        return jsonify({"error": "Bad Request"}), 400
    dream_title = data["dream_title"]

    res=post_dreams_to_db(dream_title)
    if not is_successful(res):
        return jsonify({"error": "Internal Server Error"}), 500
    id,url=res.unwrap()
    return jsonify(response={"dream_id":id,"url": url})

@app.route("/dreams", methods=["PATCH"])
def update_dream():
    data = request.json
    is_request_ok = validate_update_dreams(data)
    if not is_request_ok:
        return jsonify({"error": "Bad Request"}), 400
    id = data["dream_id"]
    submit = data["submit"]

    res = submit_dream(id,submit)

    if not is_successful(res):
        return jsonify({"error": "Internal Server Error"}), 500
    
    return jsonify(response={"message": "Dream submitted successfully."})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
