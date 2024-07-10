var idade = 31
console.log(`Você tem ${idade} anos.`)
if (idade<16){
  console.log('Não pode votar')
} else if(idade < 18 || idade >=70){
  console.log('Você pode votar, mas não é obrigatório')
}else{
  console.log('Você deve votar obrigatóriamente.')
}

