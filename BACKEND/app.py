from flask import Flask, request, jsonify
from chat import get_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/chat', methods=['POST'])
def chat():
    user_msg = request.json.get('message')
    reply = get_response(user_msg)
    return jsonify({'response': reply})

if __name__ == '__main__':
    app.run(debug=True)