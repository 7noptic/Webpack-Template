'use script';
import Swiper, {Navigation, Pagination,} from 'swiper';
import Readmore from "readmore-js";
import GLightbox from 'glightbox';

Swiper.use([Navigation, Pagination]);


window.addEventListener('DOMContentLoaded', () =>{
    /* HAMBURGER MENU IN HEADER*/
    let header = document.querySelector('.header'),
        hamburgerBtn = header.querySelector('.js-burger'),
        hamburgerMenu = header.querySelector('.hamburger-menu');



    header.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('js-burger')) {
        hamburgerMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    }
    });
    /* ЗАГРУЗКА ДАННЫХ ИЗ LocalStorage */
    /* пример
    if(localStorage.getItem('city') != null){
        regionBtn.innerHTML = localStorage.getItem('city');
    } else{
        regionBtn.innerHTML = 'Москва';
    }
    */

   /* MODAL */
   let modalBlock = document.querySelector('.js-sidebars'),
   allModal = document.querySelectorAll('.js-sidebars > section');


   document.addEventListener('click', e =>{
    let target = e.target;
    /* ЗАКРЫТИЕ ПО КЛИКУ НА САЙДБАР */
        if (target && target.classList.contains('sidebar-bg')) {
            e.preventDefault();
            modalBlock.classList.toggle('sidebar-bg');
            for(let i =0; i < allModal.length; i++){
                if (allModal[i].classList.toggle('active')) {
                    allModal[i].classList.remove('active');
                }
            }
        }
   });
   
   function toggleModal(e, modal) {
    e.preventDefault();
    modalBlock.classList.toggle('sidebar-bg');
    modal.classList.toggle('active');
    }



    /* TABS */
    function toggleTabs(link, tabs, parent, classContains, subTabs, subLink, subContent) {
        hideTabs(link, tabs);
        showTabs(0, link, tabs);
        /*
        let indexPrevTabs = 0,
            TabsPrevHeight = tabs[indexPrevTabs].clientHeight;
        console.log(tabs[0].clientHeight);
        */
        let subIndex = 0;

        if (subTabs) {
            let subLinks = tabs[0].querySelectorAll(subLink),
                subTabs = tabs[0].querySelectorAll(subContent);
            hideTabs(subLinks, subTabs);
            showTabs(0, subLinks, subTabs);
        }
        parent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(classContains)) {
                e.preventDefault();

                for (let i = 0; i < link.length; i++) {
                    if (link[i] === e.target) {
                        hideTabs(link, tabs);
                        showTabs(i, link, tabs);
                        if (subTabs) {
                            let subLinks = tabs[i].querySelectorAll(subLink),
                                subTabs = tabs[i].querySelectorAll(subContent);
                            hideTabs(subLinks, subTabs);
                            showTabs(0, subLinks, subTabs);
                            subIndex = i;
                        }
                        /*
                        if(tabs[i].clientHeight > TabsPrevHeight){
                            console.log(tabs[i].clientHeight);
                            console.log(TabsPrevHeight);
                        }
                        */
                    }
                }
            }
            let subLinks = tabs[subIndex].querySelectorAll(subLink),
                subTabs = tabs[subIndex].querySelectorAll(subContent);
            if (e.target && e.target.classList.contains(subLink)) {
                e.preventDefault();
                for (let i = 0; i < subLinks.length; i++) {
                    if (subLinks[i] === e.target) {
                        hideTabs(subLinks, subTabs);
                        showTabs(i, subLinks, subTabs);
                    }
                }
            }
        });
    }

    function showTabs(i = 0, link, content) {
        link[i].classList.add('active');
        content[i].classList.add('active');
    }

    function hideTabs(link, content) {
        for(let i = 0; i < link.length; i++){
            link[i].classList.remove('active');
        }
        for(let i = 0; i < content.length; i++){
            content[i].classList.remove('active');
        }
    }

    /* SHOW HIDE CONTENT */
    
    function toggleContent(link, content, linkClass){
        document.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains(linkClass)){
                e.preventDefault();
                for(let i = 0; i < link.length; i++){
                    if (e.target == link[i]) {
                        link[i].classList.toggle('active');
                        content[i].classList.toggle('active');
                    }
                }
            }
        });
    }





    /* RATING */
    let ratingParent = document.querySelector('.js-rating'),
    ratingInput = document.querySelector('#js-rating'),
    ratingStar = document.querySelectorAll('.js-rating > li');

    if (ratingParent) {
    ratingParent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        if (target && target.tagName == 'LI') {
            for(let i = 0; i < ratingStar.length; i++){
                ratingStar[i].classList.remove('active')
            }
            for (let i = 0; i => ratingStar.length; i++) {
                if (ratingStar[i] == target) {
                    ratingStar[i].classList.add('active');
                    ratingInput.value = ++i;
                    return
                } else {
                    ratingStar[i].classList.add('active');
                }
            }
        }

    });
    }





    /* VIDEO */
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();
});










/* АДАПТИВНОЕ ПЕРЕМЕЩЕНИЕ БЛОКОВ */
function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    this.nodes = document.querySelectorAll("[data-da]");

    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();