function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('iano')
  var res = document.getElementById('res')
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  if (Number(fAno.value) > ano) {
    alert('[Erro] Verifique os dados e tente novamente.')
  } else {
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fAno.value)
    var genero = ''
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 4) {
        img.setAttribute('src', 'bebe-h.png')
      } else if (idade < 13) {
        img.setAttribute('src', 'crianca-h.png')
      } else if (idade < 18) {
        img.setAttribute('src', 'adolecente-h.png')
      } else if (idade < 60) {
        img.setAttribute('src', 'adulto-h.png')
      } else if (idade >= 60) {
        img.setAttribute('src', 'idoso-h.png')
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade< 4) {
        img.setAttribute('src', 'bebe-m.png')
      } else if (idade < 13) {
        img.setAttribute('src', 'crianca-m.png')
      } else if (idade < 18) {
        img.setAttribute('src', 'adolecente-m.png')
      } else if (idade < 60) {
        img.setAttribute('src', 'adulto-m.png')
      } else if (idade >= 60) {
        img.setAttribute('src', 'idosa-m.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}

