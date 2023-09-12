import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from '../show-list/show-list.component';
import { AddFormComponent } from '../add-form/add-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'show' },
  { path: 'show', component: ShowListComponent },
  { path: 'add', component: AddFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
