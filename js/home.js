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

const carrossel = document.querySelector(".carrossel"),
firstImg = carrossel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart =  false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 10;
let scrollWidth = carrossel.scrollWidth - carrossel.clientWidth;

const showHideIcons = () => {
    arrowIcons[0].style.display = carrossel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carrossel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach (icon => {
    icon.addEventListener("click", () => {
       carrossel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
       setTimeout(() => showHideIcons(), 60);
    });
});

const dragStart  = (e) => {
    isDragStart =  true
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carrossel.scrollLeft;
}

const dragging  = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carrossel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touchend[0].pageX) - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carrossel.classList.remove("dragging");
}

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("touchstart", dragStart);

carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("touchmove", dragging);

carrossel.addEventListener("mouseup", dragStop);
carrossel.addEventListener("mouseleave", dragStop);
carrossel.addEventListener("touchend", dragStop);

    