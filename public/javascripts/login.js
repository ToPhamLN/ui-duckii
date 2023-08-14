let isLogin = true;
const userNav = document.querySelector('.user_nav');
const sideNav = document.querySelector('.side_nav');
const menuNav = document.querySelector('.menu_nav');
if (isLogin) {
    userNav.style.display = 'block';
    sideNav.style.display = 'none';
    menuNav.style.display = 'block';
} else {
    userNav.style.display = 'none';
    sideNav.style.display = 'block';
    menuNav.style.display = 'none';
}