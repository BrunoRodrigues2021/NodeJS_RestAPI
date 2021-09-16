const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

// INSERI UM PEDIDO
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };
    res.status(200).send({
        mensagem: 'Pedido criado',
        pedidoCriado: pedido
    });
});

// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'Pedido ' + id + " retornado",
        id: id
    });
});

// ATUALIZA OS DADOS DE UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PATCH Pedidos OK'
    });
});

// DELETA OS DADOS DE UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido deletado'
    });
});


module.exports = router;