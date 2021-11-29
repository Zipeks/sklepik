const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', mobileMenu);


function mobileMenu () {
   sidebar.classList.toggle('active');
   hamburger.classList.toggle('active');
}
