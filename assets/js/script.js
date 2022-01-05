// Mobile navigation toggle button
let nav_interative = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.menu');
    let navBar = document.querySelector('nav');
    let menuLinks = document.querySelectorAll('.menu li');
    
    // Toggle Menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
    
        // Fixed the body section 
        document.querySelector('body').classList.toggle('body-fixed');
       
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
            burger.classList.toggle('toggle');
    })
    }
    nav_interative();

// Select the Toggle checkbox for Dark/Light Mode
let checkbox = document.getElementById('toggle_checkbox');
// Select HTML body 
let body = document.body;
checkbox.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
  });

  


