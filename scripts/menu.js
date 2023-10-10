const menu = document.getElementById('menu');
const menuIcon = navbar.querySelector('img[src="./assets/img/icon _menu.svg"]');

menuIcon.addEventListener('click', () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
