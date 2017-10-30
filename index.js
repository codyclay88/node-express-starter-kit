var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/Cody', (req, res) => {
    res.send('<h1>Hello Cody!</h1>');
});

app.get('/Bill', (req, res) => {
    res.send('<h1>Hello Bill!</h1>');
});

var server = app.listen(3000, () => {
    console.log("listening on port 3000");
});