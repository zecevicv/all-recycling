/* #Banner Slider
  ======================================================= */
new Swiper('.banner-slider .swiper-container', {
  loop: true,
  pagination: {
    el: '.banner-slider .swiper-pagination',
  },
});

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

/* #Blog Posts Slider
  ======================================================= */
new Swiper('.blog-posts .swiper-container', {
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: '.blog-posts .swiper-pagination',
  },
  navigation: {
    nextEl: '.blog-posts .swiper-button-next',
    prevEl: '.blog-posts .swiper-button-prev',
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

/* #Solutions Slider
  ======================================================= */
new Swiper('.home-solutions .swiper-container', {
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: '.home-solutions .swiper-pagination',
  },
  navigation: {
    nextEl: '.home-solutions .swiper-button-next',
    prevEl: '.home-solutions .swiper-button-prev',
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

/* #Advantage Collapse
  ======================================================= */
const advantageCollapseTogglers = document.querySelectorAll('.home-advantage .collapse-toggler');

advantageCollapseTogglers.forEach((collapse) => {
  collapse.addEventListener('click', (e) => {
    e.preventDefault();
    collapse.classList.toggle('active');
    collapse.parentNode.querySelector('.collapse').classList.toggle('active');
  });
});