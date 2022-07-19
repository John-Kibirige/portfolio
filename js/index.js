// create all to be used variables
const humberger = document.querySelector('.humberger');
const headerLinks = document.querySelector('.header-links');
const headerLogo = document.querySelector('.animate-logo');
const blur = document.querySelector('.blur-effect');

humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  headerLinks.classList.toggle('active');
  headerLogo.classList.toggle('active');
  blur.classList.toggle('active');
  document.documentElement.classList.toggle('active');
});
