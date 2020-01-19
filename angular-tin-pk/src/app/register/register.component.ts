import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  form = document.getElementById('form');

  fieldName;
  errorsName;
  errorsSummary;
  errorsInfo;
  fieldSurname;
  errorsSurname;
  fieldBirthday;
  errorsBirthday;
  fieldPesel;
  errorsPesel;
  fieldEmail;
  errorsEmail;
  fieldPassword;
  errorsPassword;
  fieldRPassword;
  errorsRPassword;
   
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

  ngAfterViewInit() {

    this.fieldName = (<HTMLInputElement>document.getElementById('name')).value;
    this.errorsName = document.getElementById('errors_name');
    this.errorsSummary = document.getElementById('errors_summary');
    this.errorsInfo = document.getElementById('errors_info');
    this.fieldSurname = (<HTMLInputElement>document.getElementById('surname')).value;
    this.errorsSurname = document.getElementById('errors_surname');
    this.fieldBirthday = (<HTMLInputElement>document.getElementById('birthday')).value;
    this.errorsBirthday = document.getElementById('errors_birthday');
    this.fieldPesel = (<HTMLInputElement>document.getElementById('pesel')).value;
    this.errorsPesel = document.getElementById('errors_pesel');
    this.fieldEmail = (<HTMLInputElement>document.getElementById('email')).value;
    this.errorsEmail = document.getElementById('errors_email');
    this.fieldPassword = (<HTMLInputElement>document.getElementById('password')).value;
    this.errorsPassword = document.getElementById('errors_password');
    this.fieldRPassword = (<HTMLInputElement>document.getElementById('rpassword')).value;
    this.errorsRPassword = document.getElementById('errors_rpassword');
   }

  ngOnInit() {

  }

  validateForm() {
    this.form.addEventListener('submit', (e) => {
      let messages = [];
      var today = new Date();
      var birthday = Number(this.fieldBirthday.substring(0, 4));

      //imię
      if (this.fieldName === '' || this.fieldName == null) {
        messages.push(this.errorMessages['name']);
        this.errorsName.innerHTML = this.errorMessages['name'];
        //this.fieldName.classList.add("errors-input");
      }
      else {
        this.errorsName.innerHTML = "";
        //this.fieldName.className = "";
        //this.fieldName.classList.toggle("input-text");
        this.errorsName.classList.remove("errors-input");
      }

      //nazwisko
      if (this.fieldSurname === '' || this.fieldSurname == null) {
        messages.push(this.errorMessages['surname']);
        this.errorsSurname.innerHTML = this.errorMessages['surname'];
        //this.fieldSurname.classList.add("errors-input");
      }
      else {
        this.errorsSurname.innerHTML = "";
        //this.fieldSurname.className = "";
        //this.fieldSurname.classList.toggle("input-text");
        this.errorsSurname.classList.remove("errors-input");
      }

      //data urodzenia, rocznikowo 18 lat
      if (birthday === 0) {
        messages.push(this.errorMessages['birthday_empty']);
        this.errorsBirthday.innerHTML = this.errorMessages['birthday_empty'];
        //this.fieldBirthday.classList.add("errors-input");
      }
      else if ((today.getFullYear() - birthday) < 18) {
        messages.push(this.errorMessages['birthday']);
        this.errorsBirthday.innerHTML = this.errorMessages['birthday'];
        //this.fieldBirthday.classList.add("errors-input");
      }
      else {
        this.errorsBirthday.innerHTML = "";
        //this.fieldBirthday.className = "";
        this.errorsBirthday.classList.remove("errors-input");
      }

      //pesel
      if (this.fieldPesel === '' || this.fieldPesel == null) {
        messages.push(this.errorMessages['pesel_wymagane']);
        this.errorsPesel.innerHTML = this.errorMessages['pesel_wymagane'];
        //this.fieldPesel.classList.add("errors-input");
      }
      else if (this.fieldPesel !== '' && this.fieldPesel != null && this.fieldPesel.length != 11) {
        messages.push(this.errorMessages['pesel_blad']);
        this.errorsPesel.innerHTML = this.errorMessages['pesel_blad'];
        //this.fieldPesel.classList.add("errors-input");
      }
      else {
        this.errorsPesel.innerHTML = "";
        //this.fieldPesel.className = "";
        //this.fieldPesel.classList.toggle("input-text");
        this.errorsPesel.classList.remove("errors-input");
      }

      //email
      if (this.fieldEmail === '' || this.fieldEmail == null) {
        messages.push(this.errorMessages['email_wymagane']);
        this.errorsEmail.innerHTML = this.errorMessages['email_wymagane'];
        //this.fieldEmail.classList.add("errors-input");
      }
      else {
        this.errorsEmail.innerHTML = "";
        //this.fieldEmail.className = "";
        //this.fieldEmail.classList.toggle("input-text");
        this.errorsEmail.classList.remove("errors-input");
      }

      if (!this.validateEmail(this.fieldEmail)) {
        messages.push(this.errorMessages['email_blad']);
        this.errorsEmail.innerHTML = this.errorMessages['email_blad'];
        //this.fieldEmail.classList.add("errors-input");
      }
      else {
        this.errorsEmail.innerHTML = "";
        //this.fieldEmail.className = "";
        //this.fieldEmail.classList.toggle("input-text");
        this.errorsEmail.classList.remove("errors-input");
      }

      //hasło
      if (this.fieldPassword === '' || this.fieldPassword == null) {
        messages.push(this.errorMessages['password']);
        this.errorsPassword.innerHTML = this.errorMessages['password'];
        //this.fieldPassword.classList.add("errors-input");
      }
      else {
        this.errorsPassword.innerHTML = "";
        //this.fieldPassword.className = "";
        //this.fieldPassword.classList.toggle("input-text");
        this.errorsPassword.classList.remove("errors-input");
      }

      //re-hasło
      if (this.fieldRPassword === '' || this.fieldRPassword == null) {
        messages.push(this.errorMessages['rpassword']);
        this.errorsRPassword.innerHTML = this.errorMessages['rpassword'];
        //this.fieldRPassword.classList.add("errors-input");
      }
      else if (this.fieldRPassword !== this.fieldPassword) {
        messages.push(this.errorMessages['rpassword_same']);
        this.errorsRPassword.innerHTML = this.errorMessages['rpassword_same'];
        //this.fieldRPassword.classList.add("errors-input");
      }
      else {
        this.errorsRPassword.innerHTML = "";
        //this.fieldRPassword.className = "";
        //this.fieldRPassword.classList.toggle("input-text");
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
