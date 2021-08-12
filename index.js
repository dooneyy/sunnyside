const navIcon = document.querySelector('.nav-icon');
const nav = document.getElementById('nav');
const navMobile = document.querySelector('.nav-mobile');

navIcon.addEventListener('click', () => {
    if(window.innerWidth <= 767){
        navMobile.classList.toggle('active');
    }
   
})