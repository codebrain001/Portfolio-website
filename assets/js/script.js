// Mobile navigation toggle button
let nav_interative = () => {
    let burger = document.getElementById('burger');
    let navBar = document.querySelector('#nav-bar');
    let nav = document.getElementById('menu')
    let menuLinks = document.querySelectorAll('#menu li');
    // Select HTML body 
    let body = document.body;

    // Toggle Menu
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('toggle');

        nav.classList.toggle('active');

        // Fixed the body section 
        body.classList.toggle('body-fixed');

        // Remove the blur on the navigation bar (Mobile)
        navBar.classList.toggle('remove-blur');

        // Add the blur on the navigation bar (Mobile)
        nav.classList.toggle('add-blur');
    })
};

nav_interative();