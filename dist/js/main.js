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

  $('body').on('click', '[href*="#"]', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top }, 1000);
    e.preventDefault();
  });

  $(window).resize(function () {
    if ($(window).width() > '1024') {
      $('nav.header__nav').css({ display: 'block' });
      $('nav.header__nav').removeClass('active-mobile-menu');
      $('body').removeClass('active-mobile-menu');
    }
  });

  $('div.header__nav').click(function () {
    if ($(window).width() < '1025') {
      $('nav.header__nav').toggleClass('active-mobile-menu');
      if ($('nav.header__nav').hasClass('active-mobile-menu')) {
        $('nav.header__nav').fadeIn();
        $('div.header__nav').removeClass('icon-menu');
        $('div.header__nav').addClass('icon-cancel');
      } else {
        $('nav.header__nav').fadeOut();
        $('div.header__nav').removeClass('icon-cancel');
        $('div.header__nav').addClass('icon-menu');
      }
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
});
