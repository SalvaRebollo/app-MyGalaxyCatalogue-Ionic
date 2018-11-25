import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private alertController: AlertController,
    private navController: NavController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.todoService.getTodos().then(data => this.todos = data);
  }

  async deleteDialog(producto: string, id: number) {

    const alert = await this.alertController.create({
      header: 'Borrar producto',
      message: '¿Quiere eliminar el producto <strong>' + producto + '</strong> del catálogo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.todoService.deleteTodo(id).then(
              () => this.todoService.getTodos().then(
                data => this.todos = data)
            );
          }
        }
      ]
    });
    await alert.present();
  }
  editTodo(id: number) {
    this.navController.navigateForward('/edit/' + id);
  }

}
