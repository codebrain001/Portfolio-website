let nav = document.getElementById('nav-bar');
console.log(nav)

let navSticky = () => {
    if (window.scrollY > 10){
        nav.classList.add("sticky");
        console.log("Added")
    } else {
        nav.classList.remove("sticky"); 
        console.log("Remove") 
    }
}

navSticky();