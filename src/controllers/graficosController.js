  var graficosModel = require("../models/graficosModel");

  //KPI
  function KPI(req, res) {
    var fk_empresa = req.params.id_empresa;

    graficosModel.KPI(fk_empresa).then((resultado) => {
      res.status(200).json(resultado);
    });
  }


  module.exports = {
      KPI
  }