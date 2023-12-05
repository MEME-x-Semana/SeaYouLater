// Barra de navegación

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector("#carouselExample");
  const nextNav = document.querySelector(".carousel-control-next");
  const prevNav = document.querySelector(".carousel-control-prev");
  const interval = 3000;
  let slideTimer;

  function startSlideTimer() {
    slideTimer = setInterval(() => {
      nextNav.click();
    }, interval);
  }

  function stopSlideTimer() {
    clearInterval(slideTimer);
  }

  startSlideTimer();

  sliderContainer.addEventListener("mouseover", stopSlideTimer);

  sliderContainer.addEventListener("mouseout", startSlideTimer);
});


//Menu Desplegable

const menu = document.getElementById("menu2");
const menuIcon = document.querySelector(
  'img[alt$="logo menu hamburguesa"]'
);
const closeIcon = document.querySelector(".icon_close");

menuIcon.addEventListener("click", () => {
  toggleMenu();
});

closeIcon.addEventListener("click", () => {
  closeMenu();
});

function toggleMenu() {
  if (window.innerWidth <= 768) {
    if (menu.style.display === "none") {
      menu.style.display = "block";
      menuIcon.style.display = "none";
    } else {
      menu.style.display = "none";
      menuIcon.style.display = "block";
    }
  }
}

function closeMenu() {
  if (window.innerWidth <= 768) {
    menu.style.display = "none";
    menuIcon.style.display = "block";
  }
}


//Formulario de envío // Llamado de API

const form = document.getElementById("contact-form");

const spinner = document.querySelector(".spinner-hidden");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  // Muestra el spinner
  spinner.classList.remove("spinner-hidden");

  //Envia el formulario
  fetch("https://formsubmit.co/ajax/fabrib40@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name.value,
      from: form.email.value,
      message: form.message.value,
    }),
  })
    //Espera la respuesta del formulario
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .finally(() => {
      // Limpia el formulario
      form.reset();
      // Oculta el spinner después de que la solicitud se complete
      spinner.classList.add("spinner-hidden");
    });
}


// Cambio de color de navbar

window.addEventListener('scroll', function() {
  if (window.innerWidth >= 768) {
    const navbar = document.querySelector('.navbar2');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});




// Vinculación Formulario con Aplicación

document.getElementById('busqueda_form').addEventListener('submit', function(event) {
  // Prevenir el comportamiento de envío de formulario predeterminado
  event.preventDefault();

  // Recoger los datos del formulario
  var destino = document.getElementById('destino').value;
  var salida = document.getElementById('puerto-salida').value;
  var compania = document.getElementById('compania').value;

  // Enviar una solicitud HTTP a tu API
  fetch('http://127.0.0.1:8000/api/reservas/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      destino: destino,
      salida: salida,
      compania: compania,
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Manejar la respuesta de la API
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
