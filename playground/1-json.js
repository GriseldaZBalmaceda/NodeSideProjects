const fs = require('fs')

const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name="griselda";
data.age=22;

const userData = JSON.stringify(data);
fs.writeFileSync('1-json.json',userData)
