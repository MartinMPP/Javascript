

const num1 = prompt('Digite um número')
const num2 = prompt('Digite outro numero')
let op = prompt('qual operação fazer? (+, -, *, /')

if (op === '+') {
  let res = Number(num1) + Number(num2)
  window.alert(`O resiltado da operação ${num1} ${op} ${num2} é ${res}`)
} else if (op === '-') {
  res = Number(num1) - Number(num2)
  window.alert(`O resiltado da operação ${num1} ${op} ${num2} é ${res}`)
} else if (op === '*') {
  res = Number(num1) * Number(num2)
  window.alert(`O resiltado da operação ${num1} ${op} ${num2} é ${res}`)
} else {
  res = Number(num1) / Number(num2)
  window.alert(`O resiltado da operação ${num1} ${op} ${num2} é ${res}`)
}






