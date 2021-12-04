const hamburger = document.querySelector('.nav-bar__hamburger');
const nav = document.querySelector('.nav-bar__nav');

hamburger.addEventListener('click', function(){
    nav.classList.toggle('active')
})