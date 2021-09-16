const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

// POST
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

// GET BY ID
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'Pedido ' + id + " retornado",
        id: id
    });
});

// PATCH
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PATCH Pedidos OK'
    });
});

// DELETE
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido deletado'
    });
});


module.exports = router;