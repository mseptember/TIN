import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = document.getElementById('form');

  fieldEmail = document.getElementById('email');
  errorsEmail = document.getElementById('errors_email');
  errorsSummary = document.getElementById('errors_summary');
  errorsInfo = document.getElementById('errors_info');
  fieldPassword = document.getElementById('password');
  errorsPassword = document.getElementById('errors_password');

  errorMessages = {
    email: "Pole 'Login' jest wymagane",
    password: "Pole 'Hasło' jest wymagane"
  }

  constructor() { }

  ngOnInit() {

  }

  validateForm() {

    this.form.addEventListener('submit', (e) => {
      let messages = [];

      if (this.fieldEmail.nodeValue === '' || this.fieldEmail.nodeValue == null) {
        messages.push(this.errorMessages['email']);
        this.errorsEmail.innerHTML = this.errorMessages['email'];
      }

      if (this.fieldPassword.nodeValue === '' || this.fieldPassword == null) {
        messages.push(this.errorMessages['password']);
        this.errorsPassword.innerHTML = this.errorMessages['password'];
      }

      if (messages.length > 0) {
        e.preventDefault();
        this.errorsSummary.innerHTML = messages.join(', ');
        this.errorsInfo.innerHTML = "Formularz zawiera błędy!";
        this.fieldEmail.className = "errors-input";
        this.fieldPassword.className = "errors-input";
      }
      else {
        e.preventDefault();
        this.errorsSummary.innerHTML = "";
        this.errorsInfo.innerHTML = ""
        //this.errorsFirstName.innerHTML = ""
        this.errorsPassword.innerHTML = "";
        this.fieldEmail.className = "";
        this.fieldPassword.className = "";
      }

    });
  }
}
