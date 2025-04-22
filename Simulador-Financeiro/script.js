var hectares = 0
var producao = 0
var custo = 0
var preco = 0

// Sem o Projeto
var rendaBruta = 0;
var rendaLiquida = 0;
var rendaHectareLiquido = 0

// Com o Projeto
var rendaBrutaProjeto = 0
var rendaLiquidaProjeto = 0
var rendaHectareProjeto = 0

var producaoPorHectare = 0
var producaoPorHectareProjeto = 0

var mediaProducao = "";
var mediaProducaoProjeto = "";




function calcular() {
    // Variáveis das inputs
    hectares = Number(input_hectares.value);
    producao = Number(input_producaoColheita.value);
    custo = Number(input_custoProducao.value);
    preco = Number(input_precoKg.value);

    // Sem o Projeto
    rendaBruta = producao * preco;
    rendaLiquida = rendaBruta - custo;
    rendaHectareLiquido = (producao / hectares) * preco - (custo / hectares);

    // Com o Projeto
    rendaBrutaProjeto = (producao * 1.3) * preco;
    rendaLiquidaProjeto = rendaBrutaProjeto - (custo * 0.77);
    rendaHectareProjeto = ((producao * 1.3) / hectares) * preco - ((custo * 0.77) / hectares);

    producaoPorHectare = producao / hectares;
    producaoPorHectareProjeto = (producao * 1.3) / hectares;

    mediaProducao = "";
    mediaProducaoProjeto = "";


    if (hectares <= 75) {
        calculo_sem_sensor();
        document.getElementById("btn_sem_sensor").classList.add("btn_selecionado");
    } else {
        removerSelecao();
        div_mensagem.innerHTML = `<p class="semProjeto">Área muito grande para a inserção do nosso sistema!</p>`;
        alert(`Não possuímos um sistema tão avançado para sua plantação!`);
    }
}

function removerSelecao() {
    document.getElementById("btn_sem_sensor").classList.remove("btn_selecionado");
    document.getElementById("btn_com_sensor").classList.remove("btn_selecionado");
}

function calculo_com_sensor() {
    //Adicionando classe de seleção
        removerSelecao();
       document.getElementById("btn_com_sensor").classList.add("btn_selecionado");
        
    div_mensagem.innerHTML = `<p class="comProjeto"><u>Com o projeto:</u></p>

            <p>A produção que era <strong>${producao} Kg</strong> teve um aumento de <strong>30%</strong>, totalizando <strong>${(producao * 1.3).toLocaleString('pt-BR')}</strong> Kg.</p><br>

            <p>O custo da produção que era <strong>R$${custo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> teve uma redução de <strong>23%</strong>, totalizando <strong>R$${(custo * 0.75).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>A renda líquida que era <strong>R$${rendaLiquida.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> foi para <strong>R$${rendaLiquidaProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, aumentando <strong>R$${(rendaLiquidaProjeto - rendaLiquida).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>Antes cada Hectare rendia <strong>R$${rendaHectareLiquido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, com o aumento de <strong>30%</strong> da produção e o decréscimo de <strong>25%</strong> do custo de produção, foi para <strong>R$${rendaHectareProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, tendo a diferença de <strong>R$${(rendaHectareProjeto - rendaHectareLiquido).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>A sua colheita de <strong>${hectares}</strong> hectares rendeu <strong>${(producao * 1.3).toLocaleString('pt-BR')}</strong> Kg e cada Kg foi vendido por <strong>R$${preco}</strong>, totalizando <strong>R$${rendaBrutaProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>Com custo de operação de <strong>R$${(custo * 0.75).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> sua colheita totalizou <strong>R$${rendaLiquidaProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> de renda líquida.</p><br>

            <p>Cada Hectare rendeu <strong>R$${rendaHectareProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>
            
            <p><strong>Classificação da produção por hectares:</strong></p>

            <div class="classificacao">
                <div class="container">
                    <div class="class" id="class01"></div>
                    <div class="class" id="class02"></div>
                    <div class="class" id="class03"></div>
                    <div class="class" id="class04"></div>
                    <div class="class" id="class05"></div>
                </div>
                <div class="numeros">
                     <span>0 - 300</span>
                    <span>300 - 500</span>
                    <span>500 - 1200</span>
                    <span>1200 - 2500</span>
                    <span>acima de 1250</span>
                    </div>
            </div>

    `;

    if (producaoPorHectareProjeto < 300) {
        mediaProducaoProjeto = "Baixíssima";
        class01.innerHTML = mediaProducaoProjeto
    } else if (producaoPorHectareProjeto <= 500) {
        mediaProducaoProjeto = "Baixa";
        class02.innerHTML = mediaProducaoProjeto
    } else if (producaoPorHectareProjeto <= 1200) {
        mediaProducaoProjeto = "Média";
        class03.innerHTML = mediaProducaoProjeto
    } else if (producaoPorHectareProjeto <= 2500) {
        mediaProducaoProjeto = "Alta";
        class04.innerHTML = mediaProducaoProjeto
    } else {
        mediaProducaoProjeto = "Altíssima";
        class05.innerHTML = mediaProducaoProjeto
    }
}

function calculo_sem_sensor() {
    //Adicionando classe de seleção
    document.getElementById("btn_sem_sensor").addEventListener("click", function (event) {
        removerSelecao();
        event.target.classList.add("btn_selecionado");
    });

    div_mensagem.innerHTML = `
        <p class="semProjeto"><u>Sem o projeto:</u></p>

            <p>A sua colheita de <strong>${hectares}</strong> hectares rendeu <strong>${producao} Kg</strong> e cada Kg foi vendido por <strong>R$${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, totalizando <strong>R$${rendaBruta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>Com custo de operação de <strong>R$${custo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> sua colheita totalizou <strong>R$${rendaLiquida.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> de renda líquida.</p><br>

            <p>Cada Hectare rendeu <strong>R$${rendaHectareLiquido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

               <p><strong>Classificação da produção por hectares:</strong></p>

             <div class="classificacao">
                <div class="container">
                    <div class="class" id="class01"></div>
                    <div class="class" id="class02"></div>
                    <div class="class" id="class03"></div>
                    <div class="class" id="class04"></div>
                    <div class="class" id="class05"></div>
                </div>
                <div class="numeros">
                    <span>0 - 300</span>
                    <span>300 - 500</span>
                    <span>500 - 1200</span>
                    <span>1200 - 2500</span>
                    <span>acima de 1250</span>
                    </div>
            </div>
`;

         // Classificação da produtividade
    if (producaoPorHectare < 300) {
        mediaProducao = "Baixíssima!";
        class01.innerHTML = mediaProducao
    } else if (producaoPorHectare <= 500) {
        mediaProducao = "Baixa";
        class02.innerHTML = mediaProducao
    } else if (producaoPorHectare <= 1200) {
        mediaProducao = "Média";
        class03.innerHTML = mediaProducao
    } else if (producaoPorHectare <= 2500) {
        mediaProducao = "Alta";
        class04.innerHTML = mediaProducao
    } else {
        mediaProducao = "Altíssima";
        class05.innerHTML = mediaProducao
    }


}