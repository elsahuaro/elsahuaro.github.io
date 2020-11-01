import json

with open('GeoJSONSecciones.json') as input:
    lines = input.readlines()
    for line in lines:
        data = json.loads(line)
        sec = data['properties']['Sección']
        with open(f'sec/{sec}.json', 'w') as output:
            json.dump(data, output)
