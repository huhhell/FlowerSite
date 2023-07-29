let isOpen = {
    menu: false,
    cart: false,
}

let clientWidth = document.documentElement.clientWidth;

let rightSide = document.querySelector('.nav__right-side');
let leftSide = document.querySelector('.nav__left-side');

let nav = document.querySelector('.nav');
let main = document.querySelector('.main');

// turn nav bar into icons
if (clientWidth <= 1450) {
    leftSide.innerHTML = '<img src="../img/nav/menu.svg" alt="menu">';
    leftSide.classList.add('nav__left-side-icon');

    rightSide.innerHTML = '<img src="../img/nav/cart.svg" alt="cart">';
    rightSide.classList.add('nav__right-side-icon');
}

// menu popup
if (clientWidth <= 1450) {
    let menu = document.querySelector('.nav__left-side-icon');
    let menuContent = document.querySelector('.menu');
    let closeMenu = document.querySelector('.menu__close-button');

    menu.onclick = function () {
        if (isOpen.cart === true) return;
        nav.style.filter = 'blur(3px)';
        main.style.filter = 'blur(3px)';
        menuContent.style.display = 'block';
        menuContent.style.zIndex = '1000';
        disableScroll();
        isOpen.menu = true;
    }

    closeMenu.onclick = function () {
        nav.style.filter = 'blur(0px)';
        main.style.filter = 'blur(0px)';
        menuContent.style.display = 'none';
        enableScroll();
        isOpen.menu = false;
    }
}

// disable and enable scroll functions
function disableScroll() {
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };
}

function enableScroll() {
    window.onscroll = function () {};
}

//cart popup
let cart = document.querySelector('.nav__right-side-icon');
let cartTextElement = document.querySelector('.nav__cart')
let cartContent = document.querySelector('.cart');
let cartClose = document.querySelector('.cart__close');

function showCart() {
    if (isOpen.menu === true) return;
    nav.style.filter = 'blur(3px)';
    main.style.filter = 'blur(3px)';
    cartContent.style.display = 'block';
    disableScroll();
    isOpen.cart = true;
}

function closeCart () {
    nav.style.filter = 'blur(0px)';
    main.style.filter = 'blur(0px)';
    cartContent.style.display = 'none';
    enableScroll();
    isOpen.cart = false;
}

if (clientWidth <= 1450) {
    cart.onclick = showCart;
    cartClose.onclick = closeCart;
}   else {
    cartTextElement.onclick = showCart;
    cartClose.onclick = closeCart;
}