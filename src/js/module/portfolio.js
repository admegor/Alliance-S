let $sliderPortfolio = $('.portfolio-main-list');

// if ($(window).width() < 768) {
//     console.log('активировать слайдер1');
//     $sliderPortfolio.not('.slick-initialized').slick({
//         dots: false,
//         infinite: false,
//         speed: 100,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         variableWidth: true
//     });
// } else {
//     $sliderPortfolio.filter('.slick-initialized').slick('unslick');
//     console.log('убрать слайдер1');
// }

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        console.log('активировать слайдер2');
        $sliderPortfolio.not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
        });
    } else {
        console.log('убрать слайдер2');
        $sliderPortfolio.filter('.slick-initialized').slick('unslick');
    }
});