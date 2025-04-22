let heightScreen = window.scrollY;
window.addEventListener('scroll', () => {
    
    const header = document.querySelector('.header');
    if (heightScreen > 0) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

// menuButton.classList.add('fa-bars')
menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        menuButton.classList.add('fa-xmark')
        menuButton.classList.remove('fa-bars')
    } else {
        menuButton.classList.add('fa-bars');
        menuButton.classList.remove('fa-xmark')
    }
});



