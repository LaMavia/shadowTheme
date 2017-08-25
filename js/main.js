//Vars
//Functions
const menuItems = document.querySelector('nav.menu').children;
const expandMenu = (e) => {
    document.querySelector('nav.menu').classList.toggle('hid');
    menuItems[menuItems.length - 1].classList.toggle('active');
}
const menuEventHolder = (e) => {
    document.querySelector('nav.menu').classList.add('hid');
    menuItems[menuItems.length - 1].addEventListener('click', expandMenu, true);
}
//Events
window.addEventListener('DOMContentLoaded', (e)=>{
    menuEventHolder();
    SHADOW.rgb();
});
window.addEventListener('keydown', (e) => {
    switch(e.keyCode){
        case 77: e.preventDefault(), expandMenu(); //M
    }
});
