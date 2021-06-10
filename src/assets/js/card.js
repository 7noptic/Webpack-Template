window.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card'),
        cardLike = document.querySelectorAll('.card__heart');
    document.addEventListener('click', (e) => {
        if (e.target && (e.target.classList.contains('card__heart') || e.target.classList.contains('js-card-heart'))) {
            e.preventDefault();
        }
    })
    if (cards) {

        toggleCardLike(cardLike);

        function toggleCardLike(like) {
            for (let i = 0; i < like.length; i++) {
                let trigger = false;
                if (like[i]) {
                    let heartColor = like[i].querySelector('.js-card-heart');
                    like[i].onclick = function (x) {
                        return function () {
                            if (heartColor) {
                                if (trigger) {
                                    heartColor.style.fill = "#000";
                                    trigger = false;
                                } else {
                                    heartColor.style.fill = "#D60808";
                                    trigger = true;
                                }
                            }

                        }
                    }(i)
                }
            }
        }
    }
});