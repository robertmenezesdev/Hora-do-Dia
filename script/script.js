function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = String(data.getMinutes()).padStart(2, '0')
  msg.innerHTML = `Agora ${hora}:${minutos}`
  if (hora < 12) {
    img.src = './imagens/manhaEditada.png'
    document.getElementById('mudarDia').innerHTML = `Bom dia!`
    document.body.style.background = '#25CCF7'
  } else if (hora > 12 && hora < 18) {
    img.src = './imagens/tardeEditada.png'
    document.getElementById('mudarDia').innerHTML = `Boa Tarde!`
    document.body.style.background = '#F97F51'
  } else {
    img.src = './imagens/noiteEditada.png'
    document.getElementById('mudarDia').innerHTML = `Boa Noite!`
    document.body.style.background = '#2C3A46'
  }
}
