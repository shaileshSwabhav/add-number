import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
  })
  export class NumbersService {

    private baseUrl = "http://localhost:8080"
    constructor(private http: HttpClient){
        
    }

    addTwoNumbersService(data:any):Observable<any> {
        return this.http.post(`${this.baseUrl}/add`,data);
    }
  }