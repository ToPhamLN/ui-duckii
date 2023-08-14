const toggleSidebar = document.querySelector('.toggle_sidebar');
const sidebar = document.querySelector('#sidebar_page');
const moreListBtn = document.querySelector('#more_list_btn');
const moreListContain = document.querySelector('#morelist');
const moreList = document.querySelector('.more_list');
const toggleDarkLight = document.querySelector('#toggle_dark_light');
const root = document.querySelector(':root');
const body = document.querySelector('body');
// open or close sidebar
toggleSidebar.addEventListener('click', function () {
    if (sidebar.style.left == '-20rem' | sidebar.style.left == '') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-20rem';
    }
});



// open setting list
moreListBtn.addEventListener('click', function () {
    if (moreListContain.style.display == 'none' || moreListContain.style.display == '') {
        moreListContain.style.display = 'block';
    } else {
        moreListContain.style.display = 'none';
    }
})


document.addEventListener('click', function (e) {
    if (moreListContain.contains(e.target)) {
        moreListContain.style.display = "none";
    }
});

moreList.addEventListener("click", (event) => {
    event.stopPropagation();
});

//toggle dark mode and light mode

let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

function applyTheme() {
    if (isDarkMode) {
        root.style.setProperty('--primary-color', '#58db93');
        root.style.setProperty('--light--color', '#c9e0de');
        root.style.setProperty('--text-color', '#242424');
        root.style.setProperty('--text--hover', '#1d1d1d');
    } else {
        root.style.setProperty('--primary-color', '#58db93');
        root.style.setProperty('--light--color', '#242424');
        root.style.setProperty('--text-color', '#c9e0de');
        root.style.setProperty('--text--hover', '#ffffff');

    }
};

applyTheme();

toggleDarkLight.addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    applyTheme();
});



