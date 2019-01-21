import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'name-editor', component: NameEditorComponent },
  { path: 'form', component: FormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
