// Mobile navigation toggle button
let nav_interative = () => {
    let burger = document.querySelector('#burger');
    let body = document.body;
    let nav = document.querySelector('#menu');
    let navBar = document.querySelector('nav');
    let menuLinks = document.querySelectorAll('#menu li');
    
    // Toggle Menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');

        // Fixed the body section 
        body.classList.toggle('body-fixed');

        nav.classList.toggle('color');
         // Remove the blur on the navigation bar (Mobile)
        navBar.classList.toggle('remove-blur');

        // Add the blur on the navigation bar (Mobile)
        nav.classList.toggle('add-blur');
        // Animate Links
        menuLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index/7 +2}s`;
            }
        });
        
        // Burger toggle
        burger.classList.toggle('burger-toggle');
    })
}

nav_interative();
