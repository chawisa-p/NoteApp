import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CookieService {

  constructor() {

  }

  getCookie(name: string): string{
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  setCookie(name: string, val: string){
    const date = new Date();
    const value = val;
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
  }

}
