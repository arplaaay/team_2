// $(document).on('ready', function() {
//     $(".js-slider").slick({
//       // dots: true,
//       // vertical: true,
//       // centerMode: true,
//       // arrows: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       asNavFor: '.js-pagination'
//     });
//     $(".js-pagination").slick({
//       // dots: true,
//       // vertical: true,
//       // centerMode: true,
//       slidesToShow: 7,
//       slidesToScroll: 1,
//       asNavFor: '.js-slider '
//     });

//   });
$document.ready(function(){
    $('.js-slider').slick({
        dots: true,
      vertical: true,
      centerMode: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
})