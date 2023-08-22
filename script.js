const remEl = document.querySelector('.x-code');
const menuCard = document.querySelector('.menu-card')
const hamburger =  document.querySelector('.hamburger')

function toggle(menuCard){
    if(menuCard.style.display == 'none'){
        menuCard.style.display = 'block';
    }else{
        menuCard.style.display = 'none'
    }
}
toggle(menuCard)


// console.log(hamburger)
function remov(menuCard){ 
    if(menuCard){
    menuCard.remove()
    }
}
remov();

