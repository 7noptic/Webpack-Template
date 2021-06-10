window.addEventListener('DOMContentLoaded', () => {
    /*BUTTON READMORE
     new Readmore('.category-tags', {
         speed: 150,
         collapsedHeight: 192,
         moreLink: '<a href="#" class="btn btn-blueborder category-tags__btn">Показать еще</a>',
         lessLink: '<a href="#" class="btn btn-blueborder category-tags__btn">Скрыть</a>',
     });*/
    function showMore(items, link, linkClass) {

        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(linkClass)) {
                e.preventDefault();
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.toggle('active');
                    items[i].classList.toggle('animation-r-to-l');
                    if (trigger) {
                        link.innerHTML = 'Скрыть';
                        trigger = false;
                    } else {
                        link.innerHTML = 'Показать ещё';
                        trigger = true;
                    }
                }
            }
        });

    }
});