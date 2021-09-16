const express = require('express');
const app = express();
const morgan = require('morgan');

const routeProducts = require('./routes/produtos');
const routeRequests = require('./routes/pedidos');

app.use(morgan('dev')); // RETORNA UM LOG DAS REQUESTS FEITAS NO SERVIDOR
app.use(express.urlencoded({ extended: false })); // ACEITA APENAS DADOS SIMPLES
app.use(express.json()); // SÓ ACEITA JSON DE ENTRADA NO BODY
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).send({ mensagem: 'ok' });
    }
    next();
});

app.use('/produtos', routeProducts);
app.use('/pedidos', routeRequests);

//QUANDO NÃO ENCONTRAR ROTA
app.use((req, res, next) => {
    const error = new Error('Rota não encontrada');
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