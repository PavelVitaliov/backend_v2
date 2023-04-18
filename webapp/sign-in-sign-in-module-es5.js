(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"], {
    /***/
    "LtJb":
    /*!***********************************************************!*\
      !*** ./src/app/pages/sign-in/services/sign-in.service.ts ***!
      \***********************************************************/

    /*! exports provided: SignInService */

    /***/
    function LtJb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInService", function () {
        return SignInService;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignInService = /*#__PURE__*/function () {
        function SignInService(fb) {
          _classCallCheck(this, SignInService);

          this.fb = fb;
        }

        _createClass(SignInService, [{
          key: "createForm",
          value: function createForm() {
            return this.fb.group({
              email: ['admin@admin.admin', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              password: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(control) {
            if (!control) {
              return;
            }

            return control.hasError('required') ? 'Field is required' : '';
          }
        }]);

        return SignInService;
      }();

      SignInService.ɵfac = function SignInService_Factory(t) {
        return new (t || SignInService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      SignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: SignInService,
        factory: SignInService.ɵfac
      });
      /***/
    },

    /***/
    "XWge":
    /*!****************************************************!*\
      !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
      \****************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function XWge(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _root_store_auth_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @root-store/auth/selectors/auth.selectors */
      "pnCI");
      /* harmony import */


      var _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @root-store/auth/actions/auth.actions */
      "fPhM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_pages_sign_in_services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/pages/sign-in/services/sign-in.service */
      "LtJb");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function SignInComponent_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage(ctx_r0.email));
        }
      }

      function SignInComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage(ctx_r1.password));
        }
      }

      function SignInComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " SignIn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      }

      function SignInComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      }

      var SignInComponent = /*#__PURE__*/function () {
        function SignInComponent(localSignInService, store) {
          _classCallCheck(this, SignInComponent);

          this.localSignInService = localSignInService;
          this.store = store;
          this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        }

        _createClass(SignInComponent, [{
          key: "email",
          get: function get() {
            return this.signInForm.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            return this.signInForm.get('password');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signInForm = this.localSignInService.createForm();
            this.getState$ = this.store.select(_root_store_auth_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["getAuth"]);
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(control) {
            return this.localSignInService.getErrorMessage(control);
          }
        }, {
          key: "onSignIn",
          value: function onSignIn() {
            this.store.dispatch(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["auth"]({
              payload: this.signInForm.value
            }));
          }
        }]);

        return SignInComponent;
      }();

      SignInComponent.ɵfac = function SignInComponent_Factory(t) {
        return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_pages_sign_in_services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__["SignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
      };

      SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SignInComponent,
        selectors: [["app-sign-in"]],
        decls: 17,
        vars: 9,
        consts: [[1, "signin-wrap"], [1, "signin-form", 3, "formGroup", "submit"], ["appearance", "outline"], ["autofocus", "", "matInput", "", "placeholder", "Enter your email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "placeholder", "Enter your password", "formControlName", "password", "type", "password"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "signin-form__btn"], ["diameter", "25", "color", "#ffffff"]],
        template: function SignInComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_1_listener() {
              return ctx.onSignIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SignInComponent_mat_error_6_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SignInComponent_mat_error_11_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SignInComponent_ng_container_13_Template, 2, 0, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SignInComponent_ng_container_15_Template, 2, 0, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_3_0 = null;
            var tmp_4_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signInForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.password == null ? null : ctx.password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 5, ctx.getState$)) == null ? null : tmp_3_0.isFetching));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 7, ctx.getState$)) == null ? null : tmp_4_0.isFetching);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: [".signin-wrap[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signin-wrap[_ngcontent-%COMP%]     .mat-spinner circle {\n  stroke: #fff;\n}\n.signin-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.signin-form__btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 5px;\n  line-height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduLWluLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxZQ1RVO0FEUWQ7QUFLQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG4uc2lnbmluLXdyYXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgOjpuZy1kZWVwIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICAgIHN0cm9rZTogJGNvbG9yLXdoaXRlO1xuICB9XG59XG5cbi5zaWduaW4tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gICZfX2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbn1cbiIsIiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibGFjay04MDA6ICMyMjI7XG5cbiRjb2xvci1ibHVlLTkwMDogIzA5MWU0MjtcbiRjb2xvci1ibHVlLTgwMDogIzE3MmI0ZDtcbiRjb2xvci1ibHVlLTcwMDogIzAyNmFhNztcbiRjb2xvci1ibHVlLTYwMDogIzAwNzliZjtcbiRjb2xvci1ibHVlLTEwMDogI2U0ZjBmNjtcblxuJGNvbG9yLWdyZXktODAwOiAjMzIzMjMyO1xuJGNvbG9yLWdyZXktNjAwOiAjOGQ4ZDhkO1xuJGNvbG9yLWdyZXktNTAwOiAjNmI3NzhjO1xuJGNvbG9yLWdyZXktMjAwOiAjZGZlMWU2O1xuJGNvbG9yLWdyZXktMTAwOiAjZjRmNWY3O1xuXG4kY29sb3ItZ3JlZW46ICM1YWFjNDQ7XG5cbiRtYXJrLWNvbG9yLWdyZWVuOiAjNTE5ODM5O1xuJG1hcmstY29sb3IteWVsbG93OiAjZjJkNjAwO1xuJG1hcmstY29sb3Itb3JhbmdlOiAjZmY5ZjFhO1xuJG1hcmstY29sb3ItcmVkOiAjZWI1YTQ2O1xuJG1hcmstY29sb3ItcHVycGxlOiAjYzM3N2UwO1xuJG1hcmstY29sb3ItYmx1ZTogIzAwNzliZjtcblxuJGNvbG9yLXJlZDogI2ViNWE0NjtcblxuJGNvbG9yLWxpZ2h0LWdyZXktMTAwOiAjMDkxZTQyO1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzLyc7XG5cbkBtaXhpbiBmb250LWZhY2UoICRuYW1lLCAkZGlyLCAkcGF0aCwgJHR5cGUpIHtcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICRuYW1lO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvJyArICRkaXIgKyAnLycgKyAkbmFtZSArICRwYXRoKSBmb3JtYXQoJHR5cGUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG5cbkBtaXhpbiBmb250KCRmYW1pbHksICRzaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkZmFtaWx5LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6ICRzaXplO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "b8Qw":
    /*!*************************************************!*\
      !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
      \*************************************************/

    /*! exports provided: SignInModule */

    /***/
    function b8Qw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInModule", function () {
        return SignInModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-in-routing.module */
      "i5c4");
      /* harmony import */


      var _app_pages_sign_in_services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/pages/sign-in/services/sign-in.service */
      "LtJb");
      /* harmony import */


      var _sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sign-in.component */
      "XWge");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignInModule = function SignInModule() {
        _classCallCheck(this, SignInModule);
      };

      SignInModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: SignInModule
      });
      SignInModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function SignInModule_Factory(t) {
          return new (t || SignInModule)();
        },
        providers: [_app_pages_sign_in_services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignInRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SignInModule, {
          declarations: [_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignInRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "i5c4":
    /*!*********************************************************!*\
      !*** ./src/app/pages/sign-in/sign-in-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SignInRoutingModule */

    /***/
    function i5c4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInRoutingModule", function () {
        return SignInRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/pages/sign-in/sign-in.component */
      "XWge");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _app_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"]
      }];

      var SignInRoutingModule = function SignInRoutingModule() {
        _classCallCheck(this, SignInRoutingModule);
      };

      SignInRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: SignInRoutingModule
      });
      SignInRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function SignInRoutingModule_Factory(t) {
          return new (t || SignInRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignInRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map