

let varA = 'A'
let varB = 'B'
let varC = 'C'
const A = varA

varA = varB
varB = varC
varC = A

//[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)


