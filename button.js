
document.addEventListener('DOMContentLoaded', () => {
    const buttonel = document.querySelector('.buttonel');
    const subscribe = document.querySelector('.subscribe');

    buttonel.addEventListener('click', () => {
        subscribe.classList.toggle('show');
    });
});


