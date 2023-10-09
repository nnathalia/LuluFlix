//CONFIGURAÇÃO DO MENU
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/icones/icon-menu.svg";
        
    }
    else{
        menuMobile.classList.add('open')

        document.querySelector('.icon').src = "../img/icones/x.svg";
    }
}

//CONFIGURAÇÃO DO SLIDER CARD GRANDE

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true
    setInterval(() => {
        proximaImg()
    }, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
       cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}
//
