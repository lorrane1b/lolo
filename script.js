
// Calculadora do Efeito Doppler

const formulario = document.getElementById("dopplerForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Recebendo os valores informados pelo usuário
    const vo = Number(document.getElementById("observador").value);
    const vf = Number(document.getElementById("fonte").value);
    const v = Number(document.getElementById("som").value);
    const f = Number(document.getElementById("frequencia").value);

    // Identificando a direção dos movimentos
    const direcaoObservador =
        document.getElementById("direcaoObservador").value;

    const direcaoFonte =
        document.getElementById("direcaoFonte").value;

    // Validando os valores
    if (
        !Number.isFinite(vo) ||
        !Number.isFinite(vf) ||
        !Number.isFinite(v) ||
        !Number.isFinite(f) ||
        vo < 0 || vf < 0 || v <= 0 || f <= 0
    ) {
        mostrarErro("Informe valores numéricos válidos e positivos.");
        return;
    }

    // Definindo os sinais conforme o movimento
    const velocidadeObservador =
        direcaoObservador === "aproximando" ? vo : -vo;

    const velocidadeFonte =
        direcaoFonte === "aproximando" ? vf : -vf;

    // Aplicando a fórmula do Efeito Doppler
    const denominador = v - velocidadeFonte;

    if (denominador <= 0) {
        mostrarErro("A velocidade da fonte deve ser menor que a velocidade do som.");
        return;
    }

    const frequenciaPercebida =
        f * (v + velocidadeObservador) / denominador;

    // Exibindo o resultado
    resultado.classList.remove("erro");

    resultado.innerHTML =
        "Frequência percebida:<br><br>" +
        frequenciaPercebida.toFixed(2) + " Hz";
});

// Função para exibir mensagens de erro
function mostrarErro(mensagem) {
    resultado.classList.add("erro");
    resultado.textContent = mensagem;
}
