$('.mobile-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('mobile-btn--active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('body').toggleClass('lock');
});

$('.header-top__button-link').on('click', function () {
    $('.popup').addClass('popup--active');
});

$('.popup__close').on('click', function () {
    $('.popup').removeClass('popup--active');
});