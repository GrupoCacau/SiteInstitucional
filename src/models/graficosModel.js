var database = require("../database/config")


function KPI(fk_empresa, hectare, setores, sensores) {
  var Kpi01selectPlantacao = `
    SELECT fkEmpresa, nomeFazenda, umidade as umidadeMEdia, fkEmpresa AS UmidadeFazenda FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND fkEmpresa = ${fk_empresa} LIMIT 5;
  `;

  var Kpi01selectHectare = `
    SELECT nomeFazenda, nomeHectares AS Hectare, umidade AS UmidadeFazenda FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND nomeHectares = 'Hectare ${hectare}' LIMIT 5;
  `;

  var Kpi01selectSetores = `
  SELECT nomeFazenda, nomeHectares, umidade, nomeSetores FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND nomeHectares = 'Hectare ${hectare}' AND nomeSetores  = 'Setor ${hectare}-${setores}' 
    LIMIT 5;
  `;

  var Kpi01selectSensores = `
    SELECT nomeFazenda, nomeHectares, umidade, nomeSetores, codSensor FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND nomeHectares = 'Hectare ${hectare}' AND nomeSetores  =  'Setor ${hectare}-${setores}' AND codSensor = ${sensores};
  `;

  
  return Promise.all([
    database.executar(Kpi01selectPlantacao),
    database.executar(Kpi01selectHectare),
    database.executar(Kpi01selectSetores),
    database.executar(Kpi01selectSensores)
  ]);
}

function KPI2(fk_empresa, dataAtual, hectare, setores, sensores) {

        var Kpi02selectPlantacao = `SELECT nomeFazenda, AVG(umidade) AS MediaUmidadeFazenda FROM vw_kpis WHERE 
        nomeFazenda = 'Recanto do Sol' AND dataCaptura LIKE '%${dataAtual}%' AND fkEmpresa = ${fk_empresa};`;

        var Kpi02selectHectare = `
            SELECT nomeFazenda, nomeHectares AS Hectare, AVG(umidade) AS MediaUmidadeFazenda 
            FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND dataCaptura LIKE '%${dataAtual}%' AND nomeHectares = 'Hectare ${hectare}' AND fkEmpresa = ${fk_empresa};
        `;

        var Kpi02selectSetores = `
            SELECT nomeFazenda, nomeHectares AS Hectare, nomeSetores AS nomeSetores, AVG(umidade) AS MediaUmidadeFazenda 
            FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND dataCaptura LIKE '%${dataAtual}%' AND nomeHectares = 'Hectare ${hectare}' AND nomeSetores = 'Setor ${hectare}-${setores}' AND fkEmpresa = ${fk_empresa};
        `;

        var Kpi02selectSensores = `
            SELECT nomeFazenda, nomeHectares AS Hectare, nomeSetores AS nomeSetores, codSensor AS codSensor, AVG(umidade) AS MediaUmidadeFazenda 
            FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND dataCaptura LIKE '%${dataAtual}%' AND nomeHectares = 'Hectare ${hectare}' AND nomeSetores = 'Setor ${hectare}-${setores}' AND codSensor = ${sensores} AND fkEmpresa = ${fk_empresa};
        `;

        return Promise.all(
            [
            database.executar(Kpi02selectPlantacao), 
            database.executar(Kpi02selectHectare), 
            database.executar(Kpi02selectSetores), 
            database.executar(Kpi02selectSensores)
        ]
        );  
  
}


function KPI3(fk_empresa, hectare, setores, sensores, dataAtual, dataMenos30) {
  var Kpi03selectPlantacao = `
   SELECT nomeFazenda, TRUNCATE(AVG(umidade), 2) AS MediaUmidadeFazenda FROM vw_kpis WHERE fkEmpresa = ${fk_empresa} AND
  nomeFazenda = 'Recanto do Sol' 
  AND dataCaptura BETWEEN '${dataMenos30}' AND '${dataAtual}';
  `;

  var Kpi03selectHectare = `
    SELECT nomeHectares, TRUNCATE(AVG(umidade), 2) AS MediaUmidadeHectare FROM vw_kpis WHERE nomeHectares = 'Hectare ${hectare}' AND dataCaptura BETWEEN '${dataMenos30}' AND '${dataAtual}';
  `;

  var Kpi03selectSetores = `
 SELECT nomeSetores, TRUNCATE(AVG(umidade), 2) AS MediaUmidadeSetores
FROM vw_kpis
WHERE nomeSetores = 'Setor ${hectare}-${setores}'
  AND dataCaptura BETWEEN '${dataMenos30}' AND '${dataAtual}'
GROUP BY nomeSetores;


  `;

  var Kpi03selectSensores = `SELECT ROUND(AVG(umidade), 2) AS MediaUmidade  FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol'AND nomeHectares = 'Hectare ${hectare}'AND nomeSetores = 'Setor ${hectare}-${setores}'AND codSensor = ${sensores}
  AND dataCaptura BETWEEN '${dataMenos30}' AND '${dataAtual}';
  `;

  
  return Promise.all([
    database.executar(Kpi03selectPlantacao),
    database.executar(Kpi03selectHectare),
    database.executar(Kpi03selectSetores),
    database.executar(Kpi03selectSensores)
  ]);
}



function Rosca(fk_empresa) {
  var Rosca = `
   SELECT COUNT(situacaoSensor) AS Funcionando, (SELECT COUNT(situacaoSensor) FROM vw_kpis WHERE situacaoSensor = 'Inativo' and fkEmpresa = ${fk_empresa}) AS 'NaoFuncionando' FROM vw_kpis WHERE situacaoSensor = 'Ativo';`;


    return database.executar(Rosca)

}

module.exports = {
    KPI,
    KPI2,
    KPI3,
    Rosca
};