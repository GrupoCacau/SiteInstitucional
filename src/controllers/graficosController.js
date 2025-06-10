  var graficosModel = require("../models/graficosModel");

  //KPI
  function KPI(req, res) {
    var fk_empresa = req.params.id_empresa;
    var hectare = req.params.hectare;
    var setores = req.params.setores;
    var sensores = req.params.sensores;

   graficosModel.KPI(fk_empresa, hectare, setores, sensores)
  .then(([resultadoPlatacao, resultadoHectare, resultadoSetores, resultadoSensores]) => {
    res.status(200).json({
      plantacao: resultadoPlatacao,
      hectare: resultadoHectare,
      setores: resultadoSetores,
      sensores: resultadoSensores
    });
  });
  }


  
  //KPI 02
  function KPI2(req, res) {
    var fk_empresa = req.params.id_empresa;
    var hectare = req.params.hectare;
    var setores = req.params.setores;
    var sensores = req.params.sensores;
    var dataAtual = req.params.dataAtual;
    graficosModel.KPI2(fk_empresa,dataAtual, hectare, setores, sensores ).then(([resultadoPlantacao, resultadoHectare, resultadoSetores, resultadoSensores]) => {
      res.status(200).json({
        Plantacao: resultadoPlantacao,
        Hectare: resultadoHectare,
        Setores: resultadoSetores,
        Sensores: resultadoSensores
      });
    });
  }

   //KPI
  function KPI3(req, res) {
    var fk_empresa = req.params.id_empresa;
    var hectare = req.params.hectare;
    var setores = req.params.setores;
    var sensores = req.params.sensores;
    var dataAtual = req.params.dataAtual;
    var dataAntiga = req.params.dataAntiga;

   graficosModel.KPI3(fk_empresa, hectare, setores, sensores, dataAtual, dataAntiga)
  .then(([resultadoPlatacao, resultadoHectare, resultadoSetores, resultadoSensores]) => {
    res.status(200).json({
      plantacao: resultadoPlatacao,
      hectare: resultadoHectare,
      setores: resultadoSetores,
      sensores: resultadoSensores
    });
  });
  }



  module.exports = {
      KPI,
      KPI2,
      KPI3
  }