const numero = prompt('Digite um número')
const ne = document.getElementById('numeroEscolhido')
const texto = document.getElementById('texto')

ne.innerHTML = numero
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p><br>
  <p>${numero} é inteiro: ${Number.isInteger(numero)}</p><br>
  <p>É NaN: ${Number.isNaN(numero)}</p><br>
  <p>Arredondando para baixo: ${Math.floor(numero)}</p><br>
  <p>Arredondando para cima: ${Math.ceil(numero)}</p><br>`





