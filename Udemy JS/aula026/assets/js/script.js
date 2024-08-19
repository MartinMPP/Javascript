const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
 const inputPeso = e.target.querySelector('#peso')
 const inputAltura = e.target.querySelector('#altura')


 const peso = Number(inputPeso.value)
 const altura = Number(inputAltura.value)
 console.log(peso, altura)
})
function criaP() {
  const p = document.createElement('p')
  return p

}
function setRes(msg) {
  const res = document.querySelector('#res')
  res.innerHTML = ''
  const p = criaP()



}

