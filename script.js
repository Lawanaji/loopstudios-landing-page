const remEl = document.querySelector('.x-code');
const menuCard = document.querySelector('.menu-card')

function remov(){
    if(menuCard){
        menuCard.parentNode.removeChild(menuCard)
    }
}
remov(remEl)