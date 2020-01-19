const form = document.getElementById('form');

const fieldEmail = document.getElementById('email');
const errorsEmail = document.getElementById('errors_email');
const errorsSummary = document.getElementById('errors_summary');
const errorsInfo = document.getElementById('errors_info');
const fieldPassword = document.getElementById('password');
const errorsPassword = document.getElementById('errors_password');

var errorMessages = {
    email: "Pole 'Login' jest wymagane",
    password: "Pole 'Hasło' jest wymagane"
}


form.addEventListener('submit', (e) => {
    let messages = [];

    if (fieldEmail.value === '' || fieldEmail.value == null) {
        messages.push(errorMessages['email']);
        errorsEmail.innerHTML = errorMessages['email'];
    }

    if (fieldPassword.value === '' || fieldPassword == null) {
        messages.push(errorMessages['password']);
        errorsPassword.innerHTML = errorMessages['password'];
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorsSummary.innerHTML = messages.join(', ');
        errorsInfo.innerHTML = "Formularz zawiera błędy!";
        fieldEmail.className = "errors-input";
        fieldPassword.className = "errors-input";
    }
    else {
        e.preventDefault();
        errorsSummary.innerHTML = "";
        errorsInfo.innerHTML = ""
        errorsFirstName.innerHTML = ""
        errorsPassword.innerHTML = "";
        fieldEmail.className = "";
        fieldPassword.className = "";
    }
    
});