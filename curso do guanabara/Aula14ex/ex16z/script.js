function contar() {

  var ini = document.getElementById('inicio')
  var fim = document.getElementById('fim')
  var pas = document.getElementById('passo')
  var res = document.getElementById('res')
  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('Faltam dados para a conta.')
  }
  var i = Number(ini.value)
  var f = Number(fim.value)
  var p = Number(pas.value)
  res.innerHTML = `Contando: <br>`
  if (p <= 0) {
    window.alert('Dado invalido para passo. considerando passo 1')
    p = 1
  }
  if (i < f) {
    for (var c = i; c <= f; c += p) {
      res.innerHTML += `\u{27A1} ${c} `
    }
  } else {
    for (var c = i; c >= f; c -= p) {
      res.innerHTML += `\u{27A1} ${c} `
    }
  } res.innerHTML += `\u{1F197}`
}
