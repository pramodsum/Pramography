import requests

folder_id = "5417734361"
limit = "100"

request_url = 'https://api.box.com/2.0/folders/' + folder_id + "/items?limit=" + limit
r = requests.get(request_url, params={'Authorization': 'Bearer trvvt5v1hhg6smcWG1mcVQMjOL0xC92V'})

print r.content
