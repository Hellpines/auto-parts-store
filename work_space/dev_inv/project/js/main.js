$(function () {

    var mixer = mixitup('.blog__items');
    $('.comments__block').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        draggable: false,
        appendArrows: $('.comments__arrows'),
    });
})
