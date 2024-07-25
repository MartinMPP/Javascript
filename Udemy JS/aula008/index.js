/* Martin Ponce tem 31 anos, pesa 83 Kg tem 1.8 metros de altura e seu IMC é de x Martin Ponce nasceu em anox*/

const nome = 'Martin'
const sobrenome = 'Porro Ponce'
let peso = 83
const altura = 1.8
const anoNascimento = 1993
const idade = calcIdade()
let IMC = calcIMC()


function calcIdade(){
  let anoSistema = new Date()
  let anoAtual = anoSistema.getFullYear()
  return  (anoAtual - anoNascimento)
}
function calcIMC() {
  return (peso / (altura**2))
}
 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg e tem ${altura} metros de altura e seu IMC é ${IMC}. ${nome} nasceu em ${anoNascimento} `)
