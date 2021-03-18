/* #Header
  ======================================================= */
// Dropdown Menu
const headerDropdowns = document.querySelectorAll('.header .dropdown');

headerDropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-toggler')) {
      e.preventDefault();

      if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
      } else {
        if (document.querySelector('.header .dropdown.active')) {
          document.querySelector('.header .dropdown.active').classList.remove('active');
        }
        dropdown.classList.add('active');
      }
    }
  });
});

document.addEventListener('click', (e) => {
  if (document.querySelector('.header .dropdown.active') && !e.target.closest('.header .dropdown')) {
    document.querySelector('.header .dropdown.active').classList.remove('active');
  }
});

// Hamburger
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');
const headerLinks = document.querySelector('.header-links');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

if (window.innerWidth < 1024) {
  headerLinks.style.display = 'none';
  setTimeout(() => {
    headerLinks.style.display = 'flex';
  }, 250);
}

/* #Footer
  ======================================================= */

// Dropdown Menu
const footerDropdowns = document.querySelectorAll('.footer .dropdown');

footerDropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-toggler')) {
      e.preventDefault();

      if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
      } else {
        if (document.querySelector('.footer .dropdown.active')) {
          document.querySelector('.footer .dropdown.active').classList.remove('active');
        }
        dropdown.classList.add('active');
      }
    }
  });
});