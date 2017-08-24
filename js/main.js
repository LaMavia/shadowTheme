









//Events
const menuItems = document.querySelector('nav.menu').children;
window.addEventListener('resize', (e) => {
    if(window.innerWidth > 1366){
        document.querySelector('nav.menu').classList.add('hid');
        menuItems[menuItems.length - 1].addEventListener('click', (e) => {
            document.querySelector('nav.menu').classList.toggle('hid');
            e.target.classList.toggle('active');
        }, true);
    }else if(window.innerWidth < 1366 && window.innerWidth > 1025){
        document.querySelector('nav.menu').classList.remove('hid');
        menuItems[menuItems.length - 1].removeEventListener('click');
    }
})
