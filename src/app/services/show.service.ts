import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:9000/api/get-users');
  }

  deleteUser(id: number){
    return this.http.delete('http://localhost:9000/api/delete-user/' + id);
  }

  editUser(id: number, payload: any){
    return this.http.put('http://localhost:9000/api/update-user/id=' + id, payload)
  }

}
