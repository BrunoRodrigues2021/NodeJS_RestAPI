const express = require('express');
const app = express();
const morgan = require('morgan');

const routeProducts = require('./routes/produtos');
const routeRequests = require('./routes/pedidos');

app.use(morgan('dev')); //RETORNA UM LOG DAS REQUESTS FEITAS NO SERVIDOR

app.use('/produtos', routeProducts);
app.use('/pedidos', routeRequests);

//QUANDO NÃO ENCONTRAR ROTA
app.use((req, res, next) => {
    const error = new Error('Não Encontrado');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;