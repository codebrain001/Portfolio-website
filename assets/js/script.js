// Select the Toggle checkbox for Dark/Light Mode
let checkbox = document.getElementById('toggle_checkbox');
// Select HTML body 
let body = document.body;
// Select Navigation bar
let navList = document.querySelectorAll('nav a');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        nav.classList.add('dark-theme');

    } else {
        body.classList.remove('dark-theme');
        navList.classList.remove('dark-theme');
    }
});

let nav_interative = () => {
    let burger = document.getElementById('burger');
    let nav = document.getElementById('menu');
    let menuLinks = document.querySelectorAll('#menu li');

}