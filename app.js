const express = require('express')

const app = express();

app.use('/', (req, res, next) => {
    console.log('This will always runs');
    next();
});

app.use('/add', (req, res, next) => {
    res.send('<h1>The "Add Product" Page</h1>')
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello</h1>')
});

app.listen(3000);