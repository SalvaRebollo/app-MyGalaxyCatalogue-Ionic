import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'edit', loadChildren: './edit-todo/edit-todo.module#EditTodoPageModule' },
  { path: 'edit/:id', loadChildren: './edit-todo/edit-todo.module#EditTodoPageModule' },
  { path: 'bienvenida', loadChildren: './bienvenida/bienvenida.module#BienvenidaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
