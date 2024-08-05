function meuEscopo () {
  const form = document.querySelector('.form')
  const res = document.querySelector('.res')
  const pessoas = []

  function recebeEventoForm (evento) {
    evento.preventDefault()

   const nome = form.querySelector('.nome')
   const sobrenome = form.querySelector('.sobrenome')
   const idade = form.querySelector('.idade')
   const peso = form.querySelector('.peso')
   const altura = form.querySelector('.altura')

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
      peso: peso.value,
      altura: altura.value,

    })
    console.log(pessoas)

    res.innerHTML += `<p>${nome.value} ${sobrenome.value} <br>Idade: ${idade.value}<br> Peso: ${peso.value}<br> Altura:${altura.value}</p>`


  }


  form.addEventListener('submit', recebeEventoForm)


}
meuEscopo();
