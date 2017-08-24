









//Events
const menuItems = document.querySelector('nav.menu').children;
menuItems[menuItems.length - 1].addEventListener('click', (e) => {
    e.target.classList.toggle('active');
}, true);