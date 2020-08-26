import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HOST } from "config.constants";

@Injectable({
  providedIn: 'root'
})
export class SamplepapertransformService {

   constructor(private http: HttpClient) { }
  
   getTransformedSamplePaper(): Observable<any[]> {   
    return this.http.get<any[]>(HOST + "getTransformedSamplePaper", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }), 
    });
  } 
}
