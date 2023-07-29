let disableClickWhenActive = {
    menu: false,
    cart: false,
}

let clientWidth = document.documentElement.clientWidth;
let rightSide = document.querySelector('.nav__right-side');
let leftSide = document.querySelector('.nav__left-side');

let nav = document.querySelector('.nav');
let main = document.querySelector('.main')

if (clientWidth < 1440) {
    leftSide.innerHTML = '<img src="../img/nav/menu.svg" alt="menu">'
    leftSide.classList.add('nav__left-side-icon')

    let menu = document.querySelector('.nav__left-side-icon');
    let menuContent = document.querySelector('.menu')
    let closeMenu = document.querySelector('.menu__close-button');

    menu.onclick = function () {
        if (disableClickWhenActive.cart === true) return;
        nav.style.filter = 'blur(3px)';
        main.style.filter = 'blur(3px)';
        menuContent.style.display = 'block';
        menuContent.style.zIndex = '1000';
        disableScroll();
        disableClickWhenActive.menu = true;
    }

    closeMenu.onclick = function () {
        nav.style.filter = 'blur(0px)';
        main.style.filter = 'blur(0px)';
        menuContent.style.display = 'none';
        enableScroll();
        disableClickWhenActive.menu = false;
    }

    rightSide.innerHTML = '<img src="../img/nav/cart.svg" alt="cart">'
    rightSide.classList.add('nav__right-side-icon')

    let cart = document.querySelector('.nav__right-side-icon');
    let cartContent = document.querySelector('.cart');
    let cartClose = document.querySelector('.cart__close');

    cart.onclick = function () {
        if (disableClickWhenActive.menu === true) return;
        nav.style.filter = 'blur(3px)';
        main.style.filter = 'blur(3px)';
        cartContent.style.display = 'block';
        disableScroll();
        disableClickWhenActive.cart = true;
    }

    cartClose.onclick = function () {
        nav.style.filter = 'blur(0px)';
        main.style.filter = 'blur(0px)';
        cartContent.style.display = 'none';
        enableScroll();
        disableClickWhenActive.cart = false;
    }
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