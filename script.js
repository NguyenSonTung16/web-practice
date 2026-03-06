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