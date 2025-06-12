const grafico1 = document.getElementById('myChart01');

new Chart(grafico1, {
    type: 'line',
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Umidade Máxima',
            backgroundColor: ' #FF0004',
            borderColor: ' #FF0004',
            data: [80, 80, 80, 80, 80, 80],
            borderWidth: 1,
            pointStyle: false
        },
        {
            label: 'Umidade',
            backgroundColor: ' #009DFF',
            borderColor: ' #009DFF',
            data: [70, 47, 66, 75, 62, 65],
            borderWidth: 2,
            pointStyle: false
        },
        {
            label: 'Umidade Mínima',
            backgroundColor: ' #F8A720',
            borderColor: ' #F8A720',
            data: [60, 60, 60, 60, 60, 60],
            borderWidth: 2,
            pointStyle: false
        }]
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
            
        }
    }
});



var id_user = sessionStorage.ID_USUARIO
var id_empresa = sessionStorage.ID_EMPRESA
//Variáveis de filtro
var hectare = 1
var setores = 1
var sensores = 0

    
function KPI(id_empresa) {
    fetch(`/graficos/KPI/${id_empresa}/${hectare}/${setores}/${sensores}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.error('nada');
            }
        })
        .then(function (json) {
            if (json) {
                console.log(json);
                console.log('achouuuu');
                //Fazendo a média das umidades
                console.log(json.plantacao[0])
                var media = 0
                for(i = 0; i < json.plantacao.length; i++){
                    media = media + json.plantacao[i].umidade
                    console.log(json.plantacao[i].umidade)
                }
                media = media /5
                console.log(media)
      
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}







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
            console.log('achou2')
            console.log(json)
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}




function KPI3(id_empresa) {
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
                console.log(json);
                console.log('achouuuu3');
                //Fazendo a média das umidades
                var media = 0
                for(i = 0; i < json.length; i++){
                    media = media + json[i].umidade
                }
                media = media/5
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}



function Rosca(id_empresa) {
    fetch(`/graficos/Rosca/${id_empresa}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.error('nada3');
            }
        })
        .then(function (resultadoRosca) {
            if (resultadoRosca) {
                console.log(resultadoRosca);
                const grafico2 = document.getElementById('myChart02');
                const Funcionando = resultadoRosca.Funcionando
                const NãoFuncionando = resultadoRosca.NaoFuncionando

                new Chart(grafico2, {
                    type: 'doughnut',
                    data: {
                            labels: ['Funcionando', 'Não Funcionando'], // ✅ Aqui está certo!
                            datasets: [{
                                label: 'Sensores', // ✅ Pode dar um nome ao dataset (opcional)
                                backgroundColor: ['#FF9F00', '#6D54EE'],
                                data: [Funcionando, NãoFuncionando],
                                borderWidth: 1
                            }]
                        },
                    options: {
                        
                    }
                });
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}





function Grafico1(id_empresa) {
    fetch(`/graficos/Grafico1/${id_empresa}/${hectare}/${setores}/${sensores}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.error('nada grafico2');
            }
        })
        .then(function (ResultadoGrafico1) {
            if (ResultadoGrafico1) {
                console.log(ResultadoGrafico1);

                console.log('nada grafico1');
            
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}


function Grafico2(id_empresa) {
    fetch(`/graficos/Grafico2/${id_empresa}`, { cache: 'no-store' })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.error('nada grafico2');
            }
        })
        .then(function (ResultadoGrafico2) {
            if (ResultadoGrafico2) {
                console.log(ResultadoGrafico2.hectare);

                console.log('nada grafico2');
                
                plotarGrafico2(ResultadoGrafico2)
            }
        })
        .catch(function (erro) {
            console.error('Erro na requisição:', erro);
        });
}


function plotarGrafico2(ResultadoGrafico2){

    const grafico3 = document.getElementById('myChart03');

    var listaGrafico2Labels = []
    var listaGrafico2Data = []

    for(i = 0; i < 10; i++){
        listaGrafico2Labels.push(ResultadoGrafico2.hectare[i].nomeHectares)
        listaGrafico2Data.push(ResultadoGrafico2.hectare[i].MediaUmidadeFazenda)
        
    }
    console.log(listaGrafico2Data)
    console.log(listaGrafico2Labels)

                new Chart(grafico3, {
                    type: 'bar',
                    data: {
                        labels: listaGrafico2Labels,
                        datasets: [{
                            type: 'line',
                            label: 'Umidade Máxima',
                            backgroundColor: ' #FF0004',
                            borderColor: ' #FF0004',
                            data: [80, 80, 80, 80, 80, 80,80,80,80,80,80,80],
                            borderWidth: 1,
                            pointStyle: false
                        },
                        {
                            type: 'line',
                            label: 'Umidade Mínima',
                            backgroundColor: ' #F8A720',
                            borderColor: ' #F8A720',
                            data: [60, 60, 60, 60, 60, 60,60,60,60,60,60,60, 60, 60, 60],
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
                                    stepSize: 20
                                }
                            },
                            
                        }
                    }
                });
}

// Funções

//Variável global para valor do sensor temporario
var valor = 0

//função para pegar o valor do sensor e colocar na variável global valor
    function filtrarSensor(idSensor) {
        valor = idSensor.value
        console.log(valor)
    }

    //função de click para mudar a variável sensorer para o valor 
    const btnSelecionar = document.getElementById('btn_selecionar')
    btnSelecionar.addEventListener('click', function (){
        sensores = valor
        modal.close()
        console.log(sensores)
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
console.log(dataAtual); 








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
console.log(dataMenos30);


// KPI(id_empresa, hectare)

// KPI2(id_empresa, hectare)

// KPI3(id_empresa, hectare)

Rosca(id_empresa)

Grafico1(id_empresa, hectare)

Grafico2(id_empresa)
