const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// GET
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM produtos',
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
            'INSERT INTO produtos (nome, preco) VALUES (?, ?)',
            [req.body.nome, req.body.preco],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(201).send('ok');
            }
        );
    });
});

// GET BY ID
router.get('/:id_produto', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM produtos WHERE id_produto = ?;',
            [req.params.id_produto],
            (error, result, fields) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(200).send(result);
            }
        );
    });
});

// PATCH
router.patch('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'UPDATE produtos SET nome = ?, preco = ? WHERE id_produto = ?',
            [req.body.nome, req.body.preco, req.body.id_produto],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(202).send('ok');
            }
        );
    });
});

// DELETE
router.delete('/:id_produto', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'DELETE FROM produtos WHERE id_produto = ?',
            [req.params.id_produto],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(202).send('ok');
            }
        );
    });
});




module.exports = router;