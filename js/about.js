/* #Clients Slider
  ======================================================= */
  new Swiper('.clients .swiper-container', {
    loop: true,
    pagination: {
      el: '.clients .swiper-pagination',
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        slidesPerColumnFill: 'row',
        loop: false
      },
      1024: {
        slidesPerView: 6,
        slidesPerColumn: 1
      }
    }
  });