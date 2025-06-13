//Variáveis do session storage
let id_user = sessionStorage.ID_USUARIO
let id_empresa = sessionStorage.ID_EMPRESA
//Variáveis de filtro
let hectare = Number(select_hectare.value)
let setores = Number(select_setores.value)
let sensores = 0

//Filtro por click
const selectElement = document.querySelector("#select_hectare");
//Hectare
selectElement.addEventListener("change", (event) => {
    hectare = Number(event.target.value);
    console.log(hectare)
    hectare_modal.innerHTML = hectare
    KPI(id_empresa)
    KPI2(id_empresa)
    KPI3(id_empresa)
    Grafico1(id_empresa)
});
const selectElement02 = document.querySelector("#select_setores");
//Setores
selectElement02.addEventListener("change", (event) => {
    setores = Number(event.target.value);
    console.log(setores)
    setor_modal.innerHTML = setores
    KPI(id_empresa)
    KPI2(id_empresa)
    KPI3(id_empresa)
    Grafico1(id_empresa)
});

//KPI´s
//KPI 1
function KPI(id_empresa) {
    fetch(`/graficos/KPI/${id_empresa}/${dataAtual}/${hectare}/${setores}/${sensores}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.error('nada');
            }
        })
        .then(function (json) {
            if (json) {
                // console.log(json);
                // console.log(json.hectare)
                fazerMediaKPI1(json)
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}

//Função de média da KPI 1
function fazerMediaKPI1(json) {
    let media = 0
    let filtro = json.plantacao
    let titulo = `Umidade atual da Plantação`

    //Mudando o filtro
    if (hectare == 11 && setores == 0 && sensores == 0) {
        filtro = json.plantacao
        titulo = `Umidade atual da Plantação`
    }
    else if ((hectare > 0 && hectare <= 10) && setores == 0 && sensores == 0) {
        filtro = json.hectare
        titulo = `Umidade atual do Hectare`
    }
    else if ((hectare > 0 && hectare <= 10) && setores > 0 && sensores == 0) {
        filtro = json.setores
        titulo = `Umidade atual do Setor`
    }
    else {
        filtro = json.sensores
        titulo = `Umidade atual do Sensor`
    }

    //Fazendo a média
    for (i = 0; i < filtro.length; i++) {
        media = media + filtro[i].umidade
    }
    media = media / filtro.length

    titulo_kpi1.innerHTML = titulo
    if (!isNaN(media)) {
        //Mudando as imagens
    if (media < 60) {
        classificacao_kpi1.innerHTML = `
                <img src="../images/fi-sr-feather2.png" alt="">
                <p id="valor_kpi1">${media}%</p>
            `
    }
    else if (media < 80) {
        classificacao_kpi1.innerHTML = `
                <img src="../images/fi-sr-feather.png" alt="">
                <p id="valor_kpi1">${media}%</p>
            `
    }
    else {
        classificacao_kpi1.innerHTML = `
                <img src="../images/fi-sr-feather3.png" alt="">
                <p id="valor_kpi1">${media}%</p>
            `
    }
    }

}

//KPI 2
function KPI2(id_empresa) {
    fetch(`/graficos/KPI2/${id_empresa}/${dataAtual}/${hectare}/${setores}/${sensores}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.error('nada2');
            }
        })
        .then(function (json) {
            // console.log(json)
            // console.log('achou2')
            plotandoKpi2(json)
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}

function plotandoKpi2(json) {

    let valor = json.Plantacao[0].umidade
    let titulo = `Média da umidade diaria da plantação`

    if (hectare == 11 && setores == 0 && sensores == 0) {
        valor = json.Plantacao[0].umidade
        titulo = `Média da umidade diaria da plantação`
    }
    else if ((hectare > 0 && hectare <= 10) && setores == 0 && sensores == 0) {
        filtro = json.Hectare[0].umidade
        titulo = `Média da umidade diaria do Hectare`
    }
    else if ((hectare > 0 && hectare <= 10) && setores > 0 && sensores == 0) {
        filtro = json.Setores[0].umidade
        titulo = `Média da umidade diaria do Setor`
    }
    else {
        filtro = json.Sensores[0].umidade
        titulo = `Média da umidade diaria da Sensor`
    }

    if (valor != undefined) {
        if (valor < 60) {
            classificacao_kpi2.innerHTML = `
                <img src="../images/fi-sr-feather2.png" alt="">
                <p id="valor_kpi2">${valor}%</p>
            `
        }
        else if (valor < 80) {
            classificacao_kpi2.innerHTML = `
                <img src="../images/fi-sr-feather.png" alt="">
                <p id="valor_kpi2">${valor}%</p>
            `
        }
        else {
            classificacao_kpi2.innerHTML = `
                <img src="../images/fi-sr-feather3.png" alt="">
                <p id="valor_kpi2">${valor}%</p>
            `
        }
    }
    titulo_kpi2.innerHTML = titulo
    
}

//KPI 3
function KPI3(id_empresa) {
    console.log('OIEEEEEEEE')
    fetch(`/graficos/KPI3/${id_empresa}/${hectare}/${setores}/${sensores}/${dataAtual}/${dataMenos30}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.error('nada3');
            }
        })
        .then(function (json) {
            if (json) {
                // console.log(json);
                // console.log('achouuuu3');
                plotandoKpi3(json)
                //Fazendo a média das umidades
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}


function plotandoKpi3(json) {
    let valor = json.plantacao[0].umidade
    let titulo = `Média da umidade mensal da plantação`


    if (hectare == 11 && setores == 0 && sensores == 0) {
        valor = json.plantacao[0].umidade
        titulo = `Média da umidade Mensal da plantação`
    }
    else if ((hectare > 0 && hectare <= 10) && setores == 0 && sensores == 0) {
        filtro = json.hectare[0].umidade
        titulo = `Média da umidade mensal do Hectare`
    }
    else if ((hectare > 0 && hectare <= 10) && setores > 0 && sensores == 0) {
        filtro = json.setores[0].umidade
        titulo = `Média da umidade mensal do Setor`
    }
    else {
        filtro = json.sensores[0].umidade
        titulo = `Média da umidade mensal da Sensor`
    }

    if (valor != undefined) {
        if (valor < 60) {
            classificacao_kpi3.innerHTML = `
                <img src="../images/fi-sr-feather2.png" alt="">
                <p id="valor_kpi3">${valor}%</p>
            `
        }
        else if (valor < 80) {
            classificacao_kpi3.innerHTML = `
                <img src="../images/fi-sr-feather.png" alt="">
                <p id="valor_kpi3">${valor}%</p>
            `
        }
        else {
            classificacao_kpi3.innerHTML = `
                <img src="../images/fi-sr-feather3.png" alt="">
                <p id="valor_kpi3">${valor}%</p>
            `
        }
    }
    titulo_kpi3.innerHTML = titulo

}
KPI(id_empresa)
KPI2(id_empresa)
KPI3(id_empresa)

//Gráfico 1
//Função a para pegar as informações do gráfico 1
function Grafico1(id_empresa) {
    fetch(`/graficos/Grafico1/${id_empresa}/${hectare}/${setores}/${sensores}/${dataAtual}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                // console.error('nada grafico2');
            }
        })
        .then(function (ResultadoGrafico1) {
            if (ResultadoGrafico1) {
                plotarGrafico1(ResultadoGrafico1)
                console.log(ResultadoGrafico1);
                console.log('nada grafico1');
                console.log(ResultadoGrafico1.hectare[0].umidade);
                console.log(ResultadoGrafico1.sensores[0].dataCaptura);
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}

let myChart01;

//Função para plotar as informações no gráfico 1
function plotarGrafico1(ResultadoGrafico1) {
    console.log(hectare, setores, sensores)
    let listaLabels = [];
    let listaData = [];

    for (let i = 0; i < 6; i++) {
        if (hectare == 11 && setores == 0 && sensores == 0) {
            titulo_grafico2.innerHTML = `Umidade diária da Plantação`
            if (ResultadoGrafico1.plantacao && ResultadoGrafico1.plantacao[i]) {
                listaLabels.push(ResultadoGrafico1.plantacao[i].dataCaptura ?? 'Horário Indefinido');
                listaData.push(ResultadoGrafico1.plantacao[i].umidade ?? 0);
            } else {
                listaLabels.push('Horário Indefinido');
                listaData.push(0);
            }
        }
        else if ((hectare > 0 && hectare <= 10) && setores == 0 && sensores == 0) {
            titulo_grafico2.innerHTML = `Umidade diária do Hectar`
            if (ResultadoGrafico1.hectare && ResultadoGrafico1.hectare[i]) {
                listaLabels.push(ResultadoGrafico1.hectare[i].dataCaptura ?? 'Horário Indefinido');
                listaData.push(ResultadoGrafico1.hectare[i].umidade ?? 0);
            } else {
                listaLabels.push('Horário Indefinido');
                listaData.push(0);
            }
        }
        else if ((hectare > 0 && hectare <= 10) && setores > 0 && sensores == 0) {
            titulo_grafico2.innerHTML = `Umidade diária do Setor`
            if (ResultadoGrafico1.setores && ResultadoGrafico1.setores[i]) {
                listaLabels.push(ResultadoGrafico1.setores[i].dataCaptura ?? 'Horário Indefinido');
                listaData.push(ResultadoGrafico1.setores[i].umidade ?? 0);
            } else {
                listaLabels.push('Horário Indefinido');
                listaData.push(0);
            }
        }
        else {
            titulo_grafico2.innerHTML = `Umidade diária do Sensor`
            if (ResultadoGrafico1.sensores && ResultadoGrafico1.sensores[i]) {
                listaLabels.push(ResultadoGrafico1.sensores[i].dataCaptura ?? 'Horário Indefinido');
                listaData.push(ResultadoGrafico1.sensores[i].umidade ?? 0);
            } else {
                listaLabels.push('Horário Indefinido');
                listaData.push(0);
            }
        }
    }

    // Aqui você pode chamar a função do Chart.js ou outro lib para exibir o gráfico
    console.log("Labels:", listaLabels);
    console.log("Dados:", listaData);


    const grafico1 = document.getElementById('myChart01');

    // Destroi o gráfico anterior se já existir
    if (myChart01) {
        myChart01.destroy();
    }

    myChart01 = new Chart(grafico1, {
        type: 'line',
        data: {
            labels: listaLabels,
            datasets: [{
                label: 'Umidade Máxima',
                backgroundColor: ' #8F5100',
                borderColor: ' #8F5100',
                data: [80, 80, 80, 80, 80, 80],
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: 'Umidade Mínima',
                backgroundColor: ' #FF0004',
                borderColor: ' #FF0004',
                data: [60, 60, 60, 60, 60, 60],
                borderWidth: 2,
                pointStyle: false
            },
            {
                label: 'Umidade',
                backgroundColor: ' #009DFF',
                borderColor: ' #009DFF',
                data: listaData,
                borderWidth: 2,
                pointStyle: true
            },]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 20
                    }
                },

            },
        },

    });

    setTimeout(() => {
        console.log('Entrei no Update')
        grafico1.data.datasets[1].data = listaData;
        grafico1.update();
    }, 2000);
}

Grafico1(id_empresa)

//Chamando a função de pegar dados do gráfico 1
setInterval(() => {
    Grafico1(id_empresa)
}, 10000);


//Gráfico de rosca
//Função a para pegar as informações do gráfico de rosca
function Rosca(id_empresa) {
    fetch(`/graficos/Rosca/${id_empresa}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                // console.error('nada3');
            }
        })
        .then(function (resultadoRosca) {
            if (resultadoRosca) {
                // console.log(resultadoRosca);
                const Funcionando = resultadoRosca.Funcionando
                const NãoFuncionando = resultadoRosca.NaoFuncionando
                plotarGraficoRosca(Funcionando, NãoFuncionando)
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}

let myChart02;

//Função para plotar as informações do gráfico de rosca
function plotarGraficoRosca(Funcionando, NãoFuncionando) {
    const Grafico2 = document.getElementById('myChart02');

    // Destroi o gráfico anterior se já existir
    if (myChart02) {
        myChart02.destroy();
    }

    myChart02 = new Chart(Grafico2, {
        type: 'doughnut',
        data: {
            labels: ['Funcionando', 'Não Funcionando'],
            datasets: [{
                label: 'Sensores',
                backgroundColor: ['#FF9F00', '#6D54EE'],
                data: [Funcionando, NãoFuncionando],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: 'center',
                    align: 'center',
                    color: '#fff'
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

//Chamando a função de pegar dados do gráfico de rosca
Rosca(id_empresa)

//Chamando a função de pegar dados do gráfico 1
setInterval(() => {
    Rosca(id_empresa)
}, 10000);


//Gráfico 2
//Função a para pegar as informações do gráfico 2
function Grafico2(id_empresa) {
    fetch(`/graficos/Grafico2/${id_empresa}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                // console.error('nada grafico2');
            }
        })
        .then(function (ResultadoGrafico2) {
            if (ResultadoGrafico2) {
                // console.log(ResultadoGrafico2.hectare);

                // console.log('nada grafico2');

                plotarGrafico2(ResultadoGrafico2)
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}

let myChart03;

//Função para plotar as informações do gráfico 2
function plotarGrafico2(ResultadoGrafico2) {

    const grafico3 = document.getElementById('myChart03');

    var listaGrafico2Labels = []
    var listaGrafico2Data = []

    for (i = 0; i < 10; i++) {
        listaGrafico2Labels.push(ResultadoGrafico2.hectare[i].nomeHectares)
        listaGrafico2Data.push(ResultadoGrafico2.hectare[i].MediaUmidadeFazenda)

    }
    // console.log(listaGrafico2Data)
    // console.log(listaGrafico2Labels)

    // Destroi o gráfico anterior se já existir
    if (myChart03) {
        myChart03.destroy();
    }

    myChart03 = new Chart(grafico3, {
        type: 'bar',
        data: {
            labels: listaGrafico2Labels,
            datasets: [{
                type: 'line',
                label: 'Umidade Máxima',
                backgroundColor: ' #8F5100',
                borderColor: ' #8F5100',
                data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
                borderWidth: 1,
                pointStyle: false
            },
            {
                type: 'line',
                label: 'Umidade Mínima',
                backgroundColor: ' #FF0004',
                borderColor: ' #FF0004',
                data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
                borderWidth: 2,
                pointStyle: false
            },
            {
                label: 'Umidade',
                backgroundColor: ' #009DFF',
                borderColor: ' #009DFF',
                data: listaGrafico2Data,
                borderWidth: 2,
                pointStyle: false
            }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    beginAtZero: true,
                    ticks: {
                        labels:{
                            
                        }
                    }
                },

            },
            plugins: {
                datalabels: {
                    anchor: 'center',
                    align: 'center',
                    color: '#fff',
                    fontSize: 8
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

//Chamando a função de pegar as informações do gráfico 2
Grafico2(id_empresa)

//Chamando a função de pegar dados do gráfico 1
setInterval(() => {
    Grafico2(id_empresa)
}, 10000);


