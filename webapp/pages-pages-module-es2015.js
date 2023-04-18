(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 1, vars: 0, template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "NUQi":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _root_store_auth_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root-store/auth/selectors/auth.selectors */ "pnCI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthGuard {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(next, state) {
        return this.checkStoreAuthentication().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((storeAuth) => {
            if (storeAuth) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
            }
            return localStorage.getItem('sessionToken') ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(storeOrApiAuth => {
            if (!storeOrApiAuth) {
                this.router.navigate(['/sign-in']);
                return false;
            }
            return true;
        }));
        return true;
    }
    checkStoreAuthentication() {
        return this.store.select(_root_store_auth_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsAuthenticated"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__["PagesRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__["PagesRoutingModule"]] }); })();


/***/ }),

/***/ "pnCI":
/*!*************************************************************!*\
  !*** ./src/app/root-store/auth/selectors/auth.selectors.ts ***!
  \*************************************************************/
/*! exports provided: getAuth, getIsAuthenticated, getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuthenticated", function() { return getIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectAuth = (state) => {
    return state;
};
const getAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuth, (state) => {
    return state.auth;
});
const getIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuth, (state) => {
    return state.auth.isAuthenticated;
});
const getCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuth, (state) => {
    if (state.auth && state.auth.data && state.auth.data.user) {
        return state.auth.data.user;
    }
});


/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/pages.component */ "8D7W");
/* harmony import */ var _app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/guards/auth.guard */ "NUQi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: 'boards', pathMatch: 'full' },
    {
        path: '',
        component: _app_pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            {
                path: 'sign-in',
                loadChildren: () => __webpack_require__.e(/*! import() | sign-in-sign-in-module */ "sign-in-sign-in-module").then(__webpack_require__.bind(null, /*! ./sign-in/sign-in.module */ "b8Qw")).then(m => m.SignInModule),
            },
            {
                path: 'sign-up',
                loadChildren: () => __webpack_require__.e(/*! import() | sign-up-sign-Up-module */ "sign-up-sign-Up-module").then(__webpack_require__.bind(null, /*! ./sign-up/sign-Up.module */ "kLqT")).then(m => m.SignUpModule),
            },
            {
                path: 'boards',
                loadChildren: () => Promise.all(/*! import() | boards-boards-module */[__webpack_require__.e("common"), __webpack_require__.e("boards-boards-module")]).then(__webpack_require__.bind(null, /*! ./boards/boards.module */ "dfPZ")).then(m => m.BoardsModule),
                canActivate: [_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            },
            {
                path: 'board/:id',
                loadChildren: () => Promise.all(/*! import() | board-board-module */[__webpack_require__.e("common"), __webpack_require__.e("board-board-module")]).then(__webpack_require__.bind(null, /*! ./board/board.module */ "EMdX")).then(m => m.BoardModule),
            }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map