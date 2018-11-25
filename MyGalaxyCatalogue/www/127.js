(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/tap-click.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/tap-click.js ***!
  \************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-42163827.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-42163827.js");

function startTapClick(t) { var e, o, n = 10 * -MOUSE_WAIT, i = 0, r = !1; var c = new WeakMap; function a(t) { n = Object(_chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t), u(t); } function s() { clearTimeout(o), e && (f(!1), e = void 0), r = !0; } function d(t) { e || (r = !1, E(getActivatableTarget(t), t)); } function u(t) { E(void 0, t), r && t.cancelable && t.preventDefault(); } function E(t, n) { if (t && t === e)
    return; clearTimeout(o), o = void 0; var _a = Object(_chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__["j"])(n), i = _a.x, r = _a.y; if (e) {
    if (c.has(e))
        throw new Error("internal error");
    e.classList.contains(ACTIVATED) || l(e, i, r), f(!0);
} if (t) {
    var e_1 = c.get(t);
    e_1 && (clearTimeout(e_1), c.delete(t)), t.classList.remove(ACTIVATED), o = setTimeout(function () { l(t, i, r), o = void 0; }, ADD_ACTIVATED_DEFERS);
} e = t; } function l(t, e, o) { i = Date.now(), t.classList.add(ACTIVATED); var n = getRippleEffect(t); n && n.addRipple && n.addRipple(e, o); } function f(t) { var o = e; if (!o)
    return; var n = CLEAR_STATE_DEFERS - Date.now() + i; if (t && n > 0) {
    var t_1 = setTimeout(function () { o.classList.remove(ACTIVATED), c.delete(o); }, CLEAR_STATE_DEFERS);
    c.set(o, t_1);
}
else
    o.classList.remove(ACTIVATED); } t.body.addEventListener("click", function (t) { r && (t.preventDefault(), t.stopPropagation()); }, !0), t.body.addEventListener("ionScrollStart", s), t.body.addEventListener("ionGestureCaptured", s), t.addEventListener("touchstart", function (t) { n = Object(_chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t), d(t); }, !0), t.addEventListener("touchcancel", a, !0), t.addEventListener("touchend", a, !0), t.addEventListener("mousedown", function (t) { var e = Object(_chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t) - MOUSE_WAIT; n < e && d(t); }, !0), t.addEventListener("mouseup", function (t) { var e = Object(_chunk_42163827_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t) - MOUSE_WAIT; n < e && u(t); }, !0); }
function getActivatableTarget(t) { if (!t.composedPath)
    return t.target.closest("[ion-activable]"); {
    var e = t.composedPath();
    for (var t_2 = 0; t_2 < e.length - 2; t_2++) {
        var o = e[t_2];
        if (o.hasAttribute && o.hasAttribute("ion-activable"))
            return o;
    }
} }
function getRippleEffect(t) { if (t.shadowRoot) {
    var e = t.shadowRoot.querySelector("ion-ripple-effect");
    if (e)
        return e;
} return t.querySelector("ion-ripple-effect"); }
var ACTIVATED = "activated", ADD_ACTIVATED_DEFERS = 200, CLEAR_STATE_DEFERS = 200, MOUSE_WAIT = 2500;



/***/ })

}]);
//# sourceMappingURL=127.js.map