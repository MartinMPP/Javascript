let num = document.getElementById('txtnum')
let lista = document.getElementById('numlist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }

}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''


  } else {
    alert('Valor invalido ou já encontrado na lista.')
  }
  num.value = ''
  num.focus()
}

function finalizar() {


  if (valores.length == 0) {
    alert('adicione valores para finalizar')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior)

        maior = valores[pos]

      if (valores[pos] < menor)

        menor = valores[pos]

    }

    res.innerHTML = ''
    res.innerHTML += `foram informados ${tot} valores no total.<br>`
    res.innerHTML += `O maior valor informado foi ${maior}<br>`
    res.innerHTML += `O menor valor informado foi ${menor}<br>`
    res.innerHTML += `A soma dos valores é ${soma}<br>`
    res.innerHTML += `A media dos valores é ${soma / tot}.`


  }
}










/*
  var c = 0
  var soma = 0
  let num = document.getElementById('txtnum')
  let sel = document.getElementById('numlist')
  let vet = []
  function adicionar() {


  if (num.value.length == 0 || num.value > 100) {
    window.alert('Valor invalido ou ja adicionado na lista')
  } else {
    let n = Number(num.value)

    let item = document.createElement('option')
    item.text = `O valor ${n} adicionado`
    sel.appendChild(item)
    c +=1
    soma += n
    vet = n


  }
}
function finalizar() {

res.innerHTML = `ao todo, temos ${c} números cadastrados. <br>`
res.innerHTML += `a soma dos valores é ${soma} <br>`
res.innerHTML+= `O menor valor informado foi ${soma[0]}`



}
*/
