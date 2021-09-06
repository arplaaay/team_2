$(document).on('ready', function () {
  $('.review-slider').slick({
    nextArrow: `<button class="review-btn arrow-slider-next slick-next" type="button">
    <svg class="icon-arrow">
      <use href="/icons-sprite.e07a9deb.svg#icon-arrow-right">
     </use>
    </svg>
     </button>`,
    prevArrow: `<button class="review-btn arrow-slider-prev slick-prev" type="button">
    <svg class="icon-arrow">
      <use href="/icons-sprite.e07a9deb.svg#icon-arrow-left">
     </use>
    </svg>
    </button>`,
    mobileFirst: true,
    asNavFor: '.review-slider__pagination',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          arrows: true,
        },
      },
    ],

    appendArrows: $('.review-slider'),
  });

  $('.review-slider__pagination').slick({
    nextArrow: `<button class="review-btn arrow-pagination-next slick-next" type="button">
    <svg class="icon-arrow">
      <use href="/icons-sprite.e07a9deb.svg#icon-arrow-right">
  </use>
    </svg>
  </button>`,
    prevArrow: `<button class="review-btn arrow-pagination-prev slick-prev" type="button">
    <svg class="icon-arrow">
      <use href="/icons-sprite.e07a9deb.svg#icon-arrow-left">
  </use>
    </svg>
  </button>`,
    arrows: true,
    slidesToShow: 3,
    mobileFirst: true,
    useTransform: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.review-slider',

    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 7,
          arrows: false,
          useTransform: false,
        },
      },
    ],
  });
});
