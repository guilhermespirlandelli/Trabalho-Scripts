const conexao = require('../../config/conexao.js');
// const models = require('../models/hospitalModels.js');

module.exports = {

    hospitalMenu,
    hospitalGetById,
    hospitalEdit,
    hospitalNew
}

function hospitalMenu(req, res) {
    console.log('Listar Hospital {M O D E L}');
    const sql = "select * from hospital"
    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function hospitalGetById(req, res) {
    console.log('Listar Hospital {M O D E L}');

    const id = req.params.id
    const sql = "select * from hospital where hos_codigo = ?"
    conexao.query(sql, [id], (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function hospitalEdit(req, res) {
    const id = req.body
    console.log('Parametro Esperado Put: ' + id);
    const sql = "update hospital set hos_nome = '" + id.hos_nome +
        "', hos_nomediretor = '" + id.hos_nomediretor +
        "', hos_funcionarios = '" + id.hos_funcionarios +
        "', hos_cidade = '" + id.hos_cidade +
        "' where hos_codigo = '" + id.hos_codigo + "'"
    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function hospitalNew(req, res) {
    const id = req.body
    id.hos_codigo = null

    console.log('Gravando novo Hospital');

    const sql = "insert into hospital set ?"
    conexao.query(sql, id, (err, resposta) => {
        if (err) {
            throw err
        } res.send(resposta)
    })
}



