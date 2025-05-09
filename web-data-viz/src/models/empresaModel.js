var database = require("../database/config");

function buscarPorId(idEmpresa) {
  var instrucaoSql = `SELECT * FROM empresa WHERE idEmpresa = '${idEmpresa}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idEmpresa, nome, cnpj, codigoAtivacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (nome, cnpj) VALUES ('${nome}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
