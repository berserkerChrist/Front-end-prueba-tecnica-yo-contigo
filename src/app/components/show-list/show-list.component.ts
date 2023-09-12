import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  userList: Array<any> = [];
  editForm!: FormGroup;
  isVisible: boolean = false;
  idToEdit: number = 0;

  constructor(private showService: ShowService, private notifications: NotificationsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fillTable();
  }

  deleteUser(id: number){
    if(confirm('¿Quieres eliminar a este usuario?') == true){
      this.showService.deleteUser(id).subscribe({
        next: (result: any) => {
          console.log(result)
          this.notifications.showNotification('Usuario eliminado con exito', 'Cerrar', 'success');
          this.fillTable();
        },
        error: (err: any) => {
          console.log(err)
          this.notifications.showNotification('Ocurrió un error, inténtalo de nuevo', 'Cerrar', 'error');
        }
      })
    }
  }

  editUser(){
    const id = this.idToEdit;
    console.log({...this.editForm.value, id})
    this.showService.editUser(id, {...this.editForm.value}).subscribe({
        next: (result: any) => {
          console.log(result)
          this.notifications.showNotification('Usuario editado con exito', 'Cerrar', 'success');
          this.fillTable();
        },
        error: (err: any) => {
          console.log(err)
          this.notifications.showNotification('Ocurrió un error, inténtalo de nuevo', 'Cerrar', 'error');
        }
      })
    this.isVisible = false;
  }

  editRow(data: any){
    this.isVisible = true;
    this.idToEdit = data.id;
    this.editForm = this.fb.group({
      name: [data.name, Validators.required],
      age: [data.age, Validators.required],
      gender: [data.gender, Validators.required],
      email: [data.email, Validators.required]
    })

  }


  fillTable(){
    this.showService.getAllUsers().subscribe({
      next: (result: any) => {
        this.userList = result;
      },
      error: (err: any) => {
        console.log(err)
        this.notifications.showNotification('Ocurrio un error al extraer los datos', 'Cerrar', 'error');
      }
    })
  }

    get name(){
    return this.editForm.get('name')
  }

  get age(){
    return this.editForm.get('age')
  }

  get gender(){
    return this.editForm.get('gender')
  }

  get email(){
    return this.editForm.get('email')
  }

}
