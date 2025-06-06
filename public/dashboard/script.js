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
