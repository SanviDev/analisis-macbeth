
const themeSwitch = document.getElementById('theme-switch');
const body = document.querySelector('body');

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
});
