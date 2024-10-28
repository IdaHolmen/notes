// FETCHING ELEMENTS FROM THE DOM
const body = document.body;
const hamburgerButton = document.querySelector('.hamburger-button');
const exitButton = document.querySelector('.exit-button');
const defaultContainer = document.querySelector('.default-container');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggleModeSwitch = document.querySelector('.checkbox');
const svgIcons = document.querySelectorAll('.header-images');

// EVENT LISTENERS
hamburgerButton.addEventListener('click', ()=> {
  defaultContainer.style.display = 'none';
  hamburgerMenu.classList.add('is-active');
});

exitButton.addEventListener('click', ()=> {
  defaultContainer.style.display = 'flex';
  hamburgerMenu.classList.remove('is-active');
});

toggleModeSwitch.addEventListener('change', ()=> {
  body.classList.toggle('dark-mode');

  svgIcons.forEach(icon => {
    if (document.body.classList.contains('dark-mode')) {
        icon.style.filter = 'invert(100%)';
    } else {
        icon.style.filter = 'invert(0%)';
    }
});
});
