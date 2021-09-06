$(document).on('ready', function () {
  $('.js-slick').slick({
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
    mobileFirst: true,
    asNavFor: '.js-slick2',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    // --------------------------
    responsive:[
        {
            breakpoint:766,
            settings:{
                arrows:true
            }
            
        }
    ],

    appendArrows: $('.js-slick'),
  });

  $('.js-slick2').slick({
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
  arrows:true,
  slidesToShow: 3,
    mobileFirst: true,
    useTransform: true,
    centerMode: true,
    centerPadding: '0px' ,
    asNavFor: '.js-slick',
    // appendArrows: $('.js-slick2'),
    // ---------------------
    responsive:[
        {
            breakpoint:766,
            settings:{
                slidesToShow: 7,
                arrows: false,
                useTransform: false,
                
            }
        }
    ]
  });
  // });
});
