window.addEventListener('DOMContentLoaded', () => {
    /* MODAL */
    let modalBlock = document.querySelector('.js-sidebars'),
        allModal = document.querySelectorAll('.js-sidebars > section'),
        modalCall = document.querySelector('.modal-call'),
        modalRegion = document.querySelector('.modal-region'),
        regionSelect = document.querySelectorAll('.modal-region__link'),
        regionBtn = document.querySelector('.js-region-city'),
        burgerMenu = document.querySelector('.adaptive-menu');

    if (regionBtn) {
        if (localStorage.getItem('city') != null) {
            regionBtn.innerHTML = localStorage.getItem('city');
        } else {
            regionBtn.innerHTML = 'Москва';
        }
    }

    document.addEventListener('click', e => {

        let target = e.target;

        if (target && (target.classList.contains('js-call') || target.classList.contains('modal-call__exit'))) {
            openCloseModal(e, modalCall);
        }

        if (target && (target.classList.contains('js-modal-header') || target.classList.contains('adaptive-menu__exit'))) {
            openCloseModal(e, burgerMenu);
        }

        if (target && (target.classList.contains('js-region') || target.classList.contains('modal-region__exit'))) {
            openCloseModal(e, modalRegion);
        }

        if (target.classList.contains('modal-region__link')) {
            for (let i = 0; i < regionSelect.length; i++) {
                if (regionSelect[i] == target) {
                    let citiValue = regionSelect[i].innerHTML;
                    localStorage.setItem('city', citiValue)
                    let testValue = localStorage.getItem('city')
                    if (testValue == 'undifiend') {
                        regionBtn.innerHTML = 'Москва';
                    } else {
                        regionBtn.innerHTML = testValue.innerHTML;
                        regionBtn.innerHTML = testValue;
                    }

                }
            }

            openCloseModal(e, modalRegion);
        } else if (target.classList.contains('js-region-close')) {
            let city = document.querySelector('.js-select-city');
            localStorage.setItem('city', city.innerHTML);
            let testValue = localStorage.getItem('city');
            regionBtn.innerHTML = testValue;
            openCloseModal(e, modalRegion);
        }


        /* ЗАКРЫТИЕ ПО КЛИКУ НА САЙДБАР */
        if (target && (target.classList.contains('sidebar-bg') || target.classList.contains('sidebar-bg'))) {
            e.preventDefault();
            document.querySelector('html').classList.toggle('lock');
            document.querySelector('body').classList.toggle('lock');
            modalBlock.classList.toggle('sidebar-bg');
            for (let i = 0; i < allModal.length; i++) {
                if (allModal[i].classList.toggle('active')) {
                    allModal[i].classList.remove('active');
                }
            }
            document.querySelector('.header').classList.toggle('blur');
            document.querySelector('main').classList.toggle('blur');
            document.querySelector('.footer').classList.toggle('blur');

        }

    });

    function openCloseModal(e, modal) {
        e.preventDefault();
        document.querySelector('html').classList.toggle('lock');
        document.querySelector('body').classList.toggle('lock');
        modalBlock.classList.toggle('sidebar-bg');
        modal.classList.toggle('active');
        document.querySelector('.header').classList.toggle('blur');
        document.querySelector('main').classList.toggle('blur');
        document.querySelector('.footer').classList.toggle('blur');
    }
});