import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { LocalstorageService } from 'src/app/Service/localstorage.service';
import { CustomValidator } from 'src/app/Validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalstorageService
  ) {

  }

  ngOnInit(): void {
    this.createRegisterForm();
    this.password();
  }

  registerForm: FormGroup;
  passwordSelector: string;

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15), CustomValidator.passwordValidator]]
    })
  }

  register() {
    let registerModel = Object.assign({}, this.registerForm.value);
    this.authService.register(registerModel).subscribe(response => {
    })
  }

  password() {
    this.registerForm.get('password').valueChanges.subscribe(res => {
      (res.length > 5 && res.length <= 9) ? this.passwordSelector = "easy" :
        (res.length > 9 && res.length <= 12) ? this.passwordSelector = "medium" :
          (res.length > 12 && res.length <= 15) ? this.passwordSelector = "strong" :
            this.passwordSelector = "outside";
    })
  }

}
