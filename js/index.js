// create all to be used variables
const humberger = document.querySelector('.humberger');
const headerLinks = document.querySelector('.header-links');
const headerLogo = document.querySelector('.animate-logo');
const blur = document.querySelector('.blur-effect');
const htmlElement = document.documentElement;

// chevron images
const chevronImages = document.querySelectorAll('.nav-menu li img');
const navMenuLinks = document.querySelectorAll('.nav-menu li a');

// add event on humberger menu
humberger.addEventListener('click', () => {
  toggleActions();
});

// add event listener on the chevron images in the nav-menu
chevronImages.forEach((chevron) => {
  chevron.addEventListener('click', () => {
    window.location.href = `${
      chevron.id === 'forAbout'
        ? '#about'
        : chevron.id === 'forContact'
        ? '#contact'
        : chevron.id === 'forPortfolio'
        ? '#portfolio'
        : ''
    }`;

    // remove overflow hidden on the html by toggling the active class

    toggleActions();
  });
});

// add event listener on the anchor tags inside nav menu
navMenuLinks.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    toggleActions();
  });
});

function toggleActions() {
  htmlElement.classList.toggle('active');
  humberger.classList.toggle('active');
  headerLinks.classList.toggle('active');
  headerLogo.classList.toggle('active');
  blur.classList.toggle('active');
}
