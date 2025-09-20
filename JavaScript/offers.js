let filterButtons = document.querySelectorAll('.filter-buttons .btn'),
    items = document.querySelectorAll('.offers .box-container .box');

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