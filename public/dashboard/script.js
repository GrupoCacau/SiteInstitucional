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
            backgroundColor: ' #6D54EE',
            borderColor: ' #6D54EE',
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

const grafico2 = document.getElementById('myChart02');

new Chart(grafico2, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: ['Não Funcionando',
                'Funcionando'],
            backgroundColor: [' #FF9F00',
                ' #6D54EE'],
            data: [20, 200],
            borderWidth: 1,
            pointStyle: false
        },]
    },
    options: {
        
    }
});

const grafico3 = document.getElementById('myChart03');

new Chart(grafico3, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
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
            backgroundColor: ' #6D54EE',
            borderColor: ' #6D54EE',
            data: [24,55,30,45,65,55,26,40,85,40,10,55],
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


var id_user = sessionStorage.ID_USUARIO
var id_empresa = sessionStorage.ID_EMPRESA
//Variáveis de filtro
var hectare = 1
var setores = 1
var sensores = 1

    
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


KPI(id_empresa, hectare)

KPI2(id_empresa, hectare)

KPI3(id_empresa, hectare)