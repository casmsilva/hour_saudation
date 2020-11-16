function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image') 
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML=`Agora são ${hora} horas.`
    if(hora >= 0 && hora <12){
        /* Bom dia */
        img.src ='./images/morning.jpg'
        document.body.style.background = '#D99D5F'

    } else if(hora >=12 && hora < 18) {
        /* Boa tarde */
        img.src ='./images/afternoon.jpg'
        document.body.style.background = '#653F2C'
    }else {
        /* Boa noite */
        img.src ='./images/nigth.jpg'
        document.body.style.background = '#53436A'
    }
}



