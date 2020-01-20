import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = document.getElementById('form');

  registerForm: FormGroup;
  errorsName;
  errorsSummary;
  errorsInfo;
  errorsSurname;
  errorsBirthday;
  errorsPesel;
  errorsEmail;
  errorsPassword;
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

    this.errorsName = document.getElementById('errors_name');
    this.errorsSurname = document.getElementById('errors_surname');
    this.errorsBirthday = document.getElementById('errors_birthday');
    this.errorsPesel = document.getElementById('errors_pesel');
    this.errorsEmail = document.getElementById('errors_email');
    this.errorsPassword = document.getElementById('errors_password');
    this.errorsRPassword = document.getElementById('errors_rpassword');
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {

    console.warn(this.registerForm.value);
  }

  buildForm() {
    this.registerForm = this.fb.group({
      fieldName: new FormControl('', Validators.required),
      fieldSurname: new FormControl('', Validators.required),
      fieldBirthday: new FormControl('', Validators.required),
      fieldPesel: new FormControl('', Validators.required),
      fieldEmail: new FormControl('', Validators.required),
      fieldPassword: new FormControl('', Validators.required),
      fieldRPassword: new FormControl('', Validators.required),
    })
  }

  //funkcja walidująca email
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
