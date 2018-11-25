(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-todo-edit-todo-module"],{

/***/ "./src/app/edit-todo/edit-todo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-todo/edit-todo.module.ts ***!
  \***********************************************/
/*! exports provided: EditTodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoPageModule", function() { return EditTodoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _edit_todo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-todo.page */ "./src/app/edit-todo/edit-todo.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_todo_page__WEBPACK_IMPORTED_MODULE_5__["EditTodoPage"]
    }
];
var EditTodoPageModule = /** @class */ (function () {
    function EditTodoPageModule() {
    }
    EditTodoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_todo_page__WEBPACK_IMPORTED_MODULE_5__["EditTodoPage"]]
        })
    ], EditTodoPageModule);
    return EditTodoPageModule;
}());



/***/ }),

/***/ "./src/app/edit-todo/edit-todo.page.html":
/*!***********************************************!*\
  !*** ./src/app/edit-todo/edit-todo.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button href=\"/home\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title *ngIf=\"todo.producto !== null\">\n      <img style=\"vertical-align: middle;\" alt=\"logo\" height=\"40\" src=\"../../assets/logo.png\">\n      {{ todo.producto }}\n    </ion-title>\n\n    <ion-title *ngIf=\"todo.producto === null\">\n      <img style=\"vertical-align: middle;\" alt=\"logo\" height=\"40\" src=\"../../assets/logo.png\">\n      Añadir producto\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label position=\"floating\">Nombre del producto</ion-label>\n    <ion-input clearInput [(ngModel)]=\"todo.producto\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Descripción</ion-label>\n    <ion-textarea textarea clearInput [(ngModel)]=\"todo.description\"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Precio</ion-label>\n    <ion-input clearInput type=\"number\" [(ngModel)]=\"todo.precio\"></ion-input>\n  </ion-item>\n  <ion-item>\n    \n\n    <ion-button (click)=\"setCategoria1('Objetos')\" shape=\"round\" [color]=\"mi_variable1\">Objetos</ion-button>\n    <ion-button (click)=\"setCategoria2('Servicios')\" shape=\"round\" [color]=\"mi_variable2\">Servicios</ion-button>\n    <ion-button (click)=\"setCategoria3('Otros')\" shape=\"round\" [color]=\"mi_variable3\">Otros</ion-button>&nbsp;&nbsp;&nbsp;\n\n    \n\n    <ion-icon *ngIf=\"!star1\" name=\"close\" (click)=\"setMuyDeteriorado1()\"></ion-icon>\n    <ion-icon *ngIf=\"star1\" name=\"sad\" (click)=\"setMuyDeteriorado1()\"></ion-icon>\n    <ion-icon *ngIf=\"!star2\" name=\"close\" (click)=\"setUsado2()\"></ion-icon>\n    <ion-icon *ngIf=\"star2\" name=\"heart-half\" (click)=\"setUsado2()\"></ion-icon>\n    <ion-icon *ngIf=\"!star3\" name=\"close\" (click)=\"setPerfecto3()\"></ion-icon>\n    <ion-icon *ngIf=\"star3\" name=\"happy\" (click)=\"setPerfecto3()\"></ion-icon>\n\n  </ion-item>\n\n\n  <ion-button (click)=\"getPicture()\" color=\"tertiary\" expand=\"full\">\n    <ion-icon name=\"ios-image\"></ion-icon>&nbsp;\n    Subir imagen\n  </ion-button>\n  <img [src]=\"image\" *ngIf=\"image\" />\n\n\n\n\n\n\n  <ion-button *ngIf=\"(todo.precio !== null) && (todo.producto !== null)\" (click)=\"saveTodo(todo)\" style=\"color:green\" color=\"warning\" expand=\"full\">\n    \n      <ion-icon name=\"save\"></ion-icon>&nbsp; Guardar\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-todo/edit-todo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/edit-todo/edit-todo.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #A23C4B; }\n\nion-content {\n  background: -webkit-gradient(left top, #A23C4B, #ff9068);\n  background: linear-gradient(to bottom right, #A23C4B, #ff9068); }\n"

/***/ }),

/***/ "./src/app/edit-todo/edit-todo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-todo/edit-todo.page.ts ***!
  \*********************************************/
/*! exports provided: EditTodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoPage", function() { return EditTodoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTodoPage = /** @class */ (function () {
    function EditTodoPage(activatedRoute, todoService, navController, camera) {
        this.activatedRoute = activatedRoute;
        this.todoService = todoService;
        this.navController = navController;
        this.camera = camera;
        this.edit = false;
        this.mi_variable1 = 'medium';
        this.mi_variable2 = 'medium';
        this.mi_variable3 = 'medium';
        this.stars = 0;
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.image = null;
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
    EditTodoPage.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.paramMap.get('id');
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
    };
    EditTodoPage.prototype.saveTodo = function (t) {
        var _this = this;
        if (this.edit) {
            this.todoService.saveTodo(this.todo).then(function () { return _this.navController.goBack(true); }, function (error) { return console.error('Error al guardar: ' + error); });
        }
        else {
            this.todoService.newTodo(this.todo).then(function () { return _this.navController.goBack(true); }, function (error) { return console.error('Error al guardar: ' + error); });
        }
    };
    EditTodoPage.prototype.setCategoria1 = function (c) {
        this.todo.category = c;
        this.mi_variable1 = 'success';
        this.mi_variable2 = 'medium';
        this.mi_variable3 = 'medium';
    };
    EditTodoPage.prototype.setCategoria2 = function (c) {
        this.todo.category = c;
        this.mi_variable1 = 'medium';
        this.mi_variable2 = 'success';
        this.mi_variable3 = 'medium';
    };
    EditTodoPage.prototype.setCategoria3 = function (c) {
        this.todo.category = c;
        this.mi_variable1 = 'medium';
        this.mi_variable2 = 'medium';
        this.mi_variable3 = 'success';
    };
    EditTodoPage.prototype.setMuyDeteriorado1 = function () {
        this.stars = 1;
        this.star1 = true;
        this.star2 = false;
        this.star3 = false;
        this.todo.stars = 1;
    };
    EditTodoPage.prototype.setUsado2 = function () {
        this.stars = 2;
        this.star1 = false;
        this.star2 = true;
        this.star3 = false;
        this.todo.stars = 2;
    };
    EditTodoPage.prototype.setPerfecto3 = function () {
        this.stars = 3;
        this.star1 = false;
        this.star2 = false;
        this.star3 = true;
        this.todo.stars = 3;
    };
    EditTodoPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
            _this.todo.image = _this.image;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    EditTodoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-todo',
            template: __webpack_require__(/*! ./edit-todo.page.html */ "./src/app/edit-todo/edit-todo.page.html"),
            styles: [__webpack_require__(/*! ./edit-todo.page.scss */ "./src/app/edit-todo/edit-todo.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]])
    ], EditTodoPage);
    return EditTodoPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-todo-edit-todo-module.js.map