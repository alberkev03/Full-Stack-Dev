let userFormDiv = document.querySelector('.user-div')
let userForm = document.querySelector('.user')

let userName = document.querySelector('#name')
let userSurname = document.querySelector('#surname')
let userAge = document.querySelector('#age')

let submitButton = document.querySelector('.submit')

/* Return values into JSON */
submitButton.addEventListener('click', () => {
    let userData = [userName.value, userSurname.value, userAge.value]
    let dataString = JSON.stringify(userData)
    console.log(dataString)
})







/* Dark Mode button */
const themeButton = document.querySelector('#theme-toggle')
let theme = localStorage.getItem('theme')

const enableDarkMode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark')
}
const disableDarkMode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
}

if (theme === 'dark') {
    enableDarkMode()
} else {
    disableDarkMode()
}

themeButton.addEventListener('click', () => {
    theme = localStorage.getItem('theme')
    if (theme == 'light') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})