const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// GET
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM pedidos',
            (error, result, fields) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(200).send(result);
            }
        );
    });
});

// POST
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'INSERT INTO pedidos (produtos_id_Produto, quantidade) VALUES (?, ?)',
            [req.body.id_produto, req.body.quantidade],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(201).send('ok');
            }
        );
    });
});

// GET BY ID
router.get('/:id_pedido', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM pedidos WHERE id_pedido = ?;',
            [req.params.id_pedido],
            (error, result, fields) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(200).send(result);
            }
        );
    });
});

// PATCH
router.patch('/:id_pedido', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'UPDATE pedidos SET produtos_id_Produto = ?, quantidade = ? WHERE id_pedido = ?',
            [req.body.id_produto, req.body.quantidade, req.params.id_pedido],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(202).send('ok');
            }
        );
    });
});

// DELETE
router.delete('/:id_pedido', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'DELETE FROM pedidos WHERE id_pedido = ?',
            [req.params.id_pedido],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(202).send('ok');
            }
        );
    });
});


module.exports = router;