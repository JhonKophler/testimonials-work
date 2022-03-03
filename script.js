jQuery(document).ready(function($) {
    "use strict";
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 30,
        autoplay: true,
        dots: false,
        nav: true,
        autoplayTimeout: 5500,
        smartSpeed: 450,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 2
            }
        }
    });
});


/* 
let actual = 3;
document.getElementById('button-next').onclick = () => {


    //  center & active

    const listItem = document.querySelectorAll('.owl-item');
    let nuevoActual = listItem[actual];


    listItem[actual - 1].classList.remove('active');
    listItem[actual].classList.remove('center');
    listItem[actual + 1].classList.add('center');
    actual++;



} */

/* document.getElementById('button-prev').onclick = () => {
    console.log("aca prev");
} */