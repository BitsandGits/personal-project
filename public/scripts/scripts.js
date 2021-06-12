// hamburger menu icon show/hide items 
let hamburgerMenuIcon = document.querySelector(".menu");
let menuItems = document.querySelector(".topnav");
let toggleMenu = function() {
    menuItems.classList.toggle("open");
}
hamburgerMenuIcon.addEventListener("click",toggleMenu); 