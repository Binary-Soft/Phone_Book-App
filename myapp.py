import requests
import json

URL = 'http://127.0.0.1:8000/Home/'


def display_all():
    r = requests.get(url=URL)
    data = r.json()
    print(data)


display_all()
