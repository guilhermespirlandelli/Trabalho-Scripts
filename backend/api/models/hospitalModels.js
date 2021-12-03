const conexao = require('../../config/conexao.js');

module.exports = {
    getAllHospital,
    putHospital,
    postHospital,
    getHospital
}

function getAllHospital(callback) {
    conexao.query('select * from hospital', callback)
}

function getHospital (id, callback) {
    const sql = "select * from hospital where hos_codigo = ?"
    conexao.query(sql, id, callback)
}

function putHospital(id, callback) {
    const sql = "update hospital set hos_nome = '" + id.hos_nome + 
    "', hos_nomediretor = '" + id.hos_nomediretor +
    "', hos_funcionarios = '" + id.hos_funcionarios + 
    "', hos_cidade = '" + id.hos_cidade + 
    "' where hos_codigo = '" + id.hos_codigo + "'"
    conexao.query(sql, callback)
}

function postHospital(id, callback) {
    const sql = "insert into hospital set ?"
    conexao.query(sql, id, callback)    
}



