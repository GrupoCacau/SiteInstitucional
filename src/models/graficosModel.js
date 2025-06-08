var database = require("../database/config")


function KPI(fk_empresa) {
  var instrucaoSql = `SELECT fkEmpresa, nomeFazenda, umidade, fkEmpresa AS UmidadeFazenda  FROM vw_kpis  WHERE nomeFazenda = 'Recanto do Sol' AND fkEmpresa = ${fk_empresa} LIMIT 5;`;

  return database.executar(instrucaoSql);
}

module.exports = {
    KPI
};