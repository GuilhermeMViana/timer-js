function carregar() {
var msg = document.getElementById('msg')
var imagem = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 0 && hora <12) {
        imagem.src = 'manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 19) {
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}