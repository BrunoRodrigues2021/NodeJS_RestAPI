const express = require('express');
const app = express();

const routeProducts = require('./routes/produtos');
const routeRequests = require('./routes/pedidos');

app.use('/produtos', routeProducts);
app.use('/pedidos', routeRequests);

module.exports = app;