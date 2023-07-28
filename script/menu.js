let clientWidth = document.documentElement.clientWidth;
let rightSide = document.querySelector('.nav__right-side');

let leftSide = document.querySelector('.nav__left-side');
if (clientWidth < 1440) {
    leftSide.innerHTML = '<img src="../img/nav/menu.svg" alt="menu">'
    leftSide.classList.add('nav__left-side-icon')

    rightSide.innerHTML = '<img src="../img/nav/cart.svg" alt="cart">'
    rightSide.classList.add('nav__right-side-icon')
}

let menu = document.querySelector('.nav__left-side-icon');
let menuContent = document.querySelector('.menu')
let closeButton = document.querySelector('.menu__close-button');
let nav = document.querySelector('.nav');
let main = document.querySelector('.main')

menu.onclick = function () {
    nav.style.filter = 'blur(3px)'
    main.style.filter = 'blur(3px)'
    menuContent.style.display = 'block';
    menuContent.style.zIndex = '1000'
    disableScroll();
}

closeButton.onclick = function () {
    nav.style.filter = 'blur(0px)'
    main.style.filter = 'blur(0px)'
    menuContent.style.display = 'none';
    enableScroll()
}

function disableScroll() {
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };
}

function enableScroll() {
    window.onscroll = function () {
    };
}
