import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentListComponent } from './departament-list/departament-list.component';

const routes: Routes = [
  {
    path:'',
    component:DepartamentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentRoutingModule { }
