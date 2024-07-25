//cidadã de primeira classe ou objeto de primeira classe
//função nomeada
//função anonima
//callback
//exemplo


/*exemplo de função anonima(não recebe nome)


let oi = function(nome){
  console.log(nome)
}
oi('josé')

*/

/*função atribuída a propriedade de um objeto.
let mensagem = {
  exibir: function(msg){
    console.log(msg)
  }
}

mensagem.exibir('Olá Mundo!')
*/
// a próxima função é uma função nomeada

let escreva = function (nome) {
  console.log(nome)
}
/*
function exibirSaudação(nome, func) {
  func(nome)
}
exibirSaudação('Martin', escreva)
*/
function exibirSaudação(){
 return function(nome, func){
  func(nome)
 }
}
exibirSaudação()('Martin', escreva)


