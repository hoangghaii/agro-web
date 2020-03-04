// ;
// (function ($) {

//     'use strict';




//     //Dom Ready
//     $(function () {

//     });


// })(jQuery);

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});