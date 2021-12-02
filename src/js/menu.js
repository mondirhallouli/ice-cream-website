const closeMenu = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.nav__menu-btn');
const body = document.querySelector('body');

mobileMenu.addEventListener('click', e => {
  e.stopPropagation();

  // close the mobile menu if the user clicks the close button or one of the items
  if (e.target.tagName === "A" ||
  e.target.tagName === "BUTTON" ||
  e.target.tagName === "IMG" ||
  e.target.tagName === "SPAN") {
    mobileMenu.classList.remove('active');
    body.style.overflowY = 'auto';
  };
});

// add the active class to the mobile menu box to bring to the user view
menuBtn.addEventListener('click', e => {
  e.stopPropagation();

  mobileMenu.classList.add('active');
  body.style.overflowY = 'hidden';
});