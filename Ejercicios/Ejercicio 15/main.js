const userName = document.querySelector('#user');
let userWrong = document.querySelector('#user-wrong');
const emal = document.querySelector('#email');
const password = document.querySelector('#password');

const userform = document.querySelector('#identification')
const sendform = document.querySelector('#submit-form');

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