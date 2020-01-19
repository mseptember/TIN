const form = document.getElementById('form');

const errorsSummary = document.getElementById('errors_summary');
const errorsInfo = document.getElementById('errors_info');
const fieldName = document.getElementById('name');
const errorsName = document.getElementById('errors_name');
const fieldCity = document.getElementById('city');
const errorsCity = document.getElementById('errors_city');

var errorMessages = {
    name: "Pole 'Nazwa mieszkania' jest wymagane",
    city: "Pole 'Miasto' jest wymagane"
}


form.addEventListener('submit', (e) => {
    let messages = [];

    if (fieldName.value === '' || fieldName.value == null) {
        messages.push(errorMessages['name']);
        errorsName.innerHTML = errorMessages['name'];
    }

    if (fieldCity.value === '' || fieldCity == null) {
        messages.push(errorMessages['city']);
        errorsCity.innerHTML = errorMessages['city'];
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorsSummary.innerHTML = messages.join(', ');
        errorsInfo.innerHTML = "Formularz zawiera błędy!";
        fieldName.className = "errors-input";
        fieldCity.className = "errors-input";
    }
    else {
        e.preventDefault();
        errorsSummary.innerHTML = "";
        errorsInfo.innerHTML = ""
        errorsName.innerHTML = ""
        errorsCity.innerHTML = "";
        fieldName.className = "";
        fieldCity.className = "";
    }
    
});