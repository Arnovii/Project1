//NUCLEO DEL SERVIDOR
const express = require('express');
const router = require('../router/user.router.js') //Middleware
const morgan = require('morgan');

const app = express();

//Se pone antes de las rutas para que morgan pueda leer cada peticion HTTP que se mande a las rutas.
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send(' hello world!');
});

app.use("/api", router);


module.exports = app;
