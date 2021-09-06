$(document).on('ready', function () {
  $('.js-slick').slick({
    // dots: true,
    // vertical: true,
    // centerMode: true,
    // arrows: false,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: `<button class="review-btn slick-next" type="button">
      <svg class="icon-arrow">
        <use href="/icons-sprite.e07a9deb.svg#icon-arrow-right">
    </use>
      </svg>
    </button>`,
    prevArrow: `<button class="review-btn slick-prev" type="button">
      <svg class="icon-arrow">
        <use href="/icons-sprite.e07a9deb.svg#icon-arrow-left">
    </use>
      </svg>
    </button>`,
    asNavFor: '.js-slick2',
  });
  $('.js-slick2').slick({
    //   dots: true,
    // vertical: true,
      centerMode: true,
    arrows:false,
    //   infinite: true,
    slidesToShow: 7,
    // slidesToScroll: 1,
    // draggable: false,
    useTransform: false,
    asNavFor: '.js-slick',
  });
  // });
});
