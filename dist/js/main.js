$(document).ready(function () {
  $('.header__nav.icon-menu').click(function () {
    $('nav.header__nav').toggleClass('active-mobile-menu');
    $('nav.header__nav').toggle('400');
    $('body').toggleClass('active-mobile-menu');
  });

  $('button.icon-phone').click(function () {
    $('.popup1').show(700);
    $('body').addClass('active-mobile-menu');
    $('.bg-grey').fadeIn(700);
  });
  $('.bg-grey').click(function () {
    $('.popup1, .popup2').hide(400);
    $('body').removeClass('active-mobile-menu');
    $('.bg-grey').fadeOut(400);
  });
  $(
    '.header__button_orange, .section2__row__btn, .section3__row__btn, .footer__btn_transparent'
  ).click(function () {
    $('.popup2').show(700);
    $('body').addClass('active-mobile-menu');
    $('.bg-grey').fadeIn(700);
  });
  // if (screen.width > 767) {
  //   $('.arrow-left').click(function () {
  //     let slides = Array.from(document.querySelectorAll('.section3__slide'));
  //     let l = slides.shift();
  //     slides.push(l);
  //     console.log(slides);
  //   });
  // }
  if (screen.width > 1024) {
    $('.slider').slick({
      slidesToShow: 3,
      arrows: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  } else if (screen.width < 1024 && screen.width > 320) {
    $('.slider').slick({
      slidesToShow: 2,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  } else {
    $('.slider').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
});
