import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CreateEditComponent } from './create-edit/create-edit.component';

const routes: Routes = [
  {path:'', component:ToDoListComponent, pathMatch:'full'},
  {path:'create', component:CreateEditComponent, pathMatch:'full'},
  {path:'edit/:id', component:CreateEditComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
