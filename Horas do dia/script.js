// Manter uma boa indentação é importante
//hora = 6
function carregar() { //função para carregar as fotos de acordo com a hora
    var msg = window.document.getElementById('msg') // variavel que contem a mensagem do html
    var foto = window.document.getElementById('imagem')// variavel que puxa a foto do html
    var data = new Date() // onde puxa a hora do pc
    var hora = data.getHours() //variavel que mostrara a hora
    
    msg.innerHTML=`Agora sâo ${hora} horas`
    if (hora >= 0 && hora <= 12) {
         //bom dia
        imagem.src ='fotomanha.png'
        document.body.style.background = '#e2cd9f' //cor de fundo aleatória que eu escolhi
    }else if (hora >= 12 && hora <= 18) {
        //boa tarde
        imagem.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}