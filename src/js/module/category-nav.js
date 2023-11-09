let $sliderCategoryNav = $('.category-nav');

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $sliderCategoryNav.not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
        });
    } else {
        $sliderCategoryNav.filter('.slick-initialized').slick('unslick');
    }
});