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
//

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


//CONFIGURAÇÃO DO SLIDER CARD PEQUENO
    const wrapper = document.querySelector('#wrapper, #wrapper2, #wrapper3, #wrapper4, #wrapper5, #wrapper6');
    const carrossel = document.querySelector('#carrossel, #carrossel2, #carrossel3, #carrossel4, #carrossel5, #carrossel6');
    const btEsquerda = document.querySelector('#bt-esquerda');
    const btDireita = document.querySelector('#bt-direita');
    const container = document.querySelector('#img, #img2');

    container.style.scrollBehavior = 'smooth';

    btEsquerda.addEventListener('click', () => {
    container.scrollLeft -= 100;
    });

    btDireita.addEventListener('click', () => {
    container.scrollLeft += 100;
    });

    const btEsquerda2 = document.querySelector('#bt-esquerda2');
    const btDireita2 = document.querySelector('#bt-direita2');
    const container2 = document.querySelector('#img2');

    container2.style.scrollBehavior = 'smooth';

    btEsquerda2.addEventListener('click', () => {
        container2.scrollLeft -= 100;
    });
    
    btDireita2.addEventListener('click', () => {
        container2.scrollLeft += 100;
    });

    const btEsquerda3 = document.querySelector('#bt-esquerda3');
    const btDireita3 = document.querySelector('#bt-direita3');
    const container3 = document.querySelector('#img3');

    container3.style.scrollBehavior = 'smooth';
    
    btEsquerda3.addEventListener('click', () => {
        container3.scrollLeft -= 100;
    });
    
    btDireita3.addEventListener('click', () => {
        container3.scrollLeft += 100;
    });

    const btEsquerda4 = document.querySelector('#bt-esquerda4');
    const btDireita4 = document.querySelector('#bt-direita4');
    const container4 = document.querySelector('#img4');

    container4.style.scrollBehavior = 'smooth';
    
    btEsquerda4.addEventListener('click', () => {
        container4.scrollLeft -= 100;
    });
    
    btDireita4.addEventListener('click', () => {
        container4.scrollLeft += 100;
    });

    const btEsquerda5 = document.querySelector('#bt-esquerda5');
    const btDireita5 = document.querySelector('#bt-direita5');
    const container5 = document.querySelector('#img5');

    container5.style.scrollBehavior = 'smooth';

    btEsquerda5.addEventListener('click', () => {
        container5.scrollLeft -= 100;
    });
    
    btDireita5.addEventListener('click', () => {
        container5.scrollLeft += 100;
    });

//


