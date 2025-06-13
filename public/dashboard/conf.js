//Variável global para valor do sensor temporario - filtro
var valor = 0

//função para pegar o valor do sensor e colocar na variável global valor
function filtrarSensor(idSensor) {
    valor = idSensor.value
}


//função de click para mudar a variável sensorer para o valor 
const btnSelecionar = document.getElementById('btn_selecionar')
btnSelecionar.addEventListener('click', function () {
    sensores = Number(valor)
    modal.close()
    KPI(id_empresa)
    KPI2(id_empresa)
    KPI3(id_empresa)
    Grafico1(id_empresa, hectare, setores, sensores, dataAtual)
})


obterDataAtualFormatada()

function obterDataAtualFormatada() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

const dataAtual = obterDataAtualFormatada();

console.log(dataAtual)

function obterDataMenos30DiasFormatada() {
    const hoje = new Date();
    hoje.setDate(hoje.getDate() - 30);

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
}

// Exemplo de uso:
const dataMenos30 = obterDataMenos30DiasFormatada();
