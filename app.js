function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  
  let sorteados = [];
  let numero;

  for (index = 0; index < quantidade; index++) {
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
//    if (!sorteados.includes(numero)) {
//      sorteados.push(numero);
//    } else {
//     numero = obterNumeroAleatorio(de, ate);
//    }
//
//    Não consegui resolver de forma que ele 
//    preenchesse o sorteados com a quantidade solicitada
  }
  
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números 
  sorteados: ${sorteados}</label>`;
}

function obterNumeroAleatorio(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}