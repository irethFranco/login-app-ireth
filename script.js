const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const correo = document.querySelector("#email").value;
  const contraseña = document.querySelector("#password").value;

  if (correo === "" || contraseña === "") {
    alert("Todos los campos son obligatorios.");
    return;
  }

  alert("Inicio de sesión validado correctamente.");
});