window.addEventListener('DOMContentLoaded', () => {
    /* HAMBURGER MENU IN HEADER*/

    let header = document.querySelector('.header');
    if (header) {
        header.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('js-burger')) {
                e.preventDefault();
                document.querySelector('.hamburger-menu').classList.toggle('active');
                document.querySelector('.js-burger').classList.toggle('active');
            }
            if (e.target && e.target.classList.contains('js-search')) {
                e.preventDefault();
                document.querySelector('.form-wrapper-header').classList.toggle('active');
            }
        });
    }
});
