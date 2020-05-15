$(document).ready(function () {
  $(".heading").slick({
    dots: true,
    arrows: false,
  });
});

$(document).ready(function () {
  $(".news-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
