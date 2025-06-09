  var graficosModel = require("../models/graficosModel");

  //KPI
  function KPI(req, res) {
    var fk_empresa = req.params.id_empresa;
    var hectare = req.params.hectare;
    var setores = req.params.setores;
    var sensores = req.params.sensores;

    graficosModel.KPI(fk_empresa, hectare, setores, sensores).then((resultado) => {
      res.status(200).json(resultado);
    });
  }


  module.exports = {
      KPI
  }