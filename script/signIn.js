let signInButton = document.querySelector('.nav__sign-in');
let signInContent = document.querySelector('.sign-in');

signInButton.onclick = function () {
    if (isOpen.menu === true || isOpen.cart === true) return;
    nav.style.filter = 'blur(3px)';
    main.style.filter = 'blur(3px)';
    signInContent.style.display = 'block';
    disableScroll();
    isOpen.signIn = true;

    document.documentElement.onkeydown = function (event) {
        if (event.code === 'Escape') {
            closeSignIn();
        }
    }
}

function closeSignIn() {
    nav.style.filter = 'blur(0px)';
    main.style.filter = 'blur(0px)';
    signInContent.style.display = 'none';
    enableScroll();
    isOpen.signIn = false;
}