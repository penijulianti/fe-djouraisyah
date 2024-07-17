const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navmenu.classList.toggle('open');
}

// DOM Manipulation
const section = document.getElementById('trending');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  // Change the background color of the section to pink when scrolling
  if (scrollPosition > 0) {
    section.style.backgroundColor = '#F0E2E1';
  } else {
    section.style.backgroundColor = 'white';
  }
});