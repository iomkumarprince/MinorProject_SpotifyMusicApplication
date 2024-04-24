import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

   //baseUrl: string = "http://localhost:9000/api/v2/register";
  constructor(private http: HttpClient) { }

  signup(userregistration: any) {
    return this.http.post(`http://localhost:9000/api/v2/register`, userregistration)
  }
}

