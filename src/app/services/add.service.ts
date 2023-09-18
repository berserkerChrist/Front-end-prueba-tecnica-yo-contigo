import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  addUser(payload: any){
    return this.http.post('https://b213-187-201-133-233.ngrok-free.app/api/new-user', payload);
  }

}
