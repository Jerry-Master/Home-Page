$(document).on('ready', function() {
    $(".carousel").slick({
      dots: true,
      vertical: false,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true
    });
});