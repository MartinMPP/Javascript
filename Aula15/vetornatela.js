let num = [9, 7, 5, 3, 7, 4, 2, 6]
num.sort()


//console.log(num)
/*
for(let pos = 0; pos < num.length; pos++){
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}



