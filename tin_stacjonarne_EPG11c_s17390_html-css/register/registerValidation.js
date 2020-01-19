const form = document.getElementById('form');

const fieldName = document.getElementById('name');
const errorsName = document.getElementById('errors_name');
const errorsSummary = document.getElementById('errors_summary');
const errorsInfo = document.getElementById('errors_info');
const fieldSurname = document.getElementById('surname');
const errorsSurname = document.getElementById('errors_surname');
const fieldBirthday = document.getElementById('birthday');
const errorsBirthday = document.getElementById('errors_birthday');
const fieldPesel = document.getElementById('pesel');
const errorsPesel = document.getElementById('errors_pesel');
const fieldEmail = document.getElementById('email');
const errorsEmail = document.getElementById('errors_email');
const fieldPassword = document.getElementById('password');
const errorsPassword = document.getElementById('errors_password');
const fieldRPassword = document.getElementById('rpassword');
const errorsRPassword = document.getElementById('errors_rpassword');

var errorMessages = {
    name: "Pole 'Imię' jest wymagane",
    surname: "Pole 'Nazwisko' jest wymagane",
    birthday: "Pole 'Data urodzenia' jest błędne",
    birthday_empty: "Pole 'Data urodzenia' nie moze być niewypełnione",
    pesel_wymagane: "Pole 'PESEL' jest wymagane",
    pesel_blad: "Nieprawidłowy nr PESEL",
    email_wymagane: "Pole 'Adres e-mail' jest wymagane",
    email_blad: "Adres e-mail nieprawidłowy",
    password: "Pole 'Hasło' jest wymagane",
    rpassword: "Pole 'Powtórz hasło' jest wymagane",
    rpassword_same: "Pole 'Powtórz hasło' musi być takie same jak pole 'Hasło'"
}


form.addEventListener('submit', (e) => {
    let messages = [];
    var today = new Date();
    var birthday = Number(fieldBirthday.value.substring(0, 4));
    //console.log(today.getFullYear());
    //console.log(birthday);
    //console.log(today.getFullYear()-birthday);

    //imię
    if (fieldName.value === '' || fieldName.value == null) {
        messages.push(errorMessages['name']);
        errorsName.innerHTML = errorMessages['name'];
        fieldName.classList.add("errors-input");
    }
    else {
        errorsName.innerHTML = "";
        fieldName.className = "";
        fieldName.classList.toggle("input-text");
        errorsName.classList.remove("errors-input");
    }

    //nazwisko
    if (fieldSurname.value === '' || fieldSurname.value == null) {
        messages.push(errorMessages['surname']);
        errorsSurname.innerHTML = errorMessages['surname'];
        fieldSurname.classList.add("errors-input");
    }
    else {
        errorsSurname.innerHTML = "";
        fieldSurname.className = "";
        fieldSurname.classList.toggle("input-text");
        errorsSurname.classList.remove("errors-input");
    }

    //data urodzenia, rocznikowo 18 lat
    if (birthday === 0) {
        messages.push(errorMessages['birthday_empty']);
        errorsBirthday.innerHTML = errorMessages['birthday_empty'];
        fieldBirthday.classList.add("errors-input");
    }
    else if ((today.getFullYear() - birthday) < 18) {
        messages.push(errorMessages['birthday']);
        errorsBirthday.innerHTML = errorMessages['birthday'];
        fieldBirthday.classList.add("errors-input");
    }
    else {
        errorsBirthday.innerHTML = "";
        fieldBirthday.className = "";
        errorsBirthday.classList.remove("errors-input");
    }

    //pesel
    if (fieldPesel.value === '' || fieldPesel.value == null) {
        messages.push(errorMessages['pesel_wymagane']);
        errorsPesel.innerHTML = errorMessages['pesel_wymagane'];
        fieldPesel.classList.add("errors-input");
    }
    else if (fieldPesel.value !== '' && fieldPesel.value != null && fieldPesel.value.length != 11) {
        messages.push(errorMessages['pesel_blad']);
        errorsPesel.innerHTML = errorMessages['pesel_blad'];
        fieldPesel.classList.add("errors-input");
    }
    else {
        errorsPesel.innerHTML = "";
        fieldPesel.className = "";
        fieldPesel.classList.toggle("input-text");
        errorsPesel.classList.remove("errors-input");
    }

    //email
    if (fieldEmail.value === '' || fieldEmail.value == null) {
        messages.push(errorMessages['email_wymagane']);
        errorsEmail.innerHTML = errorMessages['email_wymagane'];
        fieldEmail.classList.add("errors-input");
    }
    else {
        errorsEmail.innerHTML = "";
        fieldEmail.className = "";
        fieldEmail.classList.toggle("input-text");
        errorsEmail.classList.remove("errors-input");
    }

    if (!validateEmail(fieldEmail.value)) {
        messages.push(errorMessages['email_blad']);
        errorsEmail.innerHTML = errorMessages['email_blad'];
        fieldEmail.classList.add("errors-input");
    }
    else {
        errorsEmail.innerHTML = "";
        fieldEmail.className = "";
        fieldEmail.classList.toggle("input-text");
        errorsEmail.classList.remove("errors-input");
    }

    //hasło
    if (fieldPassword.value === '' || fieldPassword == null) {
        messages.push(errorMessages['password']);
        errorsPassword.innerHTML = errorMessages['password'];
        fieldPassword.classList.add("errors-input");
    }
    else {
        errorsPassword.innerHTML = "";
        fieldPassword.className = "";
        fieldPassword.classList.toggle("input-text");
        errorsPassword.classList.remove("errors-input");
    }

    //re-hasło
    if (fieldRPassword.value === '' || fieldRPassword == null) {
        messages.push(errorMessages['rpassword']);
        errorsRPassword.innerHTML = errorMessages['rpassword'];
        fieldRPassword.classList.add("errors-input");
    }
    else if (fieldRPassword.value !== fieldPassword.value) {
        messages.push(errorMessages['rpassword_same']);
        errorsRPassword.innerHTML = errorMessages['rpassword_same'];
        fieldRPassword.classList.add("errors-input");
    }
    else {
        errorsRPassword.innerHTML = "";
        fieldRPassword.className = "";
        fieldRPassword.classList.toggle("input-text");
        errorsRPassword.classList.remove("errors-input");
    }

    //całość
    if (messages.length > 0) {
        e.preventDefault();
        errorsSummary.innerHTML = messages.join(', ');
        errorsInfo.innerHTML = "Formularz zawiera błędy!";
    }

});

//funkcja walidująca email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}