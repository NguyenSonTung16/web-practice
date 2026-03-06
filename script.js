const button = document.querySelector('.button-link');
button.addEventListener('click', () => {
    alert('Dang ky thanh cong!');
});
const courseButtons = document.querySelectorAll('.course-button');
courseButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Dang ky khoa hoc thanh cong!');
    });
});
const menu_items = document.querySelectorAll('.menu-item');
menu_items.forEach(item => {
    item.addEventListener('click', () => {
        alert('Chuyen tiep sang trang moi!');
    });
});
const navbar=document.querySelector('.header-navbar');
navbar.addEventListener('click',()=>{
    alert('Chuyen tiep sang trang moi!');
});