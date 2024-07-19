


let eu = {
  nome: `Martin`,
  sexo: `M`,
  peso: 83.5,
  emagrecer(p = 0) {
    console.log('Emagreceu')
    this.peso -= p
  }
}
console.log(`Eu ${eu.nome} vou emagrecer 5 quilos`)
eu.emagrecer(5)

console.log(eu)






