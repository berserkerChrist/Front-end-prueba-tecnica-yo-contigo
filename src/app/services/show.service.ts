import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  url: string = 'https://b213-187-201-133-233.ngrok-free.app/api/'

  getAllUsers(){
    return this.http.get(this.url + 'get-users', { headers: new HttpHeaders({"ngrok-skip-browser-warning": "latest"}) });
  }

  deleteUser(id: number){
    return this.http.delete(this.url + 'delete-user/' + id);
  }

  editUser(id: number, payload: any){
    return this.http.put(this.url + 'update-user/id=' + id, payload)
  }

}
