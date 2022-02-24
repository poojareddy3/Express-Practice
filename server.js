const express = require('express'); //importing express
const PORT = process.env.PORT || 3000; //saves the port either 3000 or the port it is on to the variable

const app = express();

// app.get('/', function (req,  res) {
// res.send("Hello World!");
// });

app.get('/', function (req, res){
res.send("Welcome to my webpage");
});

app.get('/favorite-food', function (req, res) {
   res.send("Indian");
});

app.get('/favorite-movie', function (req, res) {
    res.send("Transformers");
 });

 app.get('/about-me', function (req, res) {
    res.send("My name is Poojitha");
 });

 app.get('/contact', function (req, res) {
    res.send("7328237527");
 });

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});