(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-19496861.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-19496861.js ***!
  \*****************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matchBreakpoint; });
var SIZE_TO_MEDIA = { xs: "(min-width: 0px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)" };
function matchBreakpoint(i, t) { if (!t)
    return !0; var n = SIZE_TO_MEDIA[t]; return i.matchMedia(n).matches; }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-b48a0e4c.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-b48a0e4c.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return present; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var lastId = 0;
function createOverlay(e, n) { var t = e.ownerDocument; connectListeners(t), Object.assign(e, n), e.classList.add("ion-page-invisible"); var i = lastId++; return e.overlayIndex = i, e.hasAttribute("id") || (e.id = "ion-overlay-" + i), getAppRoot(t).appendChild(e), t.body.addEventListener("keyup", function (e) { if ("Escape" === e.key) {
    var e_1 = getOverlay(t);
    e_1 && e_1.backdropDismiss && e_1.dismiss(null, BACKDROP);
} }), e.componentOnReady(); }
function connectListeners(e) { 0 === lastId && (lastId = 1, e.body.addEventListener("keyup", function (n) { if ("Escape" === n.key) {
    var n_1 = getOverlay(e);
    n_1 && !0 === n_1.backdropDismiss && n_1.dismiss("backdrop");
} })); }
function dismissOverlay(e, n, t, i, o) { var a = getOverlay(e, i, o); return a ? a.dismiss(n, t) : Promise.reject("overlay does not exist"); }
function getOverlays(e, n) { var t = Array.from(getAppRoot(e).children); return null == n ? t : (n = n.toUpperCase(), t.filter(function (e) { return e.tagName === n; })); }
function getOverlay(e, n, t) { var i = getOverlays(e, n); return null != t ? i.find(function (e) { return e.id === t; }) : null == t ? i[i.length - 1] : i.find(function (e) { return e.overlayIndex === t; }); }
function present(e, n, t, i, o) {
    return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (e.presented)
                    return [2 /*return*/];
                e.presented = !0, e.willPresent.emit();
                a = e.enterAnimation ? e.enterAnimation : e.config.get(n, "ios" === e.mode ? t : i);
                return [4 /*yield*/, overlayAnimation(e, a, e.el, o)];
            case 1:
                _a.sent(), e.didPresent.emit();
                return [2 /*return*/];
        }
    }); });
}
function dismiss(e, n, t, i, o, a, s) {
    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!e.presented)
                    return [2 /*return*/];
                e.presented = !1, e.willDismiss.emit({ data: n, role: t });
                r = e.leaveAnimation ? e.leaveAnimation : e.config.get(i, "ios" === e.mode ? o : a);
                return [4 /*yield*/, overlayAnimation(e, r, e.el, s)];
            case 1:
                _a.sent(), e.didDismiss.emit({ data: n, role: t }), e.el.remove();
                return [2 /*return*/];
        }
    }); });
}
function getAppRoot(e) { return e.querySelector("ion-app") || e.body; }
function overlayAnimation(e, n, t, i) {
    return __awaiter(this, void 0, void 0, function () { var o, a, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                e.animation && (e.animation.destroy(), e.animation = void 0), t.classList.remove("ion-page-invisible");
                o = t.shadowRoot || e.el;
                _a = e;
                return [4 /*yield*/, e.animationCtrl.create(n, o, i)];
            case 1:
                a = _a.animation = _b.sent();
                e.animation = a, e.animated || a.duration(0), e.keyboardClose && a.beforeAddWrite(function () { var e = t.ownerDocument.activeElement; e && e.matches("input, ion-input, ion-textarea") && e.blur(); });
                return [4 /*yield*/, a.playAsync()];
            case 2:
                _b.sent(), a.destroy(), e.animation = void 0;
                return [2 /*return*/];
        }
    }); });
}
function eventMethod(e, n) { var t; var i = new Promise(function (e) { return t = e; }); return onceEvent(e, n, function (e) { t(e.detail); }), i; }
function onceEvent(e, n, t) { var i = function (o) { e.removeEventListener(n, i), t(o); }; e.addEventListener(n, i); }
function isCancel(e) { return "cancel" === e || e === BACKDROP; }
var BACKDROP = "backdrop";



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(storage) {
        this.storage = storage;
        this.todos = [];
        this.star1 = [];
        this.star2 = [];
        this.star3 = [];
        this.category = [];
        this.todoCounter = 0;
        this.orderAsc = true;
    }
    TodoService.prototype.getTodos = function () {
        var _this = this;
        this.storage.get('this.todoCounter').then(function (data) { if (data) {
            _this.todoCounter = data;
        } });
        return this.storage.get('todos').then(function (data) {
            if (data) {
                _this.star3 = data.filter(function (t) { return t.stars === 3; }),
                    _this.star2 = data.filter(function (t) { return t.stars === 2; }),
                    _this.star1 = data.filter(function (t) { return t.stars === 1; });
                if (_this.orderAsc) {
                    _this.todos = _this.category.concat(_this.star1).concat(_this.star2).concat(_this.star3);
                }
                else {
                    _this.todos = _this.category.concat(_this.star3).concat(_this.star2).concat(_this.star1);
                }
                return _this.todos;
            }
        });
    };
    TodoService.prototype.saveTodo = function (t) {
        this.todos[this.todos.findIndex(function (todo) { return todo.id === t.id; })] = t;
        return this.storage.set('todos', this.todos);
    };
    TodoService.prototype.newTodo = function (t) {
        var _this = this;
        this.todos.push(t);
        this.todoCounter++;
        return this.storage.set('todos', this.todos).then(function () {
            return _this.storage.set('todoCounter', _this.todoCounter);
        }); // devolver promesa
    };
    TodoService.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (t) { return t.id !== id; });
        return this.storage.set('todos', this.todos);
    };
    TodoService.prototype.getTodoById = function (id) {
        return this.todos.find(function (t) { return t.id === id; });
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], TodoService);
    return TodoService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map