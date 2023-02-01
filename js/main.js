$(document).ready(function () {
  $(".projects-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    dots: true,
    // prevArrow:
    //   '<span class="prev-arrow" ><i class="bi bi-arrow-left"></i></span>',
    // nextArrow:
    //   '<span class="next-arrow" ><i class="bi bi-arrow-right"></i></span>',

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  });
});

AOS.init();

function myFunction(x) {
  x.classList.toggle("change");
}
