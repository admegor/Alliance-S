let $sliderPortfolio = $('.portfolio-main-list');

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
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
        $sliderPortfolio.filter('.slick-initialized').slick('unslick');
    }
});