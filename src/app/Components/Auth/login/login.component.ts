import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private localStorageService: LocalstorageService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  loginForm: FormGroup;

  createLoginForm() {

    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })

  }

  login() {
    let loginModel = Object.assign({}, this.loginForm.value)
    this.authService.login(loginModel).subscribe(response => {
      this.localStorageService.setToken(response.data.token);
      this.toastrService.success("Success", response.message)
      this.router.navigate(["home"])
    }, (error) => {
      this.toastrService.error(error.error)
    })
  }

}
