import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormtableComponent } from './formtable/formtable.component';

// { path: 'form-table', component: FormtableComponent }
const routes: Routes = [
  { path: 'form', component: FormtableComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
