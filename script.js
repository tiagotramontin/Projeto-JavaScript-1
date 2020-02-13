function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var sd = document.getElementById('sd')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    sd.innerHTML = `${sd}`

    if(hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        sd.innerHTML = 'Bom Dia!'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        sd.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        sd.innerHTML = 'Boa Noite!'
        document.body.style.background = '#515154'
    }

    
}
