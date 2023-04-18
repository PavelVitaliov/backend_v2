(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+LOj":
    /*!****************************************************!*\
      !*** ./src/app/modules/header/header.component.ts ***!
      \****************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function LOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @root-store/auth/actions/auth.actions */
      "fPhM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(store) {
          _classCallCheck(this, HeaderComponent);

          this.store = store;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logOut",
          value: function logOut() {
            this.store.dispatch(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["logOut"]());
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 18,
        vars: 1,
        consts: [["color", "primary", 1, "header"], ["routerLink", "/boards", "aria-hidden", "false", 1, "header__icon"], [1, "header-spacer"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "header-menu"], ["headerMenu", "matMenu"], ["routerLink", "/boards", 1, "header-menu__item"], ["routerLink", "/sign-in", 1, "header-menu__item"], ["routerLink", "/sign-up", 1, "header-menu__item"], [1, "header-menu__item", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Boards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SignIn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SignUp");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        styles: [".header-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header__icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header__icon[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n  .header-menu__item {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  max-width: 100%;\n  position: relative;\n  color: #000;\n}\n  .header-menu__item:hover {\n  text-decoration: none;\n  background: rgba(0, 0, 0, 0.04);\n}\n  .header-menu .mat-menu-content {\n  display: flex;\n  flex-flow: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxPQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7QUFISjtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBVUk7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQ2pDUTtBRDBCZDtBQVNNO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtBQVBSO0FBV0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFUTiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5oZWFkZXIge1xuICAmLXNwYWNlciB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gICZfX2ljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLmhlYWRlci1tZW51IHtcbiAgICAmX19pdGVtIHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCRjb2xvci1ibGFjaywgMC45Nik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1tZW51LWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWJsYWNrLTgwMDogIzIyMjtcblxuJGNvbG9yLWJsdWUtOTAwOiAjMDkxZTQyO1xuJGNvbG9yLWJsdWUtODAwOiAjMTcyYjRkO1xuJGNvbG9yLWJsdWUtNzAwOiAjMDI2YWE3O1xuJGNvbG9yLWJsdWUtNjAwOiAjMDA3OWJmO1xuJGNvbG9yLWJsdWUtMTAwOiAjZTRmMGY2O1xuXG4kY29sb3ItZ3JleS04MDA6ICMzMjMyMzI7XG4kY29sb3ItZ3JleS02MDA6ICM4ZDhkOGQ7XG4kY29sb3ItZ3JleS01MDA6ICM2Yjc3OGM7XG4kY29sb3ItZ3JleS0yMDA6ICNkZmUxZTY7XG4kY29sb3ItZ3JleS0xMDA6ICNmNGY1Zjc7XG5cbiRjb2xvci1ncmVlbjogIzVhYWM0NDtcblxuJG1hcmstY29sb3ItZ3JlZW46ICM1MTk4Mzk7XG4kbWFyay1jb2xvci15ZWxsb3c6ICNmMmQ2MDA7XG4kbWFyay1jb2xvci1vcmFuZ2U6ICNmZjlmMWE7XG4kbWFyay1jb2xvci1yZWQ6ICNlYjVhNDY7XG4kbWFyay1jb2xvci1wdXJwbGU6ICNjMzc3ZTA7XG4kbWFyay1jb2xvci1ibHVlOiAjMDA3OWJmO1xuXG4kY29sb3ItcmVkOiAjZWI1YTQ2O1xuXG4kY29sb3ItbGlnaHQtZ3JleS0xMDA6ICMwOTFlNDI7XG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMvJztcblxuQG1peGluIGZvbnQtZmFjZSggJG5hbWUsICRkaXIsICRwYXRoLCAkdHlwZSkge1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJG5hbWU7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy8nICsgJGRpciArICcvJyArICRuYW1lICsgJHBhdGgpIGZvcm1hdCgkdHlwZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuQG1peGluIGZvbnQoJGZhbWlseSwgJHNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRmYW1pbHksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\ngrx\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1/G/":
    /*!**************************************************!*\
      !*** ./src/app/root-store/board/board.module.ts ***!
      \**************************************************/

    /*! exports provided: BoardModule */

    /***/
    function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardModule", function () {
        return BoardModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _effects_board_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./effects/board.effects */
      "te5j");
      /* harmony import */


      var _root_store_board_reducers_board_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/board/reducers/board.reducer */
      "RwpF");
      /* harmony import */


      var _effects_column_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./effects/column.effects */
      "dEZt");
      /* harmony import */


      var _effects_task_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./effects/task.effects */
      "3ilk");
      /* harmony import */


      var _effects_comment_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./effects/comment.effects */
      "c0o7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BoardModule = function BoardModule() {
        _classCallCheck(this, BoardModule);
      };

      BoardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: BoardModule
      });
      BoardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function BoardModule_Factory(t) {
          return new (t || BoardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('board', _root_store_board_reducers_board_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_effects_board_effects__WEBPACK_IMPORTED_MODULE_3__["BoardEffects"], _effects_column_effects__WEBPACK_IMPORTED_MODULE_5__["ColumnEffects"], _effects_task_effects__WEBPACK_IMPORTED_MODULE_6__["TaskEffects"], _effects_comment_effects__WEBPACK_IMPORTED_MODULE_7__["CommentEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BoardModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]]
        });
      })();
      /***/

    },

    /***/
    "3ilk":
    /*!**********************************************************!*\
      !*** ./src/app/root-store/board/effects/task.effects.ts ***!
      \**********************************************************/

    /*! exports provided: TaskEffects */

    /***/
    function ilk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskEffects", function () {
        return TaskEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _app_core_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/core/services/task.service */
      "zCBn");

      var TaskEffects = function TaskEffects(actions$, store, taskService) {
        var _this = this;

        _classCallCheck(this, TaskEffects);

        this.actions$ = actions$;
        this.store = store;
        this.taskService = taskService;
        this.createTask$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTask"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
          var payload = _ref.payload;
          var columnId = payload.columnId,
              task = payload.task,
              boardId = payload.boardId;
          return _this.taskService.createTask(columnId, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTaskFailure"]({
              payload: error
            }));
          }));
        }));
        this.deleteTask$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTask"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref2) {
          var payload = _ref2.payload;
          var taskId = payload.taskId,
              boardId = payload.boardId;
          return _this.taskService.deleteTask(taskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTaskFailure"]({
              payload: error
            }));
          }));
        }));
        this.updateTaskTitle$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskTitle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref3) {
          var payload = _ref3.payload;
          var task = payload.task,
              taskId = payload.taskId,
              boardId = payload.boardId;
          return _this.taskService.updateTaskTitle(taskId, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskTitleFailure"]({
              payload: error
            }));
          }));
        }));
        this.updateTaskMarks$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskMarks"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref4) {
          var payload = _ref4.payload;
          var mark = payload.mark,
              taskId = payload.taskId,
              boardId = payload.boardId;
          return _this.taskService.updateTaskMarks(taskId, mark).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskMarksFailure"]({
              payload: error
            }));
          }));
        }));
        this.changeTaskStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["changeTaskStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref5) {
          var payload = _ref5.payload;
          var taskId = payload.taskId,
              status = payload.status,
              boardId = payload.boardId;
          return _this.taskService.changeTaskStatus(taskId, status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["changeTaskStatusFailure"]({
              payload: error
            }));
          }));
        }));
      };

      TaskEffects.ɵfac = function TaskEffects_Factory(t) {
        return new (t || TaskEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]));
      };

      TaskEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: TaskEffects,
        factory: TaskEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], TaskEffects.prototype, "createTask$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], TaskEffects.prototype, "deleteTask$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], TaskEffects.prototype, "updateTaskTitle$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], TaskEffects.prototype, "updateTaskMarks$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], TaskEffects.prototype, "changeTaskStatus$", void 0);
      /***/
    },

    /***/
    "668k":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 2,
        vars: 0,
        consts: [[1, "loader-wrap"], ["color", "primary"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"]],
        styles: [".loader-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQURGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLmxvYWRlci13cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCRjb2xvci13aGl0ZSwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "76e3":
    /*!*************************************************!*\
      !*** ./src/app/root-store/board/state/index.ts ***!
      \*************************************************/

    /*! exports provided: initialState */

    /***/
    function e3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        errorMessage: null,
        isFetching: false,
        success: false,
        board: null
      };
      /***/
    },

    /***/
    "7JdC":
    /*!*************************************************!*\
      !*** ./src/app/core/services/boards.service.ts ***!
      \*************************************************/

    /*! exports provided: BoardsService */

    /***/
    function JdC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardsService", function () {
        return BoardsService;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var BoardsService = /*#__PURE__*/function () {
        function BoardsService(http) {
          _classCallCheck(this, BoardsService);

          this.http = http;
        }

        _createClass(BoardsService, [{
          key: "getBoards",
          value: function getBoards() {
            return this.http.get("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/boards"));
          }
        }, {
          key: "createBoard",
          value: function createBoard(title) {
            return this.http.post("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/boards"), {
              title: title
            });
          }
        }]);

        return BoardsService;
      }();

      BoardsService.ɵfac = function BoardsService_Factory(t) {
        return new (t || BoardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      BoardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BoardsService,
        factory: BoardsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "7dP1":
    /*!***********************************************!*\
      !*** ./src/app/core/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function dP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
        }

        _createClass(AuthService, [{
          key: "logIn",
          value: function logIn(data) {
            return this.http.post("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/auth/signin"), data);
          }
        }, {
          key: "signUp",
          value: function signUp(data) {
            return this.http.post("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/auth/signup"), data);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            return this.http.get("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/users/current"));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "9jzM":
    /*!*************************************************!*\
      !*** ./src/app/modules/header/header.module.ts ***!
      \*************************************************/

    /*! exports provided: HeaderModule */

    /***/
    function jzM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
        return HeaderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component */
      "+LOj");
      /* harmony import */


      var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderModule = function HeaderModule() {
        _classCallCheck(this, HeaderModule);
      };

      HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: HeaderModule
      });
      HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function HeaderModule_Factory(t) {
          return new (t || HeaderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeaderModule, {
          declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]]
        });
      })();
      /***/

    },

    /***/
    "Aan/":
    /*!*********************************************************!*\
      !*** ./src/app/root-store/auth/effects/auth.effects.ts ***!
      \*********************************************************/

    /*! exports provided: AuthEffects */

    /***/
    function Aan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
        return AuthEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/auth/actions/auth.actions */
      "fPhM");
      /* harmony import */


      var _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @root-store/boards/actions/boards.actions */
      "jT0b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/core/services/auth.service */
      "7dP1");

      var AuthEffects = function AuthEffects(actions$, router, authService) {
        var _this2 = this;

        _classCallCheck(this, AuthEffects);

        this.actions$ = actions$;
        this.router = router;
        this.authService = authService;
        this.logIn$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["auth"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref6) {
          var payload = _ref6.payload;
          return _this2.authService.logIn(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            localStorage.setItem('sessionToken', response.data.token);
            return _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["authSuccess"]({
              payload: response.data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["authFailure"]({
              payload: error
            }));
          }));
        }));
        this.signUp$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["signUp"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref7) {
          var payload = _ref7.payload;
          return _this2.authService.signUp(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["signUpSuccess"]({
              payload: response.data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["signUpFailure"]({
              payload: error
            }));
          }));
        }));
        this.logInSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["authSuccess"], _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["signUpSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          return _this2.router.navigate(['/']);
        }));
        this.checkAuthByToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["chechAuthByToken"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return _this2.authService.checkLogin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["chechAuthByTokenSuccess"]({
              payload: response.data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["chechAuthByTokenFailure"]({
              payload: error
            }));
          }));
        }));
        this.chechAuthByTokenSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["chechAuthByTokenSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_5__["loadBoards"]();
        }));
        this.logOut$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logOut"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          localStorage.removeItem('sessionToken');
          return _this2.router.navigate(['/sign-in']);
        }));
      };

      AuthEffects.ɵfac = function AuthEffects_Factory(t) {
        return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]));
      };

      AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: AuthEffects,
        factory: AuthEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], AuthEffects.prototype, "logIn$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], AuthEffects.prototype, "signUp$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({
        dispatch: false
      })], AuthEffects.prototype, "logInSuccess$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], AuthEffects.prototype, "checkAuthByToken$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], AuthEffects.prototype, "chechAuthByTokenSuccess$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({
        dispatch: false
      })], AuthEffects.prototype, "logOut$", void 0);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://localhost:5000'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "C3wt":
    /*!*************************************************************!*\
      !*** ./src/app/root-store/boards/effects/boards.effects.ts ***!
      \*************************************************************/

    /*! exports provided: BoardsEffects */

    /***/
    function C3wt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardsEffects", function () {
        return BoardsEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/boards/actions/boards.actions */
      "jT0b");
      /* harmony import */


      var _root_store_boards_selectors_boards_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @root-store/boards/selectors/boards.selectors */
      "DTdi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_core_services_boards_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/core/services/boards.service */
      "7JdC");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var BoardsEffects = /*#__PURE__*/function () {
        function BoardsEffects(actions$, boardsService, store) {
          var _this3 = this;

          _classCallCheck(this, BoardsEffects);

          this.actions$ = actions$;
          this.boardsService = boardsService;
          this.store = store;
          this.createBoard$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["createBoard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (actionData) {
            return _this3.boardsService.createBoard(actionData.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref8) {
              var data = _ref8.data;
              return _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["createBoardSuccess"]({
                payload: data
              });
            }));
          }));
          this.checkBoards$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["checkBoards"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this3.checkStoreBoards().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (boards) {
              if (boards) {
                return _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["checkBoardsSuccess"]();
              } else {
                return _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoards"]();
              }
            }));
          }));
          this.loadBoards$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoards"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this3.boardsService.getBoards().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref9) {
              var data = _ref9.data;
              return _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardsSuccess"]({
                payload: data
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              console.log(error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardsFailure"]({
                payload: error
              }));
            }));
          }));
        }

        _createClass(BoardsEffects, [{
          key: "checkStoreBoards",
          value: function checkStoreBoards() {
            return this.store.select(_root_store_boards_selectors_boards_selectors__WEBPACK_IMPORTED_MODULE_5__["getBoards"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }]);

        return BoardsEffects;
      }();

      BoardsEffects.ɵfac = function BoardsEffects_Factory(t) {
        return new (t || BoardsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_core_services_boards_service__WEBPACK_IMPORTED_MODULE_7__["BoardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]));
      };

      BoardsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: BoardsEffects,
        factory: BoardsEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardsEffects.prototype, "createBoard$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardsEffects.prototype, "checkBoards$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardsEffects.prototype, "loadBoards$", void 0);
      /***/
    },

    /***/
    "DTdi":
    /*!*****************************************************************!*\
      !*** ./src/app/root-store/boards/selectors/boards.selectors.ts ***!
      \*****************************************************************/

    /*! exports provided: getBoardsState, getBoards */

    /***/
    function DTdi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBoardsState", function () {
        return getBoardsState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBoards", function () {
        return getBoards;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var selectBoards = function selectBoards(state) {
        return state.boards;
      };

      var getBoardsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (boardsState) {
        return boardsState;
      });
      var getBoards = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (_ref10) {
        var boards = _ref10.boards;
        return boards;
      });
      /***/
    },

    /***/
    "ELF8":
    /*!**************************************************************!*\
      !*** ./src/app/root-store/permissions/permissions.module.ts ***!
      \**************************************************************/

    /*! exports provided: PermissionsModule */

    /***/
    function ELF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsModule", function () {
        return PermissionsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PermissionsModule = function PermissionsModule() {
        _classCallCheck(this, PermissionsModule);
      };

      PermissionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PermissionsModule
      });
      PermissionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function PermissionsModule_Factory(t) {
          return new (t || PermissionsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PermissionsModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "ESuL":
    /*!**************************************************!*\
      !*** ./src/app/root-store/boards/state/index.ts ***!
      \**************************************************/

    /*! exports provided: initialState */

    /***/
    function ESuL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        errorMessage: null,
        isFetching: false,
        success: false,
        boards: null,
        isOpenBoardCreator: false
      };
      /***/
    },

    /***/
    "GXsA":
    /*!************************************************************!*\
      !*** ./src/app/shared/directives/allow-click.directive.ts ***!
      \************************************************************/

    /*! exports provided: AllowClickDirective */

    /***/
    function GXsA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllowClickDirective", function () {
        return AllowClickDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AllowClickDirective = /*#__PURE__*/function () {
        function AllowClickDirective() {
          _classCallCheck(this, AllowClickDirective);

          this.allowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(AllowClickDirective, [{
          key: "clickEvent",
          value: function clickEvent() {
            if (this.appAllowClick) {
              this.allowClick.emit();
            }
          }
        }]);

        return AllowClickDirective;
      }();

      AllowClickDirective.ɵfac = function AllowClickDirective_Factory(t) {
        return new (t || AllowClickDirective)();
      };

      AllowClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AllowClickDirective,
        selectors: [["", "appAllowClick", ""]],
        hostBindings: function AllowClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllowClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          appAllowClick: "appAllowClick"
        },
        outputs: {
          allowClick: "allowClick"
        }
      });
      /***/
    },

    /***/
    "IZUe":
    /*!**********************************************************!*\
      !*** ./src/app/shared/directives/autofocus.directive.ts ***!
      \**********************************************************/

    /*! exports provided: AutofocusDirective */

    /***/
    function IZUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () {
        return AutofocusDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AutofocusDirective = /*#__PURE__*/function () {
        function AutofocusDirective(el) {
          _classCallCheck(this, AutofocusDirective);

          this.el = el;
        }

        _createClass(AutofocusDirective, [{
          key: "appAutofocus",
          set: function set(condition) {
            this._autofocus = condition !== false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._autofocus || typeof this._autofocus === 'undefined') {
              this.el.nativeElement.focus();
            }
          }
        }]);

        return AutofocusDirective;
      }();

      AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) {
        return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AutofocusDirective,
        selectors: [["", "appAutofocus", ""]],
        inputs: {
          appAutofocus: "appAutofocus"
        }
      });
      /***/
    },

    /***/
    "NaJt":
    /*!************************************************!*\
      !*** ./src/app/core/services/board.service.ts ***!
      \************************************************/

    /*! exports provided: BoardService */

    /***/
    function NaJt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardService", function () {
        return BoardService;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var BoardService = /*#__PURE__*/function () {
        function BoardService(http) {
          _classCallCheck(this, BoardService);

          this.http = http;
        }

        _createClass(BoardService, [{
          key: "getBoard",
          value: function getBoard(boardId) {
            return this.http.get("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/boards/").concat(boardId));
          }
        }, {
          key: "addUserOnBoard",
          value: function addUserOnBoard(data, boardId) {
            return this.http.patch("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/boards/").concat(boardId), data);
          }
        }, {
          key: "updateBoardTitle",
          value: function updateBoardTitle(boardId, title) {
            return this.http.put("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/boards/").concat(boardId), {
              title: title
            });
          }
        }, {
          key: "deleteBoard",
          value: function deleteBoard(boardId) {
            return this.http["delete"]("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/boards/").concat(boardId));
          }
        }, {
          key: "dnd",
          value: function dnd(data) {
            return this.http.patch("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks"), Object.assign({}, data));
          }
        }]);

        return BoardService;
      }();

      BoardService.ɵfac = function BoardService_Factory(t) {
        return new (t || BoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BoardService,
        factory: BoardService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "OD9Q":
    /*!****************************************************!*\
      !*** ./src/app/root-store/boards/boards.module.ts ***!
      \****************************************************/

    /*! exports provided: BoardsModule */

    /***/
    function OD9Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardsModule", function () {
        return BoardsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _effects_boards_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./effects/boards.effects */
      "C3wt");
      /* harmony import */


      var _root_store_boards_reducers_boards_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/boards/reducers/boards.reducer */
      "Qj8n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BoardsModule = function BoardsModule() {
        _classCallCheck(this, BoardsModule);
      };

      BoardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: BoardsModule
      });
      BoardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function BoardsModule_Factory(t) {
          return new (t || BoardsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('boards', _root_store_boards_reducers_boards_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_effects_boards_effects__WEBPACK_IMPORTED_MODULE_3__["BoardsEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BoardsModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]]
        });
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_shared_directives_email_validate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/shared/directives/email-validate.directive */
      "dGMh");
      /* harmony import */


      var _app_shared_fontawesome_fontawesome_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/shared/fontawesome/fontawesome.module */
      "Xy2J");
      /* harmony import */


      var _app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/shared/material/material.module */
      "jAig");
      /* harmony import */


      var _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/loader/loader.module */
      "zJym");
      /* harmony import */


      var _app_shared_components_delete_button_delete_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/shared/components/delete-button/delete-button.module */
      "RPUH");
      /* harmony import */


      var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./directives/autofocus.directive */
      "IZUe");
      /* harmony import */


      var _app_shared_directives_allow_click_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/shared/directives/allow-click.directive */
      "GXsA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _app_shared_fontawesome_fontawesome_module__WEBPACK_IMPORTED_MODULE_4__["FontawesomeModule"], _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], _app_shared_components_delete_button_delete_button_module__WEBPACK_IMPORTED_MODULE_7__["DeleteButtonModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _app_shared_fontawesome_fontawesome_module__WEBPACK_IMPORTED_MODULE_4__["FontawesomeModule"], _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], _app_shared_components_delete_button_delete_button_module__WEBPACK_IMPORTED_MODULE_7__["DeleteButtonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_app_shared_directives_email_validate_directive__WEBPACK_IMPORTED_MODULE_3__["EmailValidateDirective"], _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__["AutofocusDirective"], _app_shared_directives_allow_click_directive__WEBPACK_IMPORTED_MODULE_9__["AllowClickDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _app_shared_fontawesome_fontawesome_module__WEBPACK_IMPORTED_MODULE_4__["FontawesomeModule"], _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], _app_shared_components_delete_button_delete_button_module__WEBPACK_IMPORTED_MODULE_7__["DeleteButtonModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _app_shared_fontawesome_fontawesome_module__WEBPACK_IMPORTED_MODULE_4__["FontawesomeModule"], _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], _app_shared_components_delete_button_delete_button_module__WEBPACK_IMPORTED_MODULE_7__["DeleteButtonModule"], _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__["AutofocusDirective"], _app_shared_directives_allow_click_directive__WEBPACK_IMPORTED_MODULE_9__["AllowClickDirective"]]
        });
      })();
      /***/

    },

    /***/
    "QGWN":
    /*!**************************************************!*\
      !*** ./src/app/core/services/comment.service.ts ***!
      \**************************************************/

    /*! exports provided: CommentService */

    /***/
    function QGWN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentService", function () {
        return CommentService;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CommentService = /*#__PURE__*/function () {
        function CommentService(http) {
          _classCallCheck(this, CommentService);

          this.http = http;
        }

        _createClass(CommentService, [{
          key: "createTaskComment",
          value: function createTaskComment(taskId, comment) {
            return this.http.post("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/comments/").concat(taskId), Object.assign({}, comment));
          }
        }, {
          key: "deleteTaskComment",
          value: function deleteTaskComment(taskId, commentId) {
            return this.http.request('delete', "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/comments/").concat(commentId), {
              body: {
                taskId: taskId
              }
            });
          }
        }]);

        return CommentService;
      }();

      CommentService.ɵfac = function CommentService_Factory(t) {
        return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CommentService,
        factory: CommentService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Qj8n":
    /*!**************************************************************!*\
      !*** ./src/app/root-store/boards/reducers/boards.reducer.ts ***!
      \**************************************************************/

    /*! exports provided: reducer */

    /***/
    function Qj8n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! immutability-helper */
      "RsOY");
      /* harmony import */


      var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @root-store/boards/actions/boards.actions */
      "jT0b");
      /* harmony import */


      var _root_store_boards_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @root-store/boards/state */
      "ESuL");

      var boardsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_root_store_boards_state__WEBPACK_IMPORTED_MODULE_3__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["loadBoards"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          boards: {
            $set: null
          },
          isFetching: {
            $set: true
          },
          errorMessage: {
            $set: null
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["loadBoardsSuccess"], function (state, _ref11) {
        var payload = _ref11.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          boards: {
            $set: payload
          },
          isFetching: {
            $set: false
          },
          errorMessage: {
            $set: null
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["loadBoardsFailure"], function (state, _ref12) {
        var error = _ref12.payload.error;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          isFetching: {
            $set: false
          },
          errorMessage: {
            $set: error.message
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["openBoardCreator"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          isOpenBoardCreator: {
            $set: true
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["closeBoardCreator"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          isOpenBoardCreator: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["createBoard"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          isFetching: {
            $set: true
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["createBoardSuccess"], function (state, data) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          boards: function boards(_boards) {
            return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(_boards, {
              admin: {
                $push: [data.payload]
              }
            });
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["createBoardFailure"], function (state, _ref13) {
        var error = _ref13.payload.error;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          isFetching: {
            $set: false
          },
          errorMessage: {
            $set: error.message
          }
        });
      }));

      function reducer(state, action) {
        return boardsReducer(state, action);
      }
      /***/

    },

    /***/
    "RPUH":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/components/delete-button/delete-button.module.ts ***!
      \*************************************************************************/

    /*! exports provided: DeleteButtonModule */

    /***/
    function RPUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteButtonModule", function () {
        return DeleteButtonModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _delete_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./delete-button.component */
      "wmMX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeleteButtonModule = function DeleteButtonModule() {
        _classCallCheck(this, DeleteButtonModule);
      };

      DeleteButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: DeleteButtonModule
      });
      DeleteButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function DeleteButtonModule_Factory(t) {
          return new (t || DeleteButtonModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DeleteButtonModule, {
          declarations: [_delete_button_component__WEBPACK_IMPORTED_MODULE_2__["DeleteButtonComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]],
          exports: [_delete_button_component__WEBPACK_IMPORTED_MODULE_2__["DeleteButtonComponent"]]
        });
      })();
      /***/

    },

    /***/
    "RwpF":
    /*!************************************************************!*\
      !*** ./src/app/root-store/board/reducers/board.reducer.ts ***!
      \************************************************************/

    /*! exports provided: reducer */

    /***/
    function RwpF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var immutability_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! immutability-helper */
      "RsOY");
      /* harmony import */


      var immutability_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _root_store_board_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @root-store/board/state */
      "76e3");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");

      var boardReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_root_store_board_state__WEBPACK_IMPORTED_MODULE_3__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardTitle"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createColumn"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumn"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteBoard"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateColumnTitle"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTask"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTask"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskTitle"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskMarks"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: true
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTaskComment"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTaskComment"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["changeTaskStatus"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: true
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardSuccess"], function (state, _ref14) {
        var payload = _ref14.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          board: {
            $set: payload
          },
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardTitleFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createColumnFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumnFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteBoardFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateColumnTitleFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTaskFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTaskFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskTitleFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskMarksFailure"], function (state, _ref15) {
        var error = _ref15.payload.error;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          errorMessage: {
            $set: error.message
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTaskCommentFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTaskCommentFailure"], _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["changeTaskStatusFailure"], function (state, _ref16) {
        var error = _ref16.payload.error;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          errorMessage: {
            $set: error.message
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardTitleSuccess"], function (state, _ref17) {
        var payload = _ref17.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          board: function board(_board) {
            return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(_board, {
              title: {
                $set: payload
              }
            });
          },
          isFetching: {
            $set: false
          },
          errorMessage: {
            $set: null
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardState"], function (state, _ref18) {
        var payload = _ref18.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          board: {
            $set: payload
          },
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteBoardSuccess"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumnSuccess"], function (state, _ref19) {
        var payload = _ref19.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          board: function board(_board2) {
            return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(_board2, {
              columns: function columns(_columns) {
                return _columns.reduce(function (previousValue, currentValue) {
                  if (currentValue._id !== payload) {
                    previousValue.push(currentValue);
                  }

                  return previousValue;
                }, []);
              }
            });
          },
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateColumnTitleSuccess"], function (state, _ref20) {
        var payload = _ref20.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          board: function board(_board3) {
            return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(_board3, {
              columns: function columns(_columns2) {
                return _columns2.map(function (column) {
                  if (column._id === payload.columnId) {
                    return Object.assign(Object.assign({}, column), {
                      title: payload.title
                    });
                  }

                  return column;
                });
              }
            });
          },
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateTaskMarks"], function (state, _ref21) {
        var payload = _ref21.payload;
        var columnId = payload.columnId,
            taskId = payload.taskId,
            mark = payload.mark;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          board: function board(_board4) {
            return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(_board4, {
              columns: function columns(_columns3) {
                return _columns3.map(function (column) {
                  if (columnId === column._id) {
                    return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(column, {
                      tasks: function tasks(_tasks) {
                        return _tasks.map(function (task) {
                          if (taskId === task._id) {
                            return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(task, {
                              marks: function marks(_marks) {
                                var isCheckedMark = _marks.some(function (checkMark) {
                                  return checkMark === mark;
                                });

                                if (isCheckedMark) {
                                  return _marks.filter(function (checkMark) {
                                    return checkMark !== mark;
                                  });
                                }

                                return [].concat(_toConsumableArray(_marks), [mark]);
                              }
                            });
                          }

                          return task;
                        });
                      }
                    });
                  }

                  return column;
                });
              }
            });
          },
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: false
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["dragAndDrop"], function (state, _ref22) {
        var payload = _ref22.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(state, {
          board: function board(_board5) {
            return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(_board5, {
              columns: function columns(_columns4) {
                var columnSource = _columns4.find(function (column) {
                  return column._id === payload.source.droppableId;
                });

                var columnDestination = _columns4.find(function (column) {
                  return column._id === payload.destination.droppableId;
                });

                var tasksSource = _toConsumableArray(columnSource.tasks);

                var tasksDestination = _toConsumableArray(columnDestination.tasks);

                if (payload.source.droppableId === payload.destination.droppableId) {
                  Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(tasksDestination, payload.source.index, payload.destination.index);
                } else {
                  Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(tasksSource, tasksDestination, payload.source.index, payload.destination.index);
                }

                return _columns4.map(function (column) {
                  if (column._id === payload.destination.droppableId) {
                    return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(column, {
                      tasks: {
                        $set: tasksDestination
                      }
                    });
                  }

                  if (column._id === payload.source.droppableId) {
                    return immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(column, {
                      tasks: {
                        $set: tasksSource
                      }
                    });
                  }

                  return column;
                });
              }
            });
          },
          errorMessage: {
            $set: null
          },
          isFetching: {
            $set: true
          }
        });
      }));

      function reducer(state, action) {
        return boardReducer(state, action);
      }
      /***/

    },

    /***/
    "SCE4":
    /*!************************************************!*\
      !*** ./src/app/root-store/auth/auth.module.ts ***!
      \************************************************/

    /*! exports provided: AuthModule */

    /***/
    function SCE4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _effects_auth_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./effects/auth.effects */
      "Aan/");
      /* harmony import */


      var _root_store_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/auth/reducers/auth.reducer */
      "jNYY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('auth', _root_store_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_effects_auth_effects__WEBPACK_IMPORTED_MODULE_3__["AuthEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @root-store/auth/actions/auth.actions */
      "fPhM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _modules_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/header/header.component */
      "+LOj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(store) {
          _classCallCheck(this, AppComponent);

          this.store = store;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["chechAuthByToken"]());
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_modules_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Xy2J":
    /*!**********************************************************!*\
      !*** ./src/app/shared/fontawesome/fontawesome.module.ts ***!
      \**********************************************************/

    /*! exports provided: FontawesomeModule */

    /***/
    function Xy2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FontawesomeModule", function () {
        return FontawesomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FontawesomeModule = function FontawesomeModule(library) {
        _classCallCheck(this, FontawesomeModule);

        this.library = library;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClipboard"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBell"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"]);
      };

      FontawesomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: FontawesomeModule
      });
      FontawesomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function FontawesomeModule_Factory(t) {
          return new (t || FontawesomeModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconLibrary"]));
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FontawesomeModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]],
          exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/core/interceptors/auth.interceptor */
      "htiD");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/root-store/root-store.module */
      "k5Bz");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_modules_header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/modules/header/header.module */
      "9jzM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_6__["RootStoreModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _app_modules_header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_6__["RootStoreModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _app_modules_header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "aCiu":
    /*!*******************************************!*\
      !*** ./src/app/root-store/state/index.ts ***!
      \*******************************************/

    /*! exports provided: initialAppState */

    /***/
    function aCiu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialAppState", function () {
        return initialAppState;
      });
      /* harmony import */


      var _root_store_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @root-store/auth/state */
      "l2FF");
      /* harmony import */


      var _root_store_boards_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @root-store/boards/state */
      "ESuL");
      /* harmony import */


      var _root_store_board_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @root-store/board/state */
      "76e3");

      var initialAppState = {
        auth: _root_store_auth_state__WEBPACK_IMPORTED_MODULE_0__["initialAuthState"],
        boards: _root_store_boards_state__WEBPACK_IMPORTED_MODULE_1__["initialState"],
        board: _root_store_board_state__WEBPACK_IMPORTED_MODULE_2__["initialState"]
      };
      /***/
    },

    /***/
    "c0o7":
    /*!*************************************************************!*\
      !*** ./src/app/root-store/board/effects/comment.effects.ts ***!
      \*************************************************************/

    /*! exports provided: CommentEffects */

    /***/
    function c0o7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentEffects", function () {
        return CommentEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _app_core_services_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/core/services/comment.service */
      "QGWN");

      var CommentEffects = function CommentEffects(actions$, store, commentService) {
        var _this4 = this;

        _classCallCheck(this, CommentEffects);

        this.actions$ = actions$;
        this.store = store;
        this.commentService = commentService;
        this.createTaskComment$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTaskComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref23) {
          var payload = _ref23.payload;
          var taskId = payload.taskId,
              comment = payload.comment,
              boardId = payload.boardId;
          return _this4.commentService.createTaskComment(taskId, comment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createTaskCommentFailure"]({
              payload: error
            }));
          }));
        }));
        this.deleteTaskComment$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTaskComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref24) {
          var payload = _ref24.payload;
          var taskId = payload.taskId,
              commentId = payload.commentId,
              boardId = payload.boardId;
          return _this4.commentService.deleteTaskComment(taskId, commentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTaskCommentFailure"]({
              payload: error
            }));
          }));
        }));
      };

      CommentEffects.ɵfac = function CommentEffects_Factory(t) {
        return new (t || CommentEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_app_core_services_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"]));
      };

      CommentEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: CommentEffects,
        factory: CommentEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], CommentEffects.prototype, "createTaskComment$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], CommentEffects.prototype, "deleteTaskComment$", void 0);
      /***/
    },

    /***/
    "dEZt":
    /*!************************************************************!*\
      !*** ./src/app/root-store/board/effects/column.effects.ts ***!
      \************************************************************/

    /*! exports provided: ColumnEffects */

    /***/
    function dEZt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnEffects", function () {
        return ColumnEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _app_core_services_column_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/core/services/column.service */
      "yBkz");

      var ColumnEffects = function ColumnEffects(actions$, store, columnService) {
        var _this5 = this;

        _classCallCheck(this, ColumnEffects);

        this.actions$ = actions$;
        this.store = store;
        this.columnService = columnService;
        this.createColumn$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createColumn"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref25) {
          var payload = _ref25.payload;
          var boardId = payload.boardId,
              columnTitle = payload.columnTitle;
          return _this5.columnService.createColumn(boardId, columnTitle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["createColumnFailure"]({
              payload: error
            }));
          }));
        }));
        this.deleteColumn$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumn"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref26) {
          var payload = _ref26.payload;
          return _this5.columnService.deleteColumn(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumnSuccess"]({
              payload: payload
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumnFailure"]({
              payload: error
            }));
          }));
        }));
        this.updateColumnTitle$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateColumnTitle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref27) {
          var payload = _ref27.payload;
          var title = payload.title,
              columnId = payload.columnId;
          return _this5.columnService.updateColumnTitle(columnId, title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateColumnTitleSuccess"]({
              payload: {
                title: title,
                columnId: columnId
              }
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateColumnTitleFailure"]({
              payload: error
            }));
          }));
        }));
      };

      ColumnEffects.ɵfac = function ColumnEffects_Factory(t) {
        return new (t || ColumnEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_app_core_services_column_service__WEBPACK_IMPORTED_MODULE_7__["ColumnService"]));
      };

      ColumnEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: ColumnEffects,
        factory: ColumnEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ColumnEffects.prototype, "createColumn$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ColumnEffects.prototype, "deleteColumn$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ColumnEffects.prototype, "updateColumnTitle$", void 0);
      /***/
    },

    /***/
    "dGMh":
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/email-validate.directive.ts ***!
      \***************************************************************/

    /*! exports provided: emailValidation, isEmptyValidation, EmailValidateDirective */

    /***/
    function dGMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emailValidation", function () {
        return emailValidation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmptyValidation", function () {
        return isEmptyValidation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailValidateDirective", function () {
        return EmailValidateDirective;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      function emailValidation() {
        return function (control) {
          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          var isValidEmail = reg.test(control.value);
          return isValidEmail ? null : {
            emailInvalid: true
          };
        };
      }

      function isEmptyValidation() {
        return function (control) {
          var value;

          if (control.value && control.value.trim) {
            value = control.value.trim();
          }

          return value ? null : {
            required: true
          };
        };
      }

      var EmailValidateDirective = /*#__PURE__*/function () {
        function EmailValidateDirective() {
          _classCallCheck(this, EmailValidateDirective);
        }

        _createClass(EmailValidateDirective, [{
          key: "validate",
          value: function validate(control) {
            return emailValidation()(control);
          }
        }]);

        return EmailValidateDirective;
      }();

      EmailValidateDirective.ɵfac = function EmailValidateDirective_Factory(t) {
        return new (t || EmailValidateDirective)();
      };

      EmailValidateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: EmailValidateDirective,
        selectors: [["", "appEmailValidate", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
          useExisting: EmailValidateDirective,
          multi: true
        }])]
      });
      /***/
    },

    /***/
    "fPhM":
    /*!*********************************************************!*\
      !*** ./src/app/root-store/auth/actions/auth.actions.ts ***!
      \*********************************************************/

    /*! exports provided: authActionTypes, auth, authSuccess, authFailure, signUp, signUpSuccess, signUpFailure, chechAuthByToken, chechAuthByTokenSuccess, chechAuthByTokenFailure, logOut */

    /***/
    function fPhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authActionTypes", function () {
        return authActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "auth", function () {
        return auth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authSuccess", function () {
        return authSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authFailure", function () {
        return authFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "signUp", function () {
        return signUp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "signUpSuccess", function () {
        return signUpSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "signUpFailure", function () {
        return signUpFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chechAuthByToken", function () {
        return chechAuthByToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chechAuthByTokenSuccess", function () {
        return chechAuthByTokenSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chechAuthByTokenFailure", function () {
        return chechAuthByTokenFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logOut", function () {
        return logOut;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var authActionTypes = {
        Auth: '[Auth] Login',
        AuthSuccess: '[Auth] Login Success',
        AuthFailure: '[Auth] Login Failure',
        SignUp: '[SignUp] Login',
        SignUpSuccess: '[SignUp] Login Success',
        SignUpFailure: '[SignUp] Login Failure',
        ChechAuthByToken: '[Auth] ChechAuthByToken',
        ChechAuthByTokenSuccess: '[Auth] ChechAuthByToken Success',
        ChechAuthByTokenFailure: '[Auth] ChechAuthByToken Failure',
        LogOut: '[Auth] LogOut'
      };
      var auth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.Auth, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var authSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.AuthSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var authFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.AuthFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var signUp = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.SignUp, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var signUpSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.SignUpSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var signUpFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.SignUpFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var chechAuthByToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.ChechAuthByToken);
      var chechAuthByTokenSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.ChechAuthByTokenSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var chechAuthByTokenFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.ChechAuthByTokenFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var logOut = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(authActionTypes.LogOut);
      /***/
    },

    /***/
    "htiD":
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
      \*******************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function htiD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(router) {
          _classCallCheck(this, AuthInterceptor);

          this.router = router;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this6 = this;

            var sessionToken = localStorage.getItem('sessionToken');

            if (!sessionToken) {
              sessionToken = '';
              this.router.navigate(['/']);
            }

            var authReq = request.clone({
              headers: request.headers.set('authorization', "".concat(sessionToken))
            });
            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () {}, function (err) {
              console.error(err);

              if (err.status === 401) {
                _this6.router.navigate(['/sign-in']);
              }

              if (err.status === 404 && err.statusText === 'Not Found') {
                _this6.router.navigate(['/']);
              }
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "jAig":
    /*!****************************************************!*\
      !*** ./src/app/shared/material/material.module.ts ***!
      \****************************************************/

    /*! exports provided: MaterialModule */

    /***/
    function jAig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]],
          exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]]
        });
      })();
      /***/

    },

    /***/
    "jNYY":
    /*!**********************************************************!*\
      !*** ./src/app/root-store/auth/reducers/auth.reducer.ts ***!
      \**********************************************************/

    /*! exports provided: reducer */

    /***/
    function jNYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! immutability-helper */
      "RsOY");
      /* harmony import */


      var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _root_store_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @root-store/auth/state */
      "l2FF");
      /* harmony import */


      var _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @root-store/auth/actions/auth.actions */
      "fPhM");

      var authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_root_store_auth_state__WEBPACK_IMPORTED_MODULE_2__["initialAuthState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["auth"], _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["signUp"], _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["chechAuthByToken"], function (state) {
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          isAuthenticated: {
            $set: false
          },
          isFetching: {
            $set: true
          },
          errorMessage: {
            $set: null
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["authSuccess"], _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["signUpSuccess"], _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["chechAuthByTokenSuccess"], function (state, _ref28) {
        var payload = _ref28.payload;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          data: {
            $set: payload
          },
          isAuthenticated: {
            $set: true
          },
          isFetching: {
            $set: false
          },
          errorMessage: {
            $set: null
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["authFailure"], _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["signUpFailure"], _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["chechAuthByTokenFailure"], function (state, _ref29) {
        var error = _ref29.payload.error;
        return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
          isAuthenticated: {
            $set: false
          },
          isFetching: {
            $set: false
          },
          errorMessage: {
            $set: error.message
          }
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["logOut"], function () {
        return _root_store_auth_state__WEBPACK_IMPORTED_MODULE_2__["initialAuthState"];
      }));

      function reducer(state, action) {
        return authReducer(state, action);
      }
      /***/

    },

    /***/
    "jT0b":
    /*!*************************************************************!*\
      !*** ./src/app/root-store/boards/actions/boards.actions.ts ***!
      \*************************************************************/

    /*! exports provided: boardsActionTypes, loadBoards, loadBoardsSuccess, loadBoardsFailure, openBoardCreator, closeBoardCreator, createBoard, createBoardSuccess, createBoardFailure, checkBoards, checkBoardsSuccess */

    /***/
    function jT0b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "boardsActionTypes", function () {
        return boardsActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBoards", function () {
        return loadBoards;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBoardsSuccess", function () {
        return loadBoardsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBoardsFailure", function () {
        return loadBoardsFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "openBoardCreator", function () {
        return openBoardCreator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "closeBoardCreator", function () {
        return closeBoardCreator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createBoard", function () {
        return createBoard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createBoardSuccess", function () {
        return createBoardSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createBoardFailure", function () {
        return createBoardFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkBoards", function () {
        return checkBoards;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkBoardsSuccess", function () {
        return checkBoardsSuccess;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var boardsActionTypes = {
        LoadBoards: '[Boards] Load Boards',
        LoadBoardsSuccess: '[Boards] Load Boards Success',
        LoadBoardsFailure: '[Boards] Load Boards Failure',
        OpenBoardCreator: '[Boards] Open Board Creator',
        CloseBoardCreator: '[Boards] Close Board Creator',
        CreateBoard: '[Boards] Create Board ',
        CreateBoardSuccess: '[Boards] Create Board Success',
        CreateBoardFailure: '[Boards] Create Board Failure',
        CheckBoards: '[Boards] Check Boards',
        CheckBoardsSuccess: '[Boards] Check Boards Success'
      };
      var loadBoards = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.LoadBoards);
      var loadBoardsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.LoadBoardsSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadBoardsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.LoadBoardsFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var openBoardCreator = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.OpenBoardCreator);
      var closeBoardCreator = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.CloseBoardCreator);
      var createBoard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.CreateBoard, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createBoardSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.CreateBoardSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createBoardFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.CreateBoardFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var checkBoards = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.CheckBoards);
      var checkBoardsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardsActionTypes.CheckBoardsSuccess);
      /***/
    },

    /***/
    "k5Bz":
    /*!*************************************************!*\
      !*** ./src/app/root-store/root-store.module.ts ***!
      \*************************************************/

    /*! exports provided: logOutClear, metaReducers, RootStoreModule */

    /***/
    function k5Bz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logOutClear", function () {
        return logOutClear;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
        return metaReducers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RootStoreModule", function () {
        return RootStoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/router-store */
      "99NH");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "agSv");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _root_store_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @root-store/state */
      "aCiu");
      /* harmony import */


      var _root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @root-store/auth/actions/auth.actions */
      "fPhM");
      /* harmony import */


      var _root_store_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @root-store/auth/auth.module */
      "SCE4");
      /* harmony import */


      var _root_store_boards_boards_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @root-store/boards/boards.module */
      "OD9Q");
      /* harmony import */


      var _root_store_board_board_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @root-store/board/board.module */
      "1/G/");
      /* harmony import */


      var _root_store_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @root-store/permissions/permissions.module */
      "ELF8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      function logOutClear(reducer) {
        return function (state, action) {
          if (Object(_root_store_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["logOut"])().type === action.type) {
            return reducer(Object.assign(Object.assign({}, _root_store_state__WEBPACK_IMPORTED_MODULE_6__["initialAppState"]), {
              router: state.router
            }), action);
          }

          return reducer(state, action);
        };
      }

      var metaReducers = [logOutClear];

      var RootStoreModule = function RootStoreModule() {
        _classCallCheck(this, RootStoreModule);
      };

      RootStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: RootStoreModule
      });
      RootStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        factory: function RootStoreModule_Factory(t) {
          return new (t || RootStoreModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _root_store_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _root_store_boards_boards_module__WEBPACK_IMPORTED_MODULE_9__["BoardsModule"], _root_store_board_board_module__WEBPACK_IMPORTED_MODULE_10__["BoardModule"], _root_store_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_11__["PermissionsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({
          router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]
        }, {
          runtimeChecks: {
            strictStateImmutability: true
          },
          metaReducers: metaReducers
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({
          stateKey: 'router',
          routerState: 1
          /* Minimal */

        }), !_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument() : []]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](RootStoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _root_store_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _root_store_boards_boards_module__WEBPACK_IMPORTED_MODULE_9__["BoardsModule"], _root_store_board_board_module__WEBPACK_IMPORTED_MODULE_10__["BoardModule"], _root_store_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_11__["PermissionsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"]]
        });
      })();
      /***/

    },

    /***/
    "kf3a":
    /*!***********************************************************!*\
      !*** ./src/app/root-store/board/actions/board.actions.ts ***!
      \***********************************************************/

    /*! exports provided: boardActionTypes, loadBoard, loadBoardSuccess, loadBoardFailure, updateBoardState, updateBoardTitle, updateBoardTitleSuccess, updateBoardTitleFailure, deleteBoard, deleteBoardSuccess, deleteBoardFailure, dragAndDrop, createColumn, createColumnFailure, deleteColumn, deleteColumnSuccess, deleteColumnFailure, updateColumnTitle, updateColumnTitleSuccess, updateColumnTitleFailure, createTask, createTaskFailure, deleteTask, deleteTaskFailure, updateTaskTitle, updateTaskTitleFailure, updateTaskMarks, updateTaskMarksFailure, changeTaskStatus, changeTaskStatusFailure, addUserOnTask, createTaskComment, createTaskCommentFailure, deleteTaskComment, deleteTaskCommentFailure, addUserOnBoard */

    /***/
    function kf3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "boardActionTypes", function () {
        return boardActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBoard", function () {
        return loadBoard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBoardSuccess", function () {
        return loadBoardSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBoardFailure", function () {
        return loadBoardFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateBoardState", function () {
        return updateBoardState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateBoardTitle", function () {
        return updateBoardTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateBoardTitleSuccess", function () {
        return updateBoardTitleSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateBoardTitleFailure", function () {
        return updateBoardTitleFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteBoard", function () {
        return deleteBoard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteBoardSuccess", function () {
        return deleteBoardSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteBoardFailure", function () {
        return deleteBoardFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dragAndDrop", function () {
        return dragAndDrop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createColumn", function () {
        return createColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createColumnFailure", function () {
        return createColumnFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteColumn", function () {
        return deleteColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteColumnSuccess", function () {
        return deleteColumnSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteColumnFailure", function () {
        return deleteColumnFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateColumnTitle", function () {
        return updateColumnTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateColumnTitleSuccess", function () {
        return updateColumnTitleSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateColumnTitleFailure", function () {
        return updateColumnTitleFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTask", function () {
        return createTask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTaskFailure", function () {
        return createTaskFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteTask", function () {
        return deleteTask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteTaskFailure", function () {
        return deleteTaskFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateTaskTitle", function () {
        return updateTaskTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateTaskTitleFailure", function () {
        return updateTaskTitleFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateTaskMarks", function () {
        return updateTaskMarks;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateTaskMarksFailure", function () {
        return updateTaskMarksFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "changeTaskStatus", function () {
        return changeTaskStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "changeTaskStatusFailure", function () {
        return changeTaskStatusFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addUserOnTask", function () {
        return addUserOnTask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTaskComment", function () {
        return createTaskComment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTaskCommentFailure", function () {
        return createTaskCommentFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteTaskComment", function () {
        return deleteTaskComment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteTaskCommentFailure", function () {
        return deleteTaskCommentFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addUserOnBoard", function () {
        return addUserOnBoard;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var boardActionTypes = {
        LoadBoard: '[Board] Load Board',
        LoadBoardSuccess: '[Board] Load Board Success',
        LoadBoardFailure: '[Board] Load Board Failure',
        UpdateBoardState: '[Board] Update Board State',
        UpdateBoardTitle: '[Board] Update Board Title',
        UpdateBoardTitleSuccess: '[Board] Update Board Title Success',
        UpdateBoardTitleFailure: '[Board] Update Board Title Failure',
        DeleteBoard: '[Board] Delete Board',
        DeleteBoardSuccess: '[Board] Delete Board Success',
        DeleteBoardFailure: '[Board] Delete Board Failure',
        DragAndDrop: '[Board] DragAndDrop',
        CreateColumn: '[Board] Create Column',
        CreateColumnFailure: '[Board] Create Column Failure',
        DeleteColumn: '[Board] Delete Column',
        DeleteColumnSuccess: '[Board] Delete Column Success',
        DeleteColumnFailure: '[Board] Delete Column Failure',
        UpdateColumnTitle: '[Board] Update Column Title',
        UpdateColumnTitleSuccess: '[Board] Update Column Title Success',
        UpdateColumnTitleFailure: '[Board] Update Column Title Failure',
        CreateTask: '[Board] Create Task',
        CreateTaskFailure: '[Board] Create Task Failure',
        DeleteTask: '[Board] Delete Task',
        DeleteTaskFailure: '[Board] Delete Task Failure',
        UpdateTaskTitle: '[Board] Update Task Title',
        UpdateTaskTitleFailure: '[Board] Update Task Title Failure',
        UpdateTaskMarks: '[Board] Update Task Marks',
        UpdateTaskMarksFailure: '[Board] Update Task Marks Failure',
        AddUserOnTask: '[Board] Add User On Task',
        ChangeTaskStatus: '[Board] Change Task Status',
        ChangeTaskStatusFailure: '[Board] Change Task Status Failure',
        CreateTaskComment: '[Board] Create Task Comment',
        CreateTaskCommentFailure: '[Board] Create Task Comment Failure',
        DeleteTaskComment: '[Board] Delete Task Comment',
        DeleteTaskCommentFailure: '[Board] Delete Task Comment Failure',
        AddUserOnBoard: '[Board] Add User On Board'
      };
      var loadBoard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.LoadBoard, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadBoardSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.LoadBoardSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadBoardFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.LoadBoardFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateBoardState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateBoardState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateBoardTitle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateBoardTitle, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateBoardTitleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateBoardTitleSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateBoardTitleFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateBoardTitleFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteBoard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteBoard, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteBoardSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteBoardSuccess);
      var deleteBoardFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteBoardFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var dragAndDrop = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DragAndDrop, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createColumn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.CreateColumn, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createColumnFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.CreateColumnFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteColumn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteColumn, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteColumnSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteColumnSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteColumnFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteColumnFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateColumnTitle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateColumnTitle, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateColumnTitleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateColumnTitleSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateColumnTitleFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateColumnTitleFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.CreateTask, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createTaskFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.CreateTaskFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteTask, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteTaskFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteTaskFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateTaskTitle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateTaskTitle, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateTaskTitleFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateTaskTitleFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateTaskMarks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateTaskMarks, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateTaskMarksFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.UpdateTaskMarksFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var changeTaskStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.ChangeTaskStatus, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var changeTaskStatusFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.ChangeTaskStatusFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var addUserOnTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.AddUserOnTask, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createTaskComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.CreateTaskComment, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createTaskCommentFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.CreateTaskCommentFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteTaskComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteTaskComment, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteTaskCommentFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.DeleteTaskCommentFailure, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var addUserOnBoard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(boardActionTypes.AddUserOnBoard, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "l2FF":
    /*!************************************************!*\
      !*** ./src/app/root-store/auth/state/index.ts ***!
      \************************************************/

    /*! exports provided: initialAuthState */

    /***/
    function l2FF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialAuthState", function () {
        return initialAuthState;
      });

      var initialAuthState = {
        isAuthenticated: false,
        errorMessage: null,
        isFetching: false,
        success: false,
        data: null
      };
      /***/
    },

    /***/
    "te5j":
    /*!***********************************************************!*\
      !*** ./src/app/root-store/board/effects/board.effects.ts ***!
      \***********************************************************/

    /*! exports provided: BoardEffects */

    /***/
    function te5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardEffects", function () {
        return BoardEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @root-store/boards/actions/boards.actions */
      "jT0b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/core/services/auth.service */
      "7dP1");
      /* harmony import */


      var _app_core_services_board_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/core/services/board.service */
      "NaJt");
      /* harmony import */


      var _app_core_services_task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/core/services/task.service */
      "zCBn");

      var BoardEffects = function BoardEffects(actions$, store, router, as, boardService, taskService) {
        var _this7 = this;

        _classCallCheck(this, BoardEffects);

        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.as = as;
        this.boardService = boardService;
        this.taskService = taskService;
        this.loadBoard$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref30) {
          var payload = _ref30.payload;
          return _this7.boardService.getBoard(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref31) {
            var data = _ref31.data;
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardSuccess"]({
              payload: data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardFailure"]({
              payload: error
            }));
          }));
        }));
        this.updateBoardTitle$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardTitle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref32) {
          var payload = _ref32.payload;
          var title = payload.title,
              boardId = payload.boardId;
          return _this7.boardService.updateBoardTitle(boardId, title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
            return [_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardTitleSuccess"]({
              payload: title
            }), _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_5__["loadBoards"]()];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardFailure"]({
              payload: error
            }));
          }));
        }));
        this.deleteBoard$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteBoard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref33) {
          var payload = _ref33.payload;
          return _this7.boardService.deleteBoard(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            _this7.router.navigate(['/']);

            return _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_5__["loadBoards"]();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["deleteBoardFailure"]({
              payload: error
            }));
          }));
        }));
        this.dnd$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["dragAndDrop"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref34) {
          var payload = _ref34.payload;
          return _this7.taskService.dnd(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref35) {
            var data = _ref35.data;
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardState"]({
              payload: data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: payload.boardId
            }));
          }));
        }));
        this.addUserOnTask$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["addUserOnTask"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref36) {
          var payload = _ref36.payload;
          var userId = payload.userId,
              taskId = payload.taskId,
              boardId = payload.boardId;
          return _this7.taskService.addUserOnTask({
            userId: userId
          }, taskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoard"]({
              payload: boardId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardFailure"]({
              payload: error
            }));
          }));
        }));
        this.addUserOnBoard$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["addUserOnBoard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref37) {
          var payload = _ref37.payload;
          var userId = payload.userId,
              role = payload.role,
              boardId = payload.boardId;
          return _this7.boardService.addUserOnBoard({
            userId: userId,
            role: role
          }, boardId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref38) {
            var data = _ref38.data;
            return _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["updateBoardState"]({
              payload: data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_4__["loadBoardFailure"]({
              payload: error
            }));
          }));
        }));
      };

      BoardEffects.ɵfac = function BoardEffects_Factory(t) {
        return new (t || BoardEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_core_services_board_service__WEBPACK_IMPORTED_MODULE_10__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"]));
      };

      BoardEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: BoardEffects,
        factory: BoardEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardEffects.prototype, "loadBoard$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardEffects.prototype, "updateBoardTitle$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardEffects.prototype, "deleteBoard$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardEffects.prototype, "dnd$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardEffects.prototype, "addUserOnTask$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], BoardEffects.prototype, "addUserOnBoard$", void 0);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-pages-module */
          "pages-pages-module").then(__webpack_require__.bind(null,
          /*! ./pages/pages.module */
          "dgmN")).then(function (m) {
            return m.PagesModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          enableTracing: false
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wmMX":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/delete-button/delete-button.component.ts ***!
      \****************************************************************************/

    /*! exports provided: DeleteButtonComponent */

    /***/
    function wmMX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteButtonComponent", function () {
        return DeleteButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DeleteButtonComponent = /*#__PURE__*/function () {
        function DeleteButtonComponent() {
          _classCallCheck(this, DeleteButtonComponent);
        }

        _createClass(DeleteButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeleteButtonComponent;
      }();

      DeleteButtonComponent.ɵfac = function DeleteButtonComponent_Factory(t) {
        return new (t || DeleteButtonComponent)();
      };

      DeleteButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteButtonComponent,
        selectors: [["app-delete-button"]],
        inputs: {
          classes: "classes"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "delete-button-wrap"], [1, "delete-button", 3, "ngClass"]],
        template: function DeleteButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "delete-button--" + ctx.classes);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".delete-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 3px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.delete-button[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n.delete-button--white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.delete-button--white[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.5);\n}\n.delete-button--grey[_ngcontent-%COMP%] {\n  color: #6b778c;\n}\n.delete-button--grey[_ngcontent-%COMP%]:hover {\n  background: #dfe1e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGVsZXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUpGO0FBTUU7RUFDRSxnQkNkVTtBRFVkO0FBT0U7RUFDRSxXQ2xCVTtBRGFkO0FBT0k7RUFDRSw4QkFBQTtBQUxOO0FBU0U7RUFDRSxjQ2RhO0FET2pCO0FBU0k7RUFDRSxtQkNoQlc7QURTakIiLCJmaWxlIjoiZGVsZXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLmRlbGV0ZS1idXR0b24td3JhcCB7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gIH1cblxuICAmLS13aGl0ZSB7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsYWNrLCAwLjUpO1xuICAgIH1cbiAgfVxuXG4gICYtLWdyZXkge1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS01MDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmV5LTIwMDtcbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibGFjay04MDA6ICMyMjI7XG5cbiRjb2xvci1ibHVlLTkwMDogIzA5MWU0MjtcbiRjb2xvci1ibHVlLTgwMDogIzE3MmI0ZDtcbiRjb2xvci1ibHVlLTcwMDogIzAyNmFhNztcbiRjb2xvci1ibHVlLTYwMDogIzAwNzliZjtcbiRjb2xvci1ibHVlLTEwMDogI2U0ZjBmNjtcblxuJGNvbG9yLWdyZXktODAwOiAjMzIzMjMyO1xuJGNvbG9yLWdyZXktNjAwOiAjOGQ4ZDhkO1xuJGNvbG9yLWdyZXktNTAwOiAjNmI3NzhjO1xuJGNvbG9yLWdyZXktMjAwOiAjZGZlMWU2O1xuJGNvbG9yLWdyZXktMTAwOiAjZjRmNWY3O1xuXG4kY29sb3ItZ3JlZW46ICM1YWFjNDQ7XG5cbiRtYXJrLWNvbG9yLWdyZWVuOiAjNTE5ODM5O1xuJG1hcmstY29sb3IteWVsbG93OiAjZjJkNjAwO1xuJG1hcmstY29sb3Itb3JhbmdlOiAjZmY5ZjFhO1xuJG1hcmstY29sb3ItcmVkOiAjZWI1YTQ2O1xuJG1hcmstY29sb3ItcHVycGxlOiAjYzM3N2UwO1xuJG1hcmstY29sb3ItYmx1ZTogIzAwNzliZjtcblxuJGNvbG9yLXJlZDogI2ViNWE0NjtcblxuJGNvbG9yLWxpZ2h0LWdyZXktMTAwOiAjMDkxZTQyO1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzLyc7XG5cbkBtaXhpbiBmb250LWZhY2UoICRuYW1lLCAkZGlyLCAkcGF0aCwgJHR5cGUpIHtcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICRuYW1lO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvJyArICRkaXIgKyAnLycgKyAkbmFtZSArICRwYXRoKSBmb3JtYXQoJHR5cGUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG5cbkBtaXhpbiBmb250KCRmYW1pbHksICRzaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkZmFtaWx5LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6ICRzaXplO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "yBkz":
    /*!*************************************************!*\
      !*** ./src/app/core/services/column.service.ts ***!
      \*************************************************/

    /*! exports provided: ColumnService */

    /***/
    function yBkz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnService", function () {
        return ColumnService;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ColumnService = /*#__PURE__*/function () {
        function ColumnService(http) {
          _classCallCheck(this, ColumnService);

          this.http = http;
        }

        _createClass(ColumnService, [{
          key: "createColumn",
          value: function createColumn(boardId, title) {
            return this.http.post("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/columns/").concat(boardId), {
              title: title
            });
          }
        }, {
          key: "deleteColumn",
          value: function deleteColumn(columnId) {
            return this.http["delete"]("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/columns/").concat(columnId));
          }
        }, {
          key: "updateColumnTitle",
          value: function updateColumnTitle(columnId, title) {
            return this.http.put("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/columns/").concat(columnId), {
              title: title
            });
          }
        }]);

        return ColumnService;
      }();

      ColumnService.ɵfac = function ColumnService_Factory(t) {
        return new (t || ColumnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ColumnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ColumnService,
        factory: ColumnService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zCBn":
    /*!***********************************************!*\
      !*** ./src/app/core/services/task.service.ts ***!
      \***********************************************/

    /*! exports provided: TaskService */

    /***/
    function zCBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TaskService = /*#__PURE__*/function () {
        function TaskService(http) {
          _classCallCheck(this, TaskService);

          this.http = http;
        }

        _createClass(TaskService, [{
          key: "createTask",
          value: function createTask(columnId, task) {
            return this.http.post("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks/").concat(columnId), {
              task: task
            });
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(taskId) {
            return this.http["delete"]("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks/").concat(taskId));
          }
        }, {
          key: "updateTaskTitle",
          value: function updateTaskTitle(taskId, task) {
            return this.http.put("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks/").concat(taskId), {
              task: task
            });
          }
        }, {
          key: "updateTaskMarks",
          value: function updateTaskMarks(taskId, mark) {
            return this.http.patch("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks/marks/").concat(taskId), {
              mark: mark
            });
          }
        }, {
          key: "changeTaskStatus",
          value: function changeTaskStatus(taskId, status) {
            return this.http.patch("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks/status/").concat(taskId), {
              status: status
            });
          }
        }, {
          key: "addUserOnTask",
          value: function addUserOnTask(data, taskId) {
            return this.http.patch("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks/").concat(taskId), data);
          }
        }, {
          key: "dnd",
          value: function dnd(data) {
            return this.http.patch("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/tasks"), Object.assign({}, data));
          }
        }]);

        return TaskService;
      }();

      TaskService.ɵfac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TaskService,
        factory: TaskService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zJym":
    /*!***********************************************************!*\
      !*** ./src/app/shared/components/loader/loader.module.ts ***!
      \***********************************************************/

    /*! exports provided: LoaderModule */

    /***/
    function zJym(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderModule", function () {
        return LoaderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./loader.component */
      "668k");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderModule = function LoaderModule() {
        _classCallCheck(this, LoaderModule);
      };

      LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: LoaderModule
      });
      LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function LoaderModule_Factory(t) {
          return new (t || LoaderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoaderModule, {
          declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]],
          exports: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map