let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menu.navbar.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.navbar.remove('active');
}