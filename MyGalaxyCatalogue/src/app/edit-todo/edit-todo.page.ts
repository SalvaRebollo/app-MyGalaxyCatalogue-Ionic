import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {

  todo: Todo;
  edit = false;

  mi_variable1 = 'medium';
  mi_variable2 = 'medium';
  mi_variable3 = 'medium';

  private stars = 0;
  private star1 = true;
  private star2 = true;
  private star3 = true;

  image: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private navController: NavController,
    private camera: Camera) {

    this.todo = {
      id: this.todoService.todoCounter,
      image: this.image,
      producto: null,
      description: '',
      precio: null,
      category: '',
      stars: 1
    };
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.edit = true;
      this.todo = this.todoService.getTodoById(+id);
    }

    switch (this.todo.stars) {
      case 1:
        this.star1 = true;
        this.star2 = false;
        this.star3 = false;
        break;
      case 2:
        this.star1 = false;
        this.star2 = true;
        this.star3 = false;
        break;
      case 3:
        this.star1 = false;
        this.star2 = false;
        this.star3 = true;
        break;
      default:
    }
  }

  saveTodo(t: Todo) {
    if (this.edit) {
      this.todoService.saveTodo(this.todo).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    } else {
      this.todoService.newTodo(this.todo).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    }
  }

  setCategoria1(c: String) {
    this.todo.category = c;
    this.mi_variable1 = 'success';
    this.mi_variable2 = 'medium';
    this.mi_variable3 = 'medium';
  }

  setCategoria2(c: String) {
    this.todo.category = c;
    this.mi_variable1 = 'medium';
    this.mi_variable2 = 'success';
    this.mi_variable3 = 'medium';
  }

  setCategoria3(c: String) {
    this.todo.category = c;
    this.mi_variable1 = 'medium';
    this.mi_variable2 = 'medium';
    this.mi_variable3 = 'success';
  }

  setMuyDeteriorado1() {
    this.stars = 1;
    this.star1 = true;
    this.star2 = false;
    this.star3 = false;
    this.todo.stars = 1;
  }

  setUsado2() {
    this.stars = 2;
    this.star1 = false;
    this.star2 = true;
    this.star3 = false;
    this.todo.stars = 2;
  }

  setPerfecto3() {
    this.stars = 3;
    this.star1 = false;
    this.star2 = false;
    this.star3 = true;
    this.todo.stars = 3;
  }

  getPicture() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    };
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
        this.todo.image = this.image;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
