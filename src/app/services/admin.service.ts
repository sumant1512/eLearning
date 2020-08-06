import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http : HttpClient, private authService: AuthService) { }
   token = this.authService.getToken();
   
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.token,
  });
 


  
  
}
