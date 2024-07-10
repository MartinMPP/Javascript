function carregar() {
  var msg = window.document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas. `
  if (hora >= 0 && hora < 6) {
    img.src = 'imagens/madrugada.png'
    document.body.style.background = 'linear-gradient(#121212 , #D8DCD8)'
  } else if (hora >= 6 && hora < 12) {
    img.src = 'imagens/manha.png'
    document.body.style.background = 'linear-gradient(#D8DCD8, #0bb9b9)'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.png'
    document.body.style.background = 'linear-gradient(#f57e1d, #F3C299)'
  } else {
    img.src = 'imagens/noite.png'
    document.body.style.background = 'linear-gradient(#083135 , #121212)'
  }



}

