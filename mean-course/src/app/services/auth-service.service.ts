import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/auth-data'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password}
  }
}
