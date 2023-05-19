import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

function customEmailValidator(control: FormControl): { [key: string]: any } | null {
  // Regular expression to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValid = emailRegex.test(control.value);

  return isValid ? null : { invalidEmail: true };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,customEmailValidator]],
      password:['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if(this.loginForm.invalid){
      return;
    }
    console.log("Logged in successfully");
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
