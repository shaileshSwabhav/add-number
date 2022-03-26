import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNumberService {

  private baseUrl = "anmol/backend/"

  constructor(private http: HttpClient) { }

  addTwoNumbersService(data:any):Observable<any> {
    return this.http.post(`${this.baseUrl}/Calculator`,data);
  }
}
