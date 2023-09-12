import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shell' },
  { path: 'shell', component: ShellComponent, children: [{
    path: '', loadChildren: () => import('./components/shell/shell.module').then(m => m.ShellModule) 
  }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
