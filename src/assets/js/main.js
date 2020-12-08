'use script';
let modal = document.getElementById('myModal'),
    isPriceUp = false,
    cardsSort = document.querySelector('#cardsSort');

/******************* sort **********************/
document.querySelector('#sortPrice').addEventListener('click', () =>{
    sort('data-price');
    if (isPriceUp){
        document.querySelector('#sortPrice').classList.remove('arrowtop');
        document.querySelector('#sortPrice').classList.add('arrowbottom');
    }else{
        document.querySelector('#sortPrice').classList.remove('arrowbottom');
        document.querySelector('#sortPrice').classList.add('arrowtop');
    }
});
document.querySelector('#sortAge').addEventListener('click', () =>{
    sort('data-age');
    if (isPriceUp){
        document.querySelector('#sortAge').classList.remove('arrowtop');
        document.querySelector('#sortAge').classList.add('arrowbottom');
    }else{
        document.querySelector('#sortAge').classList.remove('arrowbottom');
        document.querySelector('#sortAge').classList.add('arrowtop');
    }
});

function sort(sortType) {
    if (isPriceUp) {
        for (let i = 0; i < cardsSort.children.length; i++) {
            for (let j = i; j < cardsSort.children.length; j++) {
                if (+cardsSort.children[i].getAttribute(sortType) < +cardsSort.children[j].getAttribute(sortType)) {
                    sortUpDown(i, j);
                }
            }
        }
        isPriceUp = false;
    } else {
        for (let i = 0; i < cardsSort.children.length; i++) {
            for (let j = i; j < cardsSort.children.length; j++) {
                if (+cardsSort.children[i].getAttribute(sortType) > +cardsSort.children[j].getAttribute(sortType)) {
                    sortUpDown(i, j);
                }
            }
        }
        isPriceUp = true;
    }


    function sortUpDown(i, j) {
        replacedNode = cardsSort.replaceChild(cardsSort.children[j], cardsSort.children[i]);
        insertAfter(replacedNode, cardsSort.children[i]);
    }
    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }
}
/******************* /sort **********************/


/******************* scroolup **********************/
document.querySelector('#arrowTop').addEventListener('click', () =>{
    window.scrollTo(pageXOffset, 0);
});
window.addEventListener('scroll', function() {
    document.querySelector('#arrowTop').hidden = (pageYOffset < 100);
});
/******************* /scroolup **********************/


/******************* like **********************/

cardsSort.addEventListener('click', toggleDone);
function toggleDone (event) {
    if (!event.target.matches('path')) return;
    console.log(event.target);
    if(event.target.style.fillOpacity == 1){
        event.target.style.fillOpacity = 0.5;
    }
    else{
        modal.style.display = "block";
        event.target.style.fillOpacity = 1;
    }
}
document.getElementsByClassName("close")[0].addEventListener('click', () => {
    modal.style.display = "none";
});
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/******************* /like **********************/