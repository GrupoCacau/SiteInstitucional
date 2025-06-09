var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/KPI/:id_empresa/:hectare/:setores/:sensores", function (req, res) {
  graficosController.KPI(req, res);
});


module.exports = router;