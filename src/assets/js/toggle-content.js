window.addEventListener('DOMContentLoaded', () => {
    /* SHOW HIDE CONTENT */

    function toggleContent(link, content, linkClass) {

        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(linkClass)) {
                e.preventDefault();

                for (let i = 0; i < link.length; i++) {
                    if (e.target == link[i]) {
                        link[i].classList.toggle('active');
                        content[i].classList.toggle('active');
                    }
                }
            }
        });
    }
});
