/* #Blog Posts Slider
  ======================================================= */
new Swiper('.blog-single-posts .swiper-container', {
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: '.blog-single-posts .swiper-pagination',
  },
  navigation: {
    nextEl: '.blog-single-posts .swiper-button-next',
    prevEl: '.blog-single-posts .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

/* #Img Slider
======================================================= */
new Swiper('.img-slider .swiper-container', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.img-slider .swiper-pagination',
  },
});