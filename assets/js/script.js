let dataConhecimento = new Date(2023, 1, 21);

function calcularTempoDecorrido() {
  let dataAtual = new Date();
  let diferenca = dataAtual.getTime() - dataConhecimento.getTime();

  // Cálculo do tempo decorrido em diferentes unidades de tempo
  let segundos = diferenca / 1000;
  let minutos = segundos / 60;
  let horas = minutos / 60;
  let dias = horas / 24;
  let semanas = dias / 7;
  let meses = semanas / 4.34812;
  let anos = meses / 12;

  return { segundos, minutos, horas, dias, semanas, meses, anos };
}

function atualizarContador() {
  let tempo = calcularTempoDecorrido();

  document.getElementById("contador-segundos").textContent =
    tempo.segundos.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + " segundos";
  document.getElementById("contador-minutos").textContent =
    tempo.minutos.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + " minutos";
  document.getElementById("contador-horas").textContent =
    tempo.horas.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + " horas";
  document.getElementById("contador-dias").textContent =
    tempo.dias.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + " dias";
  document.getElementById("contador-semanas").textContent =
    tempo.semanas.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + " semanas";
  document.getElementById("contador-meses").textContent =
    tempo.meses.toLocaleString("pt-BR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }) + " meses";
  document.getElementById("contador-anos").textContent =
    tempo.anos.toLocaleString("pt-BR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }) + " ano";
}

setInterval(atualizarContador, 1000);
