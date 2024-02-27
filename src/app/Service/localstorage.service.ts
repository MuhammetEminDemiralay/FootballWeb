import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("_token", token);
  }

  getToken(): any {
    localStorage.getItem("_token");
  }

  removeToken() {
    localStorage.removeItem("_token");
  }
}
