// ;
// (function ($) {

//     'use strict';

//     var scrollTop = function () {
//         window.scroll(function () {
//             if (window.scrollTop() >= 100) {
//                 $('.scroll-top').show;
//             } else {
//                 $('.scroll-top').hide();;
//             }
//         });
//         $('.scroll-top').click(function () {
//             $('html,body').animate({
//                 scrollTop: 0
//             }, 10000);
//         });
//     };


//     //Dom Ready
//     $(function () {
//         scrollTop();
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

function toggleMobile() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};