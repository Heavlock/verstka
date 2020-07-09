function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
$(document).ready(function () {
  let test = document.querySelectorAll('.fly-elements');
  console.log(test);
  test.forEach((test) => test.classList.add('animate'));

  $('.header__nav.icon-menu').click(function () {
    if (screen.width < 1023) {
      $('nav.header__nav').toggleClass('active-mobile-menu');
      $('nav.header__nav').toggle('400');
      $('body').toggleClass('active-mobile-menu');
    }
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

  $('.slider').slick({
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  // } else if (screen.width < 1024 && screen.width > 320) {
  //   $('.slider').slick({
  //     slidesToShow: 2,
  //     dots: true,
  //     arrows: false,
  //     infinite: true,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //   });
  // } else {
  //   $('.slider').slick({
  //     slidesToShow: 1,
  //     dots: true,
  //     arrows: false,
  //     infinite: true,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //   });
  // }
});
