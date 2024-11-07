let menuIcon = document.querySelector("#menu-icon");
let navabr = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navabr.classList.toggle("active");
};