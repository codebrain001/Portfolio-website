const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show_menu');
    })
}

if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu');
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// Skillset 
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills (){
    let itemClass = this.parentNode.className;

    for (i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if (itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach(
    (el)=>{
        el.addEventListener('click', toggleSkills)
    }
)

// Service Modal
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal_close');

    const serviceSection = document.querySelector('section#services');
    console.log('serviceSecction');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active_modal')
        })
    })
})

// Portfolio Swiper 
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: "div.swiper-button-next",
      prevEl: "div.swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });



// Testimonial Swiper
let swiperTestimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor: true,
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakoints: {
        568: {
            slidesPerView: 2,
        }
    }
  });