var express = require('express');
var app = express();
app.use(express.static('public'))
console.log("all good")

app.listen(5000);
console.log('Listening on port 5000');