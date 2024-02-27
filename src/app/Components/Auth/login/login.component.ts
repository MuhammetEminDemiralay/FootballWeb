import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { LocalstorageService } from 'src/app/Service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService : LocalstorageService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  loginForm: FormGroup;

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {
        this.localStorageService.setToken(response.data.token);
        
      })
    }
  }




}
