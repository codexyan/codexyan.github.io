// Hamburger Toggle
const humberger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
    humberger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// Navbar Fixed Effect Blur when scroll
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top")

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex')
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
        header.classList.remove('navbar-fixed');
    }
}

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != humberger && e.target != navMenu) {
        humberger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
})

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}