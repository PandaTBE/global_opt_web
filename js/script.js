$(document).ready(function() {
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    $('.carousel__inner').slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 1500,
        centerMode: true,
        draggable: false,
        centerPadding: '0px',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>'
      });
      function show() {
        $(".slick-arrow").css("display", "block");
      }
      $('.slick-arrow').click(function() {
        $(".slick-arrow").css("display", "none");
        setTimeout(show, 1000)
      });
});