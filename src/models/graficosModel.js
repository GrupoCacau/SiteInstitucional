var database = require("../database/config")


function KPI(fk_empresa, hectare, setores, sensores) {
  var Kpi01selectPlatacao = `SELECT fkEmpresa, nomeFazenda, umidade, fkEmpresa AS UmidadeFazenda  FROM vw_kpis  WHERE nomeFazenda = 'Recanto do Sol' AND fkEmpresa = ${fk_empresa} LIMIT 5;`;

  return database.executar(Kpi01selectPlatacao).then(() => {
        var Kpi01selectHectare = `
            SELECT nomeFazenda, nomeHectares AS Hectare, umidade AS UmidadeFazenda FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND nomeHectares = 'Hectare ${hectare}' LIMIT 5;
        `;

        return database.executar(Kpi01selectHectare).then(() => {
        var Kpi01selectSetores = `
            SELECT nomeFazenda, nomeHectares, umidade, nomeSetores FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND nomeHectares = 'Hectare ${hectare}' AND nomeSetores  = 'Setor ${hectare}-${setores}' LIMIT 5;
        `;

        return database.executar(Kpi01selectSetores).then(() => {
        var Kpi01selectSensores = `
            SELECT nomeFazenda, nomeHectares, umidade, nomeSetores, codSensor 
            FROM vw_kpis WHERE nomeFazenda = 'Recanto do Sol' AND nomeHectares = 'Hectare ${hectare}' AND nomeSetores  =  'Setor ${hectare}-${setores}' AND codSensor = ${sensores};
        `;

        return database.executar(Kpi01selectSensores);
    })
    })

    })
}

module.exports = {
    KPI
};