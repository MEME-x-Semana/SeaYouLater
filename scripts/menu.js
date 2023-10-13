const menu = document.getElementById('menu');
const menuIcon = document.querySelector('img[src="./assets/img/icon _menu.svg"]');
const closeIcon = document.querySelector('.icon_close');

menuIcon.addEventListener('click', () => {
  toggleMenu();
});

closeIcon.addEventListener('click', () => {
  closeMenu();
});

function toggleMenu() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    document.addEventListener('click', closeMenuOnClickOutside);
  } else {
    menu.style.display = 'none';
    document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function closeMenu() {
  menu.style.display = 'none';
  document.removeEventListener('click', closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    closeMenu();
  }
}