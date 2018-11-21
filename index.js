const express = require('express')
const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// Constants
const PORT = 9999;
const HOST = '0.0.0.0';



// App
const app = express();
app.post('/', jsonParser, (req, res) => {
    console.log(req.body)
    res.jsonp(req.body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);