/* #Solutions Slider
  ======================================================= */
new Swiper('.services-certificates .swiper-container', {
  loop: true,
  slidesPerView: 4,
  pagination: {
    el: '.services-certificates .swiper-pagination',
  },
  navigation: {
    nextEl: '.services-certificates .swiper-button-next',
    prevEl: '.services-certificates .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
    }
  }
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

/* #Advantage Collapse
======================================================= */
const advantageCollapseTogglers = document.querySelectorAll('.advantage .collapse-toggler');

advantageCollapseTogglers.forEach((collapse) => {
  collapse.addEventListener('click', (e) => {
    e.preventDefault();
    collapse.classList.toggle('active');
    collapse.parentNode.querySelector('.collapse').classList.toggle('active');
  });
});

/* #FAQ'S Collapse
  ======================================================= */
const collapseTogglers = document.querySelectorAll('.services-faqs .collapse-toggler');

collapseTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault();
    toggler.closest('.faq').classList.toggle('active');
  });
});