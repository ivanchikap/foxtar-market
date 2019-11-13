(function () {
    // .header-nav навигация
    let nav = $('.menu__list');

    // .menu-btn - кнопка меню
    $('.menu__btn').click(function() {
        if(nav.hasClass('menu__list--active')) {
            nav.removeClass('menu__list--active');
        }
        else {
            nav.addClass('menu__list--active');
        }
    });

    $( "#products-release__tabs" ).tabs();

    $( "#trending-products__carousel" ).owlCarousel({
        dots:true,
        margin: 30,
        responsive:{
            0: {
                items: 1
            },
            720: {
                items: 2
            },
            1200: {
                items: 3
            },
            1440: {
                items: 4
            },
        }
    });

    // $('.upload-form select').styler();
    // $('.upload-form__type-file').styler();
    // $('.upload-form__text-input').styler();

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        prefix: '$',
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        hide_min_max: true,
        skin: "round"
    });
}());