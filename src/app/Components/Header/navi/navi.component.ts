import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userName : string;

  ngOnInit(): void {
    this.loggedIn()
    this.getUser();
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  getUser(){
    let userModel= this.authService.getUser().userName.split(" ");
    this.userName= userModel[0];
  }

}
