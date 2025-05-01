const login = document.getElementById("login");
const user = document.querySelector("#user")
const password = document.querySelector("#password")
const submitButton = document.querySelector("#submit")

function validateForm() {
    if (user.value === "" || password.value === "") {
        Swal.fire({
            title: "Error",
            text: "Por favor completa todos los campos",
            icon: "error",
        })
    } else if (user.value.length < 5) {
        Swal.fire({
            title: "Error",
            text: "El nombre de usuario debe tener al menos 5 caracteres",
            icon: "error",
        })
    } else if (password.value.length < 8) {
        Swal.fire({
            title: "Error",
            text: "La contraseña debe tener al menos 8 caracteres",
            icon: "error",
        })
    }
    else {
        Swal.fire({
            title: "Éxito",
            text: "Formulario enviado con éxito",
            icon: "success",
        })
        login.reset()
}}


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm()})