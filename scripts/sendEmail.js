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
