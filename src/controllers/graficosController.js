  var graficosModel = require("../models/graficosModel");

  //KPI
  function KPI(req, res) {
    var fk_empresa = req.params.id_empresa;
    var hectare = req.params.hectare;
    var setores = req.params.setores;
    var sensores = req.params.sensores;
    var dataAtual = req.params.dataAtual;
   graficosModel.KPI(fk_empresa, dataAtual, hectare, setores, sensores)
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
    graficosModel.KPI2(fk_empresa, dataAtual, hectare, setores, sensores ).then(([resultadoPlantacao, resultadoHectare, resultadoSetores, resultadoSensores]) => {
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

   function Rosca(req, res) {
    var fk_empresa = req.params.id_empresa;


   graficosModel.Rosca(fk_empresa)
  .then(([resultado]) => {
res.status(200).json(resultado)
  });
  }


    function Grafico1(req, res) {
    
    var fk_empresa = req.params.id_empresa;
    var hectare = req.params.hectare;
    var setores = req.params.setores;
    var sensores = req.params.sensores;
    var dataAtual = req.params.dataAtual;

   graficosModel.Grafico1(fk_empresa, hectare, setores, sensores, dataAtual).then(([resultadoPlatacao, resultadoHectare, resultadoSetores, resultadoSensores]) => {
    res.status(200).json({
      plantacao: resultadoPlatacao,
      hectare: resultadoHectare,
      setores: resultadoSetores,
      sensores: resultadoSensores
    });
  });
  }

   function Grafico2(req, res) {
    var fk_empresa = req.params.id_empresa;


   graficosModel.Grafico2(fk_empresa).then(([resultadoHectare, resultadoSetores]) => {
    res.status(200).json({
      hectare: resultadoHectare,
      setores: resultadoSetores
    });
  });
  }




  module.exports = {
      KPI,
      KPI2,
      KPI3,
      Rosca,
      Grafico1,
      Grafico2
  }