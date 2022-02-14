import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNumberService {

  private baseUrl = "http://127.0.0.1:8080"

  constructor(private http: HttpClient) { }

  addTwoNumbersService(data:any):Observable<any> {
    return this.http.post(`${this.baseUrl}/add`,data);
  }
}
