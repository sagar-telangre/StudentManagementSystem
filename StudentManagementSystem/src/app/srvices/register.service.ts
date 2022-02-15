import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  public addUser(Register: any) {
    return this.http.post(`${baseUrl}/register/`, Register);
  }



}
