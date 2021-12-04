const conexao = require('../../config/conexao.js');
// const models = require('../models/hospitalModels.js');

module.exports = {

    especialidadeMenu,
    especialidadeGetById,
    especialidadeEdit,
    especialidadeNew
}

function especialidadeMenu(req, res) {
    console.log('Listar especialidade {M O D E L}');
    const sql = "select * from especialidade"
    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function especialidadeGetById(req, res) {
    const id = req.params.id
    console.log('Listar Especialidade {M O D E L}');    
    const sql = "select * from especialidade where esp_codigo = ?"
    conexao.query(sql, [id], (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function especialidadeEdit(req, res) {
    const id = req.body
    console.log('Parametro Esperado Put: ' + id);
    const sql = "update especialidade set esp_descricao = '" + id.esp_descricao +        
        "', esp_responsavel = '" + id.esp_responsavel +
        "', esp_vagas = '" + id.esp_vagas +
        "' where hos_codigo = '" + id.hos_codigo + "'"
    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function especialidadeNew(req, res) {
    const id = req.body
    id.esp_codigo = null

    console.log('Gravando novo especialidade');

    const sql = "insert into especialidade set ?"
    conexao.query(sql, [id], (err, resposta) => {
        if (err) {
            throw err
        } res.send(resposta)
    })
}



