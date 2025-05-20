from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    if username == "admin" and password == "123456":
        return "Login realizado com sucesso"
    return "Usuário ou senha incorretos", 401

if __name__ == "__main__":
    app.run(debug=True)
