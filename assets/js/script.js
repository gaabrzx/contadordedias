let dataConhecimento = new Date(2023, 1, 21);

function calcularDias() {
  let dataAtual = new Date();
  let diferenca = dataAtual.getTime() - dataConhecimento.getTime();
  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  return dias;
}

function atualizarContador() {
  let contador = document.getElementById("contador-dias");
  contador.textContent = calcularDias() + " dias";
}

setInterval(atualizarContador, 1000);
