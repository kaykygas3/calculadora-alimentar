// Função para calcular IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para calcular TMB
function calcularTMB(peso, altura, idade, nivelAtividade) {
    let tmb = 10 * peso + 6.25 * altura * 100 - 5 * idade;
    if (nivelAtividade === "baixo") {
        tmb *= 1.2;
    } else if (nivelAtividade === "moderado") {
        tmb *= 1.55;
    } else if (nivelAtividade === "alto") {
        tmb *= 1.9;
    }
    return tmb;
}

// Lógica para capturar dados do formulário e exibir resultados
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const idade = parseInt(document.getElementById("idade").value);
    const nivelAtividade = document.getElementById("atividade").value;

    const imc = calcularIMC(peso, altura).toFixed(2);
    const tmb = calcularTMB(peso, altura, idade, nivelAtividade).toFixed(2);

    document.getElementById("imc").innerText = "IMC: " + imc;
    document.getElementById("tmb").innerText = "TMB: " + tmb + " kcal/dia";
});
