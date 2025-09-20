let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;
let homeSlider = () => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(() => {
    homeSlider();
}, 5000);

let moreLinksButton = document.getElementById('more-btn'),
    moreLinksContainer = document.querySelector('.header .navbar .other-links');

moreLinksButton.addEventListener('click', (e) => {
    e.preventDefault();
    moreLinksContainer.classList.toggle('drop-down')
    moreLinksButton.querySelector('i').classList.toggle('fa-chevron-up');
});



let filterButtons = document.querySelectorAll('.filter-buttons .btn'),
    items = document.querySelectorAll('.featured .box-container .box');

filterButtons.forEach(button => {
    button.onclick = () => {
        filterButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        let dataFilter = button.getAttribute('data-filter');
        items.forEach(item => {
            item.classList.remove('effect');
            item.classList.add('hide');
            if(item.getAttribute('data-item') == dataFilter || dataFilter == "all") {
                item.classList.remove('hide');
                item.classList.add('effect');
            }
        });
    }
});