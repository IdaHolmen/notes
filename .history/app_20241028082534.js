// FETCHING ELEMENTS FROM THE DOM
const hamburgerButton = document.querySelector('.hamburger-button');
const exitButton = document.querySelector('.exit-button');
const defaultContainer = document.querySelector('.default-container');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// EVENT LISTENERS
hamburgerButton.addEventListener('click', ()=> {
  defaultContainer.style.display = 'none';
  hamburgerMenu.classList.add('is-active');
});

exitButton.addEventListener('click', ()=> {
  defaultContainer.style.display = 'flex';
  hamburgerMenu.classList.add('is-active');
});
