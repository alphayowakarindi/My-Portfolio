const menu = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');

const closeButton = document.querySelector('.close-button');

menu.addEventListener('click', ()=>{
    overlay.style.display ="block"
})

closeButton.addEventListener('click', ()=>{
    overlay.style.display ="none"
})
