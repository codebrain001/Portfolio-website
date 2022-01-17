// Mobile navigation toggle button
let nav_interative = () => {
    let burger = document.getElementById('burger');
    let nav = document.getElementById('nav-bar');
    let menu = document.getElementById('menu')
    let menuLinks = document.querySelectorAll('#menu li');
    // Select HTML body 
    let body = document.body;

    // Toggle Menu
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('toggle');

        menu.classList.toggle('active');

        // Fixed the body section 
        body.classList.toggle('body-fixed');
    })

};

nav_interative();