const express = require('express');
const fruits = require('./fruits');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/ping', function (req, res) {
    res.json('pong');
});

app.get('/greet/:name', function (req, res) {
    console.log(req.params);
    res.json(`Why hello there ${req.params.name}!`);
});


app.get('/five/:n', function (req, res) {
 let arr = [];
  for(let i = 1; i <= req.params.n; i++){
        arr.push(i);
    }
    res.json("The array is" + arr);
});

// app.get('/five', (req, res) => {
// const arr = ["1" ,"2", "3", "4", "5"];
// res.json(arr);
// })

app.get('/evens/:n', function (req, res) {
    let evens = [];
    console.log(req.params.n);
    for (let i = 0; i <= req.params.n; i++) {
        if (i % 2 == 0) {
            evens.push(i);
        }
    }
    res.json(evens);
});

app.get('/namelength/:name', function (req, res) {
    let nameLength = (req.params.name).length;
    res.json(`Length of ${req.params.name} is ${nameLength}`);
});


app.get("/fruits", function (req, res) {
    res.json(fruits);
});


// app.get('/fruits/:name', (req, res) => {
//     //let capName = (req.params.name).charAt(0).toUpperCase() + (req.params.name).slice(1).toLowerCase();
//        const fruitName = fruits.filter((i) => {
//             if (i.name === req.params.name) {
//                 console.log(i.name);
//                 return i.name;
//             }
//         })
//         res.json(fruitName);
//   });

  app.get('/fruits/:fname', (req, res) => {
    //your code here
    // HINT - you can use a higher-order array method
    let fruitName = req.params['fname'];
    let result = fruits.filter((ele) => {
        if(ele.name === fruitName){
            return ele.name;
        }
    })
   res.json(result);
});

// app.get("/fruits/:name" , (req, res) => {
//     const search = req.params.name;
//     const found = fruits.find(fruit => fruit.name === search);
//     res.json(found);
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
