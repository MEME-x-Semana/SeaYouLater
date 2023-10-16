
// Barra de navegación

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const nextNav = document.querySelector(".slider-nav-next");
    const prevNav = document.querySelector(".slider-nav-prev");
    const interval = 2000;
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




//Menu

const menu = document.getElementById("menu");
const menuIcon = document.querySelector(
  'img[src="./assets/img/icon _menu.svg"]'
);
const closeIcon = document.querySelector(".icon_close");

menuIcon.addEventListener("click", () => {
  toggleMenu();
});

closeIcon.addEventListener("click", () => {
  closeMenu();
});

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    menu.style.display = "none";
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

function closeMenu() {
  menu.style.display = "none";
  document.removeEventListener("click", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    closeMenu();
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
