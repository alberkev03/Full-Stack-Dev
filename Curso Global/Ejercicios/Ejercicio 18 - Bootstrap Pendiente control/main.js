const password = document.querySelector('#password');
const userName = document.querySelector('#userEmail')
const userform = document.querySelector('#login')

userform.addEventListener('submit', (e) => {
    e.preventDefault();
    const userlenght = userName.value.length;
    if (userlenght == "") {
      userWrong.innerHTML = 'El campo usuario no puede estar vacio';
    }
    else if (userlenght < 5) {
        userWrong.innerHTML = 'El usuario debe tener al menos 5 caracteres';
    }
    else {
        userWrong.innerHTML = '';
        e.target.submit();
    }
})