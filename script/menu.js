let clientWidth = document.documentElement.clientWidth;
let rightSide = document.querySelector('.nav__right-side');

let leftSide = document.querySelector('.nav__left-side');
if (clientWidth < 1440) {
       leftSide.innerHTML ='<img src="../img/nav/menu.svg" alt="menu">'
       leftSide.classList.add('nav__left-side-icon')

       rightSide.innerHTML = '<img src="../img/nav/cart.svg" alt="cart">'
       rightSide.classList.add('nav__right-side-icon')
}

