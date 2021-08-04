const hamburger = document.querySelector (".hamburger");
const navsite = document.querySelector (".navsite");

hamburger.addEventListener("click",navsite);

function  navsite() {
    hamburger.classList.toggle("active");
    navsite.classList.toggle("active");
}

