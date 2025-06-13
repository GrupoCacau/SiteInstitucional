var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/KPI/:id_empresa/:hectare/:setores/:sensores", function (req, res) {
  graficosController.KPI(req, res);
});

router.get("/KPI2/:id_empresa/:dataAtual/:hectare/:setores/:sensores", function (req, res) {
  graficosController.KPI2(req, res);
});

router.get("/KPI3/:id_empresa/:hectare/:setores/:sensores/:dataAtual/:dataAntiga", function (req, res) {
  graficosController.KPI3(req, res);
});

router.get("/Rosca/:id_empresa", function (req, res) {
  graficosController.Rosca(req, res);
});

router.get("/Grafico1/:id_empresa/:hectare/:setores/:sensores/:dataAtual", function (req, res) {
  graficosController.Grafico1(req, res);
});


router.get("/Grafico2/:id_empresa", function (req, res) {
  graficosController.Grafico2(req, res);
});



module.exports = router;