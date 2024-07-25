//function
//parâmetros
//void
//return
//parâmetros opcionais
//escopo de funções
//quando criar funções
//exemplo calculadora salário

function exibirNome(nome) {
  console.log(nome)
}
exibirNome('Martin')
exibirNome('Francisco')


let nome = 'martin'
let salário = 7000
console.log(salário)
let desconto = 0

calculadoraDescontoSalario()
function calculadoraDescontoSalario() {
  if (salário >= 3000) {
    desconto = salário * 0.05
    escreverSalarioDescontado(salário, desconto)
  } else if (salário >= 7000) {
     desconto = salário * 0.15
    escreverSalarioDescontado(salário, desconto)
  } else {
     desconto = salário * 0.05
    escreverSalarioDescontado(salário, desconto)
  }

}
function escreverSalarioDescontado() {
  console.log(`${nome} seu salário de ${salário} tem um desconto de ${desconto} você receberá ${salário - desconto}`)
}




