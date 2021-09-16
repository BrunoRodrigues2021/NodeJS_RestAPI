const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produtos OK'
    });
});

// INSERI UM PRODUTO
router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(200).send({
        mensagem: 'POST Produtos OK',
        produtoCriado: produto
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'ID ESPECIAL',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Produtos Com Parâmetro OK',
            id: id
        });
    }
});

// ATUALIZA OS DADOS DE UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PATCH Produtos OK'
    });
});

// DELETA OS DADOS DE UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'DELETE Produtos OK'
    });
});




module.exports = router;