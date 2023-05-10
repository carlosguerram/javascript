function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12) {
        //BOM DIA !
        img.src = "IMAGENS/fotomanha.png"
        document.body.style.background = "#fec7bb"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = "IMAGENS/fototarde.png"
        document.body.style.background = "#cd4306"
    } else {
        //BOA NOITE
        img.src = "IMAGENS/fotonoite.png"
        document.body.style.background = "#1a2231"
    }
}

