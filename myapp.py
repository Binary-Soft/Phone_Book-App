import requests
import json

URL = 'http://127.0.0.1:8000/Home/'


def display_all(id=None):
    json_data = {}
    if id is not None:
        python_data = {'id': id}
        json_data = json.dumps(python_data)
    
    r = requests.get(url=URL, data=json_data)
    data = r.json()
    print(data)


#display_all()


def POST_DATA():
    python_data = {'name':'jack pritom', 'email': 'jackpri@gmail.com', 'phone':4545, 'country':'USA', 'city':'ting', 'address': 'jsgd'}
    json_data = json.dumps(python_data)
    r = requests.post(url=URL, data=json_data)
    data = r.json()
    print(data)


POST_DATA()
