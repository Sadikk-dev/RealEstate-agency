let images = document.querySelectorAll('.offer-details .images-container .images img');
let currentImage = document.querySelector('.offer-details .images-container .current-image img');

images.forEach(image => {
    image.onclick = () => {
        images.forEach(img => img.classList.remove('active'));
        image.classList.add('active');

        currentImage.setAttribute('src', `${image.getAttribute('src')}`);
    }
});

let detailButtons = document.querySelectorAll('.details-container .headlines h2');
let slides = document.querySelectorAll('.details-container .content .box');

detailButtons.forEach(button => {
    button.onclick = () => {
        detailButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        let filter = button.getAttribute('data-filter');
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.classList.remove('slide');
            if(slide.getAttribute('data-item') == filter) {
                slide.classList.add('active');
                slide.classList.add('slide');
            }
        })
    }
});

