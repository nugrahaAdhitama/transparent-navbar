let nav = document.querySelector('nav');
let navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100) {
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        nav.classList.add('bg-light');
        console.log("WORK!")
    } else {
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
        nav.classList.remove('bg-light');
       console.log("KEREEEN!");

    }
})