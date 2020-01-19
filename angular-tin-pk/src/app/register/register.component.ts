import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }



  form = document.getElementById('form');

  fieldName = document.getElementById('name');
  errorsName = document.getElementById('errors_name');
  errorsSummary = document.getElementById('errors_summary');
  errorsInfo = document.getElementById('errors_info');
  fieldSurname = document.getElementById('surname');
  errorsSurname = document.getElementById('errors_surname');
  fieldBirthday = document.getElementById('birthday');
  errorsBirthday = document.getElementById('errors_birthday');
  fieldPesel = document.getElementById('pesel');
  errorsPesel = document.getElementById('errors_pesel');
  fieldEmail = document.getElementById('email');
  errorsEmail = document.getElementById('errors_email');
  fieldPassword = document.getElementById('password');
  errorsPassword = document.getElementById('errors_password');
  fieldRPassword = document.getElementById('rpassword');
  errorsRPassword = document.getElementById('errors_rpassword');

  errorMessages = {
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

  ngOnInit() {

  }

  validateForm() {
    this.form.addEventListener('submit', (e) => {
      let messages = [];
      var today = new Date();
      var birthday = Number(this.fieldBirthday.value.substring(0, 4));

      //imię
      if (this.fieldName.value === '' || this.fieldName.value == null) {
        messages.push(this.errorMessages['name']);
        this.errorsName.innerHTML = this.errorMessages['name'];
        this.fieldName.classList.add("errors-input");
      }
      else {
        this.errorsName.innerHTML = "";
        this.fieldName.className = "";
        this.fieldName.classList.toggle("input-text");
        this.errorsName.classList.remove("errors-input");
      }

      //nazwisko
      if (this.fieldSurname.value === '' || this.fieldSurname.value == null) {
        messages.push(this.errorMessages['surname']);
        this.errorsSurname.innerHTML = this.errorMessages['surname'];
        this.fieldSurname.classList.add("errors-input");
      }
      else {
        this.errorsSurname.innerHTML = "";
        this.fieldSurname.className = "";
        this.fieldSurname.classList.toggle("input-text");
        this.errorsSurname.classList.remove("errors-input");
      }

      //data urodzenia, rocznikowo 18 lat
      if (birthday === 0) {
        messages.push(this.errorMessages['birthday_empty']);
        this.errorsBirthday.innerHTML = this.errorMessages['birthday_empty'];
        this.fieldBirthday.classList.add("errors-input");
      }
      else if ((today.getFullYear() - birthday) < 18) {
        messages.push(this.errorMessages['birthday']);
        this.errorsBirthday.innerHTML = this.errorMessages['birthday'];
        this.fieldBirthday.classList.add("errors-input");
      }
      else {
        this.errorsBirthday.innerHTML = "";
        this.fieldBirthday.className = "";
        this.errorsBirthday.classList.remove("errors-input");
      }

      //pesel
      if (this.fieldPesel.value === '' || this.fieldPesel.value == null) {
        messages.push(this.errorMessages['pesel_wymagane']);
        this.errorsPesel.innerHTML = this.errorMessages['pesel_wymagane'];
        this.fieldPesel.classList.add("errors-input");
      }
      else if (this.fieldPesel.value !== '' && this.fieldPesel.value != null && this.fieldPesel.value.length != 11) {
        messages.push(this.errorMessages['pesel_blad']);
        this.errorsPesel.innerHTML = this.errorMessages['pesel_blad'];
        this.fieldPesel.classList.add("errors-input");
      }
      else {
        this.errorsPesel.innerHTML = "";
        this.fieldPesel.className = "";
        this.fieldPesel.classList.toggle("input-text");
        this.errorsPesel.classList.remove("errors-input");
      }

      //email
      if (this.fieldEmail.value === '' || this.fieldEmail.value == null) {
        messages.push(this.errorMessages['email_wymagane']);
        this.errorsEmail.innerHTML = this.errorMessages['email_wymagane'];
        this.fieldEmail.classList.add("errors-input");
      }
      else {
        this.errorsEmail.innerHTML = "";
        this.fieldEmail.className = "";
        this.fieldEmail.classList.toggle("input-text");
        this.errorsEmail.classList.remove("errors-input");
      }

      if (!this.validateEmail(this.fieldEmail.value)) {
        messages.push(this.errorMessages['email_blad']);
        this.errorsEmail.innerHTML = this.errorMessages['email_blad'];
        fthis.ieldEmail.classList.add("errors-input");
      }
      else {
        this.errorsEmail.innerHTML = "";
        this.fieldEmail.className = "";
        this.fieldEmail.classList.toggle("input-text");
        this.errorsEmail.classList.remove("errors-input");
      }

      //hasło
      if (this.fieldPassword.value === '' || this.fieldPassword == null) {
        messages.push(this.errorMessages['password']);
        this.errorsPassword.innerHTML = this.errorMessages['password'];
        this.fieldPassword.classList.add("errors-input");
      }
      else {
        this.errorsPassword.innerHTML = "";
        this.fieldPassword.className = "";
        this.fieldPassword.classList.toggle("input-text");
        this.errorsPassword.classList.remove("errors-input");
      }

      //re-hasło
      if (this.fieldRPassword.value === '' || this.fieldRPassword == null) {
        messages.push(this.errorMessages['rpassword']);
        this.errorsRPassword.innerHTML = this.errorMessages['rpassword'];
        this.fieldRPassword.classList.add("errors-input");
      }
      else if (this.fieldRPassword.value !== this.fieldPassword.value) {
        messages.push(this.errorMessages['rpassword_same']);
        this.errorsRPassword.innerHTML = this.errorMessages['rpassword_same'];
        this.fieldRPassword.classList.add("errors-input");
      }
      else {
        this.errorsRPassword.innerHTML = "";
        this.fieldRPassword.className = "";
        this.fieldRPassword.classList.toggle("input-text");
        this.errorsRPassword.classList.remove("errors-input");
      }

      //całość
      if (messages.length > 0) {
        e.preventDefault();
        this.errorsSummary.innerHTML = messages.join(', ');
        this.errorsInfo.innerHTML = "Formularz zawiera błędy!";
      }

    });
  }

//funkcja walidująca email
validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
}
