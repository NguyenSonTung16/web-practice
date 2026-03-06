// Sidebar menu logic
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const openBtn = document.querySelector('.header-navbar');
    const closeBtn = document.getElementById('sidebar-close');

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    if (openBtn) {
        openBtn.addEventListener('click', openSidebar);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidebar);
    }
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
    // Optional: close sidebar with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSidebar();
    });
});
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
