import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  addUser(payload: any){
    return this.http.post('http://localhost:9000/api/new-user', payload);
  }

}
