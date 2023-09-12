import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private formService: AddService, private notifications: NotificationsService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    })

  }

  onSubmit(){

    console.log(this.form.status)

    this.formService.addUser({...this.form.value}).subscribe({
      next: (response) => {
        console.log(response)
        this.notifications.showNotification('Usuario añadido con exito', 'Cerrar', 'success');
      },
      error: (err) => {
        console.log(err)
        this.notifications.showNotification('Ocurrió un error, inténtalo de nuevo', 'Cerrar', 'error');
      }
    })
  }

  get name(){
    return this.form.get('name')
  }

  get age(){
    return this.form.get('age')
  }

  get gender(){
    return this.form.get('gender')
  }

  get email(){
    return this.form.get('email')
  }

}
