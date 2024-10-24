// <--This will allow a user to click "game start" to fade it out -->
const element = document.getElementById('enter-button');
const intro = document.getElementById('intro');

element.addEventListener('click', () => {
    intro.classList.add('fade-out');
});