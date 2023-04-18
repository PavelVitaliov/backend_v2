(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["board-board-module"], {
    /***/
    "0LJv":
    /*!**************************************************************!*\
      !*** ./src/app/root-store/board/selectors/task.selectors.ts ***!
      \**************************************************************/

    /*! exports provided: getTaskComments, getTaskLogs, getTaskUsers, getTaskField */

    /***/
    function LJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTaskComments", function () {
        return getTaskComments;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTaskLogs", function () {
        return getTaskLogs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTaskUsers", function () {
        return getTaskUsers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTaskField", function () {
        return getTaskField;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var selectBoards = function selectBoards(state) {
        return state.board;
      };

      var getTaskComments = function getTaskComments(columnId, taskId) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (_ref) {
          var board = _ref.board;

          var _board$columns$find = board.columns.find(function (column) {
            if (column._id === columnId) {
              return column;
            }
          }),
              tasks = _board$columns$find.tasks;

          var _tasks$find = tasks.find(function (task) {
            if (task._id === taskId) {
              return task;
            }
          }),
              comments = _tasks$find.comments;

          return comments;
        });
      };

      var getTaskLogs = function getTaskLogs(columnId, taskId) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (_ref2) {
          var board = _ref2.board;

          var _board$columns$find2 = board.columns.find(function (column) {
            if (column._id === columnId) {
              return column;
            }
          }),
              tasks = _board$columns$find2.tasks;

          var _tasks$find2 = tasks.find(function (task) {
            if (task._id === taskId) {
              return task;
            }
          }),
              logs = _tasks$find2.logs;

          return logs;
        });
      };

      var getTaskUsers = function getTaskUsers(columnId, taskId) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (_ref3) {
          var board = _ref3.board;

          var _board$columns$find3 = board.columns.find(function (column) {
            if (column._id === columnId) {
              return column;
            }
          }),
              tasks = _board$columns$find3.tasks;

          var _tasks$find3 = tasks.find(function (task) {
            if (task._id === taskId) {
              return task;
            }
          }),
              users = _tasks$find3.users;

          return users;
        });
      };

      var getTaskField = function getTaskField(columnId, taskId, fieldName) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (_ref4) {
          var board = _ref4.board;

          var _board$columns$find4 = board.columns.find(function (column) {
            if (column._id === columnId) {
              return column;
            }
          }),
              tasks = _board$columns$find4.tasks;

          var task = tasks.find(function (task) {
            if (task._id === taskId) {
              return task;
            }
          });
          return task[fieldName];
        });
      };
      /***/

    },

    /***/
    "4on6":
    /*!*****************************************************!*\
      !*** ./src/app/pages/board/board-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: BoardRoutingModule */

    /***/
    function on6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardRoutingModule", function () {
        return BoardRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_pages_board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/pages/board/board.component */
      "9ZRd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _app_pages_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]
      }];

      var BoardRoutingModule = function BoardRoutingModule() {
        _classCallCheck(this, BoardRoutingModule);
      };

      BoardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: BoardRoutingModule
      });
      BoardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function BoardRoutingModule_Factory(t) {
          return new (t || BoardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BoardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "56pH":
    /*!***************************************************************!*\
      !*** ./src/app/root-store/board/selectors/board.selectors.ts ***!
      \***************************************************************/

    /*! exports provided: getBoardState, getBoardColumns, getBoard */

    /***/
    function pH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBoardState", function () {
        return getBoardState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBoardColumns", function () {
        return getBoardColumns;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBoard", function () {
        return getBoard;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var selectBoards = function selectBoards(state) {
        return state.board;
      };

      var getBoardState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (boardState) {
        return boardState;
      });
      var getBoardColumns = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (_ref5) {
        var board = _ref5.board;
        return (board === null || board === void 0 ? void 0 : board.columns) || [];
      });
      var getBoard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBoards, function (_ref6) {
        var board = _ref6.board;
        return board;
      });
      /***/
    },

    /***/
    "82i8":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/board/components/column/column.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ColumnComponent */

    /***/
    function i8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnComponent", function () {
        return ColumnComponent;
      });
      /* harmony import */


      var _app_pages_board_components_column_services_column_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/pages/board/components/column/services/column.service */
      "SZ8h");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/components/delete-button/delete-button.component */
      "wmMX");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../modules/editor/editor.component */
      "yvq4");
      /* harmony import */


      var _componens_task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./componens/task/task.component */
      "yuLS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ColumnComponent_h5_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColumnComponent_h5_4_Template_h5_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.openEditor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.column == null ? null : ctx_r0.column.title);
        }
      }

      function ColumnComponent_app_editor_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-editor", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blurAction", function ColumnComponent_app_editor_6_Template_app_editor_blurAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.onEditTitle();
          })("enterAction", function ColumnComponent_app_editor_6_Template_app_editor_enterAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.onEditTitle();
          })("escAction", function ColumnComponent_app_editor_6_Template_app_editor_escAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.keyEsc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formContromName", ctx_r1.columnTitleControl);
        }
      }

      function ColumnComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-task", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var task_r11 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("task", task_r11)("columnId", ctx_r2.column._id)("boardId", ctx_r2.boardId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-task-id", task_r11._id);
        }
      }

      function ColumnComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColumnComponent_div_13_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.openCreator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ColumnComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-editor", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("enterAction", function ColumnComponent_div_15_Template_app_editor_enterAction_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.sendCreateTask();
          })("escAction", function ColumnComponent_div_15_Template_app_editor_escAction_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r16.cancelCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColumnComponent_div_15_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.sendCreateTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-delete-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColumnComponent_div_15_Template_app_delete_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.cancelCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formContromName", ctx_r4.newTaskTitleControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("classes", "grey");
        }
      }

      var ColumnComponent = /*#__PURE__*/function () {
        function ColumnComponent(store, fb, columnService) {
          _classCallCheck(this, ColumnComponent);

          this.store = store;
          this.fb = fb;
          this.columnService = columnService;
          this.columnTitleControl = this.fb.control('');
          this.newTaskTitleControl = this.fb.control('');
        }

        _createClass(ColumnComponent, [{
          key: "columnData",
          set: function set(column) {
            this._column = Object.assign(Object.assign({}, column), {
              tasks: _toConsumableArray(column.tasks)
            });
          }
        }, {
          key: "column",
          get: function get() {
            return this._column;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isOpenEditior$ = this.columnService.getIsOpenEditor();
            this.isOpenCreator$ = this.columnService.getIsOpenCreator();
          }
        }, {
          key: "drop",
          value: function drop(event) {
            var taskId = event.item.element.nativeElement.parentElement.getAttribute('aria-task-id');
            var sourceCoumnId = event.previousContainer.element.nativeElement.getAttribute('column-id');
            var destinationCoumnId = event.container.element.nativeElement.getAttribute('column-id');

            if (event.previousIndex === event.currentIndex && sourceCoumnId === destinationCoumnId) {
              return;
            }

            var payload = {
              source: {
                droppableId: sourceCoumnId,
                index: event.previousIndex
              },
              destination: {
                droppableId: destinationCoumnId,
                index: event.currentIndex
              },
              boardId: this.boardId,
              taskId: taskId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_1__["dragAndDrop"]({
              payload: payload
            }));
          }
        }, {
          key: "openEditor",
          value: function openEditor() {
            this.columnService.setIsOpenEditor(true);
            this.columnTitleControl.patchValue(this.column.title);
          }
        }, {
          key: "onEditTitle",
          value: function onEditTitle() {
            if (this.columnTitleControl.value === this.column.title) {
              this.closeEditor();
              return;
            }

            if (!(this.columnTitleControl.value.trim && this.columnTitleControl.value.trim())) {
              this.columnTitleControl.patchValue(this.column.title);
              this.closeEditor();
              return;
            }

            var payload = {
              title: this.columnTitleControl.value,
              columnId: this.column._id
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_1__["updateColumnTitle"]({
              payload: payload
            }));
            this.closeEditor();
          }
        }, {
          key: "keyEsc",
          value: function keyEsc() {
            this.columnTitleControl.patchValue(this.column.title);
            this.closeEditor();
          }
        }, {
          key: "openCreator",
          value: function openCreator() {
            this.columnService.setIsOpenCreator(true);
          }
        }, {
          key: "cancelCreate",
          value: function cancelCreate() {
            this.newTaskTitleControl.patchValue('');
            this.closeCreator();
          }
        }, {
          key: "sendCreateTask",
          value: function sendCreateTask() {
            var _a;

            if (!((_a = this.newTaskTitleControl.value) === null || _a === void 0 ? void 0 : _a.trim())) {
              this.newTaskTitleControl.patchValue('');
              this.closeCreator();
              return;
            }

            var payload = {
              columnId: this.column._id,
              task: this.newTaskTitleControl.value,
              boardId: this.boardId
            };
            this.newTaskTitleControl.patchValue('');
            this.closeCreator();
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_1__["createTask"]({
              payload: payload
            }));
          }
        }, {
          key: "deleteColumn",
          value: function deleteColumn() {
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_1__["deleteColumn"]({
              payload: this.column._id
            }));
          }
        }, {
          key: "closeEditor",
          value: function closeEditor() {
            this.columnService.setIsOpenEditor(false);
          }
        }, {
          key: "closeCreator",
          value: function closeCreator() {
            this.columnService.setIsOpenCreator(false);
          }
        }, {
          key: "trackById",
          value: function trackById(index, element) {
            return element._id;
          }
        }]);

        return ColumnComponent;
      }();

      ColumnComponent.ɵfac = function ColumnComponent_Factory(t) {
        return new (t || ColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_pages_board_components_column_services_column_service__WEBPACK_IMPORTED_MODULE_0__["ColumnService"]));
      };

      ColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ColumnComponent,
        selectors: [["app-column"]],
        inputs: {
          columnData: "columnData",
          boardId: "boardId"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_app_pages_board_components_column_services_column_service__WEBPACK_IMPORTED_MODULE_0__["ColumnService"]])],
        decls: 17,
        vars: 17,
        consts: [[1, "column-wrap"], [1, "column"], [1, "column-header"], [1, "column-header__title-wrap"], ["class", "column-header__title", 3, "click", 4, "ngIf"], [3, "formContromName", "blurAction", "enterAction", "escAction", 4, "ngIf"], [3, "classes", "click"], [1, "column-body"], ["cdkDropList", "", 1, "tasks-wrap", 3, "cdkDropListData", "cdkDropListDropped"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "column-footer"], [3, "click", 4, "ngIf"], ["class", "column-footer-inner", 4, "ngIf"], [1, "column-header__title", 3, "click"], [3, "formContromName", "blurAction", "enterAction", "escAction"], [3, "task", "columnId", "boardId"], [3, "click"], [1, "column-footer-inner"], [3, "formContromName", "enterAction", "escAction"], [1, "column-footer-inner__btns"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function ColumnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ColumnComponent_h5_4_Template, 2, 1, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ColumnComponent_app_editor_6_Template, 1, 1, "app-editor", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-delete-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColumnComponent_Template_app_delete_button_click_8_listener() {
              return ctx.deleteColumn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function ColumnComponent_Template_div_cdkDropListDropped_10_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ColumnComponent_ng_container_11_Template, 2, 4, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ColumnComponent_div_13_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ColumnComponent_div_15_Template, 6, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, ctx.isOpenEditior$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, ctx.isOpenEditior$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("classes", "gray");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.column.tasks);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("column-id", ctx.column._id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.column == null ? null : ctx.column.tasks)("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 13, ctx.isOpenCreator$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 15, ctx.isOpenCreator$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_6__["DeleteButtonComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"], _componens_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".column-wrap[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  min-width: 272px;\n  height: 100%;\n  position: relative;\n}\n.column-wrap[_ngcontent-%COMP%]:first-child {\n  margin-left: 10px;\n}\n.column-wrap[_ngcontent-%COMP%]:last-child {\n  margin-right: 10px;\n}\n.column-wrap[_ngcontent-%COMP%]:last-child::after {\n  content: \"\";\n  width: 10px;\n  height: 1px;\n  position: absolute;\n  left: 100%;\n  top: 0;\n}\n.column[_ngcontent-%COMP%] {\n  background-color: #dfe1e6;\n  border-radius: 3px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  position: relative;\n  white-space: normal;\n  max-width: 272px;\n}\n.column-header[_ngcontent-%COMP%] {\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  position: relative;\n  padding: 5px 8px;\n  cursor: text;\n}\n.column-header__title[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #172b4d;\n  width: 100%;\n  margin: 0;\n}\n.column-header__title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.column-header__input[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.column-header[_ngcontent-%COMP%]     .delete-button-wrap {\n  display: none;\n}\n.column-header[_ngcontent-%COMP%]:hover     .delete-button-wrap {\n  display: flex;\n}\n.column-body[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  margin: 0 5px;\n}\n.column-footer[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 5px 8px 8px;\n  position: relative;\n  min-height: 20px;\n}\n.column-footer-inner__btns[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbHVtbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUFGTjtBQU9BO0VBQ0UseUJDZGU7RURlZixrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFKRjtBQU1FO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsY0M1Q2E7RUQ2Q2IsV0FBQTtFQVNBLFNBQUE7QUFaSjtBQUtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBSE47QUFTRTtFQUNFLGVBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtBQVJKO0FBWUk7RUFDRSxhQUFBO0FBVk47QUFlQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBWkY7QUFlQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWdCRTtFQUNFLGFBQUE7QUFiSiIsImZpbGUiOiJjb2x1bW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5jb2x1bW4td3JhcCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIG1pbi13aWR0aDogMjcycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9XG59XG5cbi5jb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS0yMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXgtd2lkdGg6IDI3MnB4O1xufVxuXG4uY29sdW1uLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGN1cnNvcjogdGV4dDtcblxuICAmX190aXRsZSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBjb2xvcjogJGNvbG9yLWJsdWUtODAwO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJi13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgJl9faW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAuZGVsZXRlLWJ1dHRvbi13cmFwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgOjpuZy1kZWVwIC5kZWxldGUtYnV0dG9uLXdyYXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cblxuLmNvbHVtbi1ib2R5IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5jb2x1bW4tZm9vdGVyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmc6IDVweCA4cHggOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbi5jb2x1bW4tZm9vdGVyLWlubmVyIHtcbiAgJl9fYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuIiwiJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWJsYWNrLTgwMDogIzIyMjtcblxuJGNvbG9yLWJsdWUtOTAwOiAjMDkxZTQyO1xuJGNvbG9yLWJsdWUtODAwOiAjMTcyYjRkO1xuJGNvbG9yLWJsdWUtNzAwOiAjMDI2YWE3O1xuJGNvbG9yLWJsdWUtNjAwOiAjMDA3OWJmO1xuJGNvbG9yLWJsdWUtMTAwOiAjZTRmMGY2O1xuXG4kY29sb3ItZ3JleS04MDA6ICMzMjMyMzI7XG4kY29sb3ItZ3JleS02MDA6ICM4ZDhkOGQ7XG4kY29sb3ItZ3JleS01MDA6ICM2Yjc3OGM7XG4kY29sb3ItZ3JleS0yMDA6ICNkZmUxZTY7XG4kY29sb3ItZ3JleS0xMDA6ICNmNGY1Zjc7XG5cbiRjb2xvci1ncmVlbjogIzVhYWM0NDtcblxuJG1hcmstY29sb3ItZ3JlZW46ICM1MTk4Mzk7XG4kbWFyay1jb2xvci15ZWxsb3c6ICNmMmQ2MDA7XG4kbWFyay1jb2xvci1vcmFuZ2U6ICNmZjlmMWE7XG4kbWFyay1jb2xvci1yZWQ6ICNlYjVhNDY7XG4kbWFyay1jb2xvci1wdXJwbGU6ICNjMzc3ZTA7XG4kbWFyay1jb2xvci1ibHVlOiAjMDA3OWJmO1xuXG4kY29sb3ItcmVkOiAjZWI1YTQ2O1xuXG4kY29sb3ItbGlnaHQtZ3JleS0xMDA6ICMwOTFlNDI7XG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMvJztcblxuQG1peGluIGZvbnQtZmFjZSggJG5hbWUsICRkaXIsICRwYXRoLCAkdHlwZSkge1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJG5hbWU7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy8nICsgJGRpciArICcvJyArICRuYW1lICsgJHBhdGgpIGZvcm1hdCgkdHlwZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuQG1peGluIGZvbnQoJGZhbWlseSwgJHNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRmYW1pbHksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "9ZRd":
    /*!************************************************!*\
      !*** ./src/app/pages/board/board.component.ts ***!
      \************************************************/

    /*! exports provided: BoardComponent */

    /***/
    function ZRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
        return BoardComponent;
      });
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _root_store_board_selectors_board_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @root-store/board/selectors/board.selectors */
      "56pH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_board_header_board_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/board-header/board-header.component */
      "h/5q");
      /* harmony import */


      var _components_column_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/column/column.component */
      "82i8");
      /* harmony import */


      var _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../modules/editor/editor.component */
      "yvq4");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared/components/loader/loader.component */
      "668k");

      function BoardComponent_app_board_header_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-board-header", 9);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boardId", ctx_r0.boardId);
        }
      }

      function BoardComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnData", column_r5)("boardId", ctx_r1.boardId);
        }
      }

      function BoardComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardComponent_div_8_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.openCreator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-editor", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blurAction", function BoardComponent_div_9_Template_app_editor_blurAction_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.onCreateColumn();
          })("escAction", function BoardComponent_div_9_Template_app_editor_escAction_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.closeCreator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formContromName", ctx_r3.columnTitleControl);
        }
      }

      function BoardComponent_app_loader_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
        }
      }

      var BoardComponent = /*#__PURE__*/function () {
        function BoardComponent(activateRoute, store, fb) {
          _classCallCheck(this, BoardComponent);

          this.activateRoute = activateRoute;
          this.store = store;
          this.fb = fb;
          this.columnTitleControl = this.fb.control('');
          this.isOpenCreate = false;
        }

        _createClass(BoardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.boardId = this.activateRoute.snapshot.params.id;
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_0__["loadBoard"]({
              payload: this.boardId
            }));
            this.boardState$ = this.store.select(_root_store_board_selectors_board_selectors__WEBPACK_IMPORTED_MODULE_1__["getBoardState"]);
            this.boardColumns$ = this.store.select(_root_store_board_selectors_board_selectors__WEBPACK_IMPORTED_MODULE_1__["getBoardColumns"]);
          }
        }, {
          key: "trackById",
          value: function trackById(index, element) {
            return element._id;
          }
        }, {
          key: "openCreator",
          value: function openCreator() {
            this.isOpenCreate = true;
          }
        }, {
          key: "closeCreator",
          value: function closeCreator() {
            this.columnTitleControl.patchValue('');
            this.isOpenCreate = false;
          }
        }, {
          key: "onCreateColumn",
          value: function onCreateColumn() {
            var _a;

            if (!((_a = this.columnTitleControl.value) === null || _a === void 0 ? void 0 : _a.trim())) {
              this.columnTitleControl.patchValue('');
              this.closeCreator();
              return;
            }

            var payload = {
              boardId: this.boardId,
              columnTitle: this.columnTitleControl.value,
              templateColumnId: new Date().getTime().toString()
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_0__["createColumn"]({
              payload: payload
            }));
            this.closeCreator();
          }
        }]);

        return BoardComponent;
      }();

      BoardComponent.ɵfac = function BoardComponent_Factory(t) {
        return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]));
      };

      BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: BoardComponent,
        selectors: [["app-board"]],
        decls: 12,
        vars: 12,
        consts: [["cdkDropListGroup", "", 1, "board-wrap"], [3, "boardId", 4, "ngIf"], [1, "board__columns"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "column-add-wrap"], [1, "column-add"], ["class", "column-add__header", 3, "click", 4, "ngIf"], ["class", "column-add__create", 4, "ngIf"], [4, "ngIf"], [3, "boardId"], [3, "columnData", "boardId"], [1, "column-add__header", 3, "click"], [1, "column-add__create"], [3, "formContromName", "blurAction", "escAction"], ["mat-raised-button", "", "color", "primary"]],
        template: function BoardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BoardComponent_app_board_header_1_Template, 1, 1, "app-board-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BoardComponent_ng_container_4_Template, 2, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BoardComponent_div_8_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BoardComponent_div_9_Template, 4, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BoardComponent_app_loader_10_Template, 1, 0, "app-loader", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
          }

          if (rf & 2) {
            var tmp_0_0 = null;
            var tmp_5_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx.boardState$)) == null ? null : tmp_0_0.isFetching));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx.boardColumns$))("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOpenCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOpenCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, ctx.boardState$)) == null ? null : tmp_5_0.isFetching);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_board_header_board_header_component__WEBPACK_IMPORTED_MODULE_8__["BoardHeaderComponent"], _components_column_column_component__WEBPACK_IMPORTED_MODULE_9__["ColumnComponent"], _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__["EditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".board-wrap[_ngcontent-%COMP%] {\n  background: url('default-background.jpg') center;\n  background-size: cover;\n  height: calc(100vh - 64px);\n}\n\n.board__columns[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  margin-bottom: 8px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-bottom: 8px;\n  position: absolute;\n  top: 125px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n}\n\n.column-add-wrap[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  min-width: 272px;\n  height: 100%;\n  position: relative;\n  padding-right: 10px;\n}\n\n.column-add[_ngcontent-%COMP%] {\n  background-color: rgba(223, 225, 230, 0.7);\n  padding: 10px;\n  border-radius: 3px;\n  transition: background-color 0.2s;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdEQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQURGOztBQUtFO0VBQ0UseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFGSjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0N0Q1k7QURtQ2QiLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5ib2FyZC13cmFwIHtcbiAgYmFja2dyb3VuZDogdXJsKCd+c3JjL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC1iYWNrZ3JvdW5kLmpwZycpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG5cbi5ib2FyZCB7XG4gICZfX2NvbHVtbnMge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTI1cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG4uY29sdW1uLWFkZC13cmFwIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgbWluLXdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jb2x1bW4tYWRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWdyZXktMjAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbn1cbiIsIiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibGFjay04MDA6ICMyMjI7XG5cbiRjb2xvci1ibHVlLTkwMDogIzA5MWU0MjtcbiRjb2xvci1ibHVlLTgwMDogIzE3MmI0ZDtcbiRjb2xvci1ibHVlLTcwMDogIzAyNmFhNztcbiRjb2xvci1ibHVlLTYwMDogIzAwNzliZjtcbiRjb2xvci1ibHVlLTEwMDogI2U0ZjBmNjtcblxuJGNvbG9yLWdyZXktODAwOiAjMzIzMjMyO1xuJGNvbG9yLWdyZXktNjAwOiAjOGQ4ZDhkO1xuJGNvbG9yLWdyZXktNTAwOiAjNmI3NzhjO1xuJGNvbG9yLWdyZXktMjAwOiAjZGZlMWU2O1xuJGNvbG9yLWdyZXktMTAwOiAjZjRmNWY3O1xuXG4kY29sb3ItZ3JlZW46ICM1YWFjNDQ7XG5cbiRtYXJrLWNvbG9yLWdyZWVuOiAjNTE5ODM5O1xuJG1hcmstY29sb3IteWVsbG93OiAjZjJkNjAwO1xuJG1hcmstY29sb3Itb3JhbmdlOiAjZmY5ZjFhO1xuJG1hcmstY29sb3ItcmVkOiAjZWI1YTQ2O1xuJG1hcmstY29sb3ItcHVycGxlOiAjYzM3N2UwO1xuJG1hcmstY29sb3ItYmx1ZTogIzAwNzliZjtcblxuJGNvbG9yLXJlZDogI2ViNWE0NjtcblxuJGNvbG9yLWxpZ2h0LWdyZXktMTAwOiAjMDkxZTQyO1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzLyc7XG5cbkBtaXhpbiBmb250LWZhY2UoICRuYW1lLCAkZGlyLCAkcGF0aCwgJHR5cGUpIHtcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICRuYW1lO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvJyArICRkaXIgKyAnLycgKyAkbmFtZSArICRwYXRoKSBmb3JtYXQoJHR5cGUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG5cbkBtaXhpbiBmb250KCRmYW1pbHksICRzaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkZmFtaWx5LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6ICRzaXplO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "BlEd":
    /*!*************************************************************************!*\
      !*** ./src/app/components/subscibed-users/subscibed-users.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SubscibedUsersComponent */

    /***/
    function BlEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscibedUsersComponent", function () {
        return SubscibedUsersComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SubscibedUsersComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1);
        }
      }

      var SubscibedUsersComponent = /*#__PURE__*/function () {
        function SubscibedUsersComponent() {
          _classCallCheck(this, SubscibedUsersComponent);

          this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
          this.users = [];
        }

        _createClass(SubscibedUsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "trackById",
          value: function trackById(index, element) {
            return element._id;
          }
        }]);

        return SubscibedUsersComponent;
      }();

      SubscibedUsersComponent.ɵfac = function SubscibedUsersComponent_Factory(t) {
        return new (t || SubscibedUsersComponent)();
      };

      SubscibedUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SubscibedUsersComponent,
        selectors: [["app-subscibed-users"]],
        decls: 2,
        vars: 2,
        consts: [[1, "users-list", "list-unstyled"], ["class", "users-list__user", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "users-list__user"]],
        template: function SubscibedUsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubscibedUsersComponent_li_1_Template, 2, 1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users)("ngForTrackBy", ctx.trackById);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".users-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 10px;\n}\n.users-list__user[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdWJzY2liZWQtdXNlcnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQ1ZVO0VEV1YsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSx5QkFBQTtBQURKIiwiZmlsZSI6InN1YnNjaWJlZC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLnVzZXJzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG5cbiAgJl9fdXNlciB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG4iLCIkY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMjIyO1xuXG4kY29sb3ItYmx1ZS05MDA6ICMwOTFlNDI7XG4kY29sb3ItYmx1ZS04MDA6ICMxNzJiNGQ7XG4kY29sb3ItYmx1ZS03MDA6ICMwMjZhYTc7XG4kY29sb3ItYmx1ZS02MDA6ICMwMDc5YmY7XG4kY29sb3ItYmx1ZS0xMDA6ICNlNGYwZjY7XG5cbiRjb2xvci1ncmV5LTgwMDogIzMyMzIzMjtcbiRjb2xvci1ncmV5LTYwMDogIzhkOGQ4ZDtcbiRjb2xvci1ncmV5LTUwMDogIzZiNzc4YztcbiRjb2xvci1ncmV5LTIwMDogI2RmZTFlNjtcbiRjb2xvci1ncmV5LTEwMDogI2Y0ZjVmNztcblxuJGNvbG9yLWdyZWVuOiAjNWFhYzQ0O1xuXG4kbWFyay1jb2xvci1ncmVlbjogIzUxOTgzOTtcbiRtYXJrLWNvbG9yLXllbGxvdzogI2YyZDYwMDtcbiRtYXJrLWNvbG9yLW9yYW5nZTogI2ZmOWYxYTtcbiRtYXJrLWNvbG9yLXJlZDogI2ViNWE0NjtcbiRtYXJrLWNvbG9yLXB1cnBsZTogI2MzNzdlMDtcbiRtYXJrLWNvbG9yLWJsdWU6ICMwMDc5YmY7XG5cbiRjb2xvci1yZWQ6ICNlYjVhNDY7XG5cbiRjb2xvci1saWdodC1ncmV5LTEwMDogIzA5MWU0MjtcblxuJGZvbnQtcGF0aDogJy4uL2Fzc2V0cy9mb250cy8nO1xuXG5AbWl4aW4gZm9udC1mYWNlKCAkbmFtZSwgJGRpciwgJHBhdGgsICR0eXBlKSB7XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAkbmFtZTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzLycgKyAkZGlyICsgJy8nICsgJG5hbWUgKyAkcGF0aCkgZm9ybWF0KCR0eXBlKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuXG5AbWl4aW4gZm9udCgkZmFtaWx5LCAkc2l6ZSkge1xuICBmb250LWZhbWlseTogJGZhbWlseSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "CqzV":
    /*!*******************************************************!*\
      !*** ./src/app/core/utils/permissions/permissions.ts ***!
      \*******************************************************/

    /*! exports provided: actions, roles, isAllow */

    /***/
    function CqzV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "actions", function () {
        return actions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "roles", function () {
        return roles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAllow", function () {
        return isAllow;
      });

      var actions = {
        MODIFY: 'MODIFY',
        DELETE: 'DELETE',
        ASSIGN: 'ASSIGN',
        CREATE: 'CREATE'
      };
      var roles = {
        ADMIN: 'ADMIN',
        DEVELOPER: 'DEVELOPER',
        VIEWER: 'VIEWER'
      };
      var mappings = new Map();
      mappings.set(actions.DELETE, [roles.ADMIN]);
      mappings.set(actions.ASSIGN, [roles.ADMIN]);
      mappings.set(actions.CREATE, [roles.ADMIN, roles.DEVELOPER]);
      mappings.set(actions.MODIFY, [roles.ADMIN, roles.DEVELOPER]);

      var hasPermission = function hasPermission(action, role) {
        var upperAction = action.toUpperCase();

        if (mappings.has(upperAction)) {
          return mappings.get(upperAction).includes(role);
        }

        return false;
      };

      var isAllow = function isAllow(auth, board, actionType) {
        var _a;

        var userId = (_a = auth.data) === null || _a === void 0 ? void 0 : _a.user._id;

        if (userId === (board === null || board === void 0 ? void 0 : board.admin._id)) {
          return hasPermission(actionType, roles.ADMIN);
        }

        if (board === null || board === void 0 ? void 0 : board.developer.some(function (user) {
          return user._id === userId;
        })) {
          return hasPermission(actionType, roles.DEVELOPER);
        }

        if (board === null || board === void 0 ? void 0 : board.viewer.some(function (user) {
          return user._id === userId;
        })) {
          return hasPermission(actionType, roles.VIEWER);
        }

        return false;
      };
      /***/

    },

    /***/
    "DDdM":
    /*!***************************************************************************!*\
      !*** ./src/app/root-store/permissions/selectors/permissions.selectors.ts ***!
      \***************************************************************************/

    /*! exports provided: isAllowDelete, isAllowCreate, isAllowModify, isAllowAssign, isAllowByAction */

    /***/
    function DDdM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAllowDelete", function () {
        return isAllowDelete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAllowCreate", function () {
        return isAllowCreate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAllowModify", function () {
        return isAllowModify;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAllowAssign", function () {
        return isAllowAssign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAllowByAction", function () {
        return isAllowByAction;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/core/utils/permissions/permissions */
      "CqzV");

      var selectState = function selectState(state) {
        return state;
      };

      var isAllowDelete = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (_ref7) {
        var auth = _ref7.auth,
            board = _ref7.board.board;
        return Object(_app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["isAllow"])(auth, board, _app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["actions"].DELETE);
      });
      var isAllowCreate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (_ref8) {
        var auth = _ref8.auth,
            board = _ref8.board.board;
        return Object(_app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["isAllow"])(auth, board, _app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["actions"].CREATE);
      });
      var isAllowModify = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (_ref9) {
        var auth = _ref9.auth,
            board = _ref9.board.board;
        return Object(_app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["isAllow"])(auth, board, _app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["actions"].MODIFY);
      });
      var isAllowAssign = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (_ref10) {
        var auth = _ref10.auth,
            board = _ref10.board.board;
        return Object(_app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["isAllow"])(auth, board, _app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["actions"].ASSIGN);
      });

      var isAllowByAction = function isAllowByAction(action) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (_ref11) {
          var auth = _ref11.auth,
              board = _ref11.board.board;
          return Object(_app_core_utils_permissions_permissions__WEBPACK_IMPORTED_MODULE_1__["isAllow"])(auth, board, action);
        });
      };
      /***/

    },

    /***/
    "EMdX":
    /*!*********************************************!*\
      !*** ./src/app/pages/board/board.module.ts ***!
      \*********************************************/

    /*! exports provided: BoardModule */

    /***/
    function EMdX(module, __webpack_exports__, __webpack_require__) {
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


      var _board_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./board-routing.module */
      "4on6");
      /* harmony import */


      var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/modules/editor/editor.module */
      "BE0I");
      /* harmony import */


      var _board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./board.component */
      "9ZRd");
      /* harmony import */


      var _components_board_header_board_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/board-header/board-header.component */
      "h/5q");
      /* harmony import */


      var _components_column_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/column/column.component */
      "82i8");
      /* harmony import */


      var _app_components_subscibed_users_subscibed_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/components/subscibed-users/subscibed-users.component */
      "BlEd");
      /* harmony import */


      var _components_column_componens_task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/column/componens/task/task.component */
      "yuLS");
      /* harmony import */


      var _app_components_task_editor_dialog_task_editor_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/components/task-editor-dialog/task-editor-dialog.component */
      "nn61");
      /* harmony import */


      var _components_add_board_dialog_add_board_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/add-board-dialog/add-board-dialog.component */
      "yEGt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BoardModule = function BoardModule() {
        _classCallCheck(this, BoardModule);
      };

      BoardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: BoardModule
      });
      BoardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function BoardModule_Factory(t) {
          return new (t || BoardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_3__["EditorModule"], _board_routing_module__WEBPACK_IMPORTED_MODULE_1__["BoardRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](BoardModule, {
          declarations: [_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"], _components_board_header_board_header_component__WEBPACK_IMPORTED_MODULE_5__["BoardHeaderComponent"], _components_column_column_component__WEBPACK_IMPORTED_MODULE_6__["ColumnComponent"], _app_components_subscibed_users_subscibed_users_component__WEBPACK_IMPORTED_MODULE_7__["SubscibedUsersComponent"], _components_column_componens_task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"], _app_components_task_editor_dialog_task_editor_dialog_component__WEBPACK_IMPORTED_MODULE_9__["TaskEditorDialogComponent"], _components_add_board_dialog_add_board_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddBoardDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_3__["EditorModule"], _board_routing_module__WEBPACK_IMPORTED_MODULE_1__["BoardRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "SZ8h":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/board/components/column/services/column.service.ts ***!
      \**************************************************************************/

    /*! exports provided: ColumnService */

    /***/
    function SZ8h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnService", function () {
        return ColumnService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ColumnService = /*#__PURE__*/function () {
        function ColumnService() {
          _classCallCheck(this, ColumnService);

          this.isOpenEditor = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.isOpenCreator = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        }

        _createClass(ColumnService, [{
          key: "setIsOpenEditor",
          value: function setIsOpenEditor(value) {
            this.isOpenEditor.next(value);
          }
        }, {
          key: "getIsOpenEditor",
          value: function getIsOpenEditor() {
            return this.isOpenEditor.asObservable();
          }
        }, {
          key: "setIsOpenCreator",
          value: function setIsOpenCreator(value) {
            this.isOpenCreator.next(value);
          }
        }, {
          key: "getIsOpenCreator",
          value: function getIsOpenCreator() {
            return this.isOpenCreator.asObservable();
          }
        }]);

        return ColumnService;
      }();

      ColumnService.ɵfac = function ColumnService_Factory(t) {
        return new (t || ColumnService)();
      };

      ColumnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ColumnService,
        factory: ColumnService.ɵfac
      });
      /***/
    },

    /***/
    "WWTP":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/board/components/board-header/services/board-header.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: BoardHeaderService */

    /***/
    function WWTP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardHeaderService", function () {
        return BoardHeaderService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BoardHeaderService = /*#__PURE__*/function () {
        function BoardHeaderService() {
          _classCallCheck(this, BoardHeaderService);

          this.isOpenEditor = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        }

        _createClass(BoardHeaderService, [{
          key: "setIsOpenEditor",
          value: function setIsOpenEditor(value) {
            this.isOpenEditor.next(value);
          }
        }, {
          key: "getIsOpenEditor",
          value: function getIsOpenEditor() {
            return this.isOpenEditor.asObservable();
          }
        }]);

        return BoardHeaderService;
      }();

      BoardHeaderService.ɵfac = function BoardHeaderService_Factory(t) {
        return new (t || BoardHeaderService)();
      };

      BoardHeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BoardHeaderService,
        factory: BoardHeaderService.ɵfac
      });
      /***/
    },

    /***/
    "f4AX":
    /*!***********************************************!*\
      !*** ./src/app/core/services/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function f4AX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "getUsers",
          value: function getUsers(name) {
            return this.http.get("".concat(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/users?name=").concat(name));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "h/5q":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/board/components/board-header/board-header.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: BoardHeaderComponent */

    /***/
    function h5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardHeaderComponent", function () {
        return BoardHeaderComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_pages_board_components_add_board_dialog_add_board_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/pages/board/components/add-board-dialog/add-board-dialog.component */
      "yEGt");
      /* harmony import */


      var _app_pages_board_components_board_header_services_board_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/pages/board/components/board-header/services/board-header.service */
      "WWTP");
      /* harmony import */


      var _root_store_board_selectors_board_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/board/selectors/board.selectors */
      "56pH");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _root_store_permissions_selectors_permissions_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @root-store/permissions/selectors/permissions.selectors */
      "DDdM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_components_subscibed_users_subscibed_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @app/components/subscibed-users/subscibed-users.component */
      "BlEd");
      /* harmony import */


      var _app_shared_directives_allow_click_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @app/shared/directives/allow-click.directive */
      "GXsA");
      /* harmony import */


      var _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../modules/editor/editor.component */
      "yvq4");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../shared/components/delete-button/delete-button.component */
      "wmMX");

      function BoardHeaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("allowClick", function BoardHeaderComponent_div_1_Template_div_allowClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r4.openEditor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var tmp_1_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appAllowClick", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r0.allowModify$));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, ctx_r0.board$)) == null ? null : tmp_1_0.title, " ");
        }
      }

      function BoardHeaderComponent_app_editor_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-editor", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blurAction", function BoardHeaderComponent_app_editor_3_Template_app_editor_blurAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r6.onEditTitle();
          })("enterAction", function BoardHeaderComponent_app_editor_3_Template_app_editor_enterAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r8.onEditTitle();
          })("escAction", function BoardHeaderComponent_app_editor_3_Template_app_editor_escAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.keyEsc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formContromName", ctx_r1.boardTitleControl);
        }
      }

      function BoardHeaderComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoardHeaderComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r10.addOnBoard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0434\u043E\u0441\u043A\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function BoardHeaderComponent_app_delete_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-delete-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoardHeaderComponent_app_delete_button_10_Template_app_delete_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r12.deleteBoard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("classes", "white");
        }
      }

      var BoardHeaderComponent = /*#__PURE__*/function () {
        function BoardHeaderComponent(store, fb, boardHeaderService, activateRoute, dialog) {
          _classCallCheck(this, BoardHeaderComponent);

          this.store = store;
          this.fb = fb;
          this.boardHeaderService = boardHeaderService;
          this.activateRoute = activateRoute;
          this.dialog = dialog;
          this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
          this.boardTitleControl = this.fb.control('');
          this.boardTitle = '';
        }

        _createClass(BoardHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.board$ = this.store.select(_root_store_board_selectors_board_selectors__WEBPACK_IMPORTED_MODULE_4__["getBoard"]);
            this.isOpenEditior$ = this.boardHeaderService.getIsOpenEditor();
            this.board$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy)).subscribe(function (board) {
              if (board && board.title) {
                _this.boardTitle = board.title;
              }
            });
            this.allowDelete$ = this.store.select(_root_store_permissions_selectors_permissions_selectors__WEBPACK_IMPORTED_MODULE_6__["isAllowDelete"]);
            this.allowModify$ = this.store.select(_root_store_permissions_selectors_permissions_selectors__WEBPACK_IMPORTED_MODULE_6__["isAllowModify"]);
            this.allowAssign$ = this.store.select(_root_store_permissions_selectors_permissions_selectors__WEBPACK_IMPORTED_MODULE_6__["isAllowAssign"]);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy.next(null);
            this.destroy.complete();
          }
        }, {
          key: "addOnBoard",
          value: function addOnBoard() {
            var _this2 = this;

            var dialogRef = this.dialog.open(_app_pages_board_components_add_board_dialog_add_board_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddBoardDialogComponent"]);
            dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy)).subscribe(function (result) {
              var payload = Object.assign(Object.assign({}, result), {
                boardId: _this2.boardId
              });

              _this2.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_5__["addUserOnBoard"]({
                payload: payload
              }));
            });
          }
        }, {
          key: "openEditor",
          value: function openEditor() {
            this.boardHeaderService.setIsOpenEditor(true);
            this.boardTitleControl.patchValue(this.boardTitle);
          }
        }, {
          key: "onEditTitle",
          value: function onEditTitle() {
            if (this.boardTitleControl.value === this.boardTitle) {
              this.closeEditor();
              return;
            }

            if (!(this.boardTitleControl.value.trim && this.boardTitleControl.value.trim())) {
              this.boardTitleControl.patchValue(this.boardTitle);
              this.closeEditor();
              return;
            }

            var payload = {
              title: this.boardTitleControl.value,
              boardId: this.activateRoute.snapshot.params.id
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_5__["updateBoardTitle"]({
              payload: payload
            }));
            this.closeEditor();
          }
        }, {
          key: "keyEsc",
          value: function keyEsc() {
            this.boardTitleControl.patchValue(this.boardTitle);
            this.closeEditor();
          }
        }, {
          key: "deleteBoard",
          value: function deleteBoard() {
            var boardId = this.activateRoute.snapshot.params.id;
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_5__["deleteBoard"]({
              payload: boardId
            }));
          }
        }, {
          key: "closeEditor",
          value: function closeEditor() {
            this.boardHeaderService.setIsOpenEditor(false);
          }
        }]);

        return BoardHeaderComponent;
      }();

      BoardHeaderComponent.ɵfac = function BoardHeaderComponent_Factory(t) {
        return new (t || BoardHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_pages_board_components_board_header_services_board_header_service__WEBPACK_IMPORTED_MODULE_3__["BoardHeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]));
      };

      BoardHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: BoardHeaderComponent,
        selectors: [["app-board-header"]],
        inputs: {
          boardId: "boardId"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_app_pages_board_components_board_header_services_board_header_service__WEBPACK_IMPORTED_MODULE_3__["BoardHeaderService"]])],
        decls: 12,
        vars: 14,
        consts: [[1, "board-header"], ["class", "board-header__title", 3, "appAllowClick", "allowClick", 4, "ngIf"], [3, "formContromName", "blurAction", "enterAction", "escAction", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "flex-spacer"], [3, "classes", "click", 4, "ngIf"], [1, "board-header__title", 3, "appAllowClick", "allowClick"], [3, "formContromName", "blurAction", "enterAction", "escAction"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [3, "classes", "click"]],
        template: function BoardHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BoardHeaderComponent_div_1_Template, 4, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BoardHeaderComponent_app_editor_3_Template, 1, 1, "app-editor", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BoardHeaderComponent_button_6_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-subscibed-users");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, BoardHeaderComponent_app_delete_button_10_Template, 1, 1, "app-delete-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, ctx.isOpenEditior$));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 6, ctx.isOpenEditior$) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 8, ctx.allowModify$));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, ctx.allowAssign$));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 12, ctx.allowDelete$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _app_components_subscibed_users_subscibed_users_component__WEBPACK_IMPORTED_MODULE_13__["SubscibedUsersComponent"], _app_shared_directives_allow_click_directive__WEBPACK_IMPORTED_MODULE_14__["AllowClickDirective"], _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__["EditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_17__["DeleteButtonComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
        styles: [".board-header[_ngcontent-%COMP%] {\n  background: rgba(0, 121, 191, 0.24);\n  padding: 8px 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.board-header__title[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 3px 5px;\n  color: #fff;\n  margin-right: 5px;\n}\n.board-header__title[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 121, 191, 0.24);\n  cursor: pointer;\n}\n.board-header__icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.board-header__title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.board-header[_ngcontent-%COMP%]   .delete-btn-wrap[_ngcontent-%COMP%] {\n  display: none;\n}\n.board-header[_ngcontent-%COMP%]:hover   .delete-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQ2ZVO0VEZ0JWLGlCQUFBO0FBREo7QUFHSTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQUROO0FBS0U7RUFDRSxXQ3pCVTtBRHNCZDtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0FBTEo7QUFTSTtFQUNFLGFBQUE7QUFQTiIsImZpbGUiOiJib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5ib2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItYmx1ZS02MDAsIDAuNzYpO1xuICBwYWRkaW5nOiA4cHggNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJl9fdGl0bGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogM3B4IDVweDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItYmx1ZS02MDAsIDAuNzYpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2ljb24ge1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIH1cblxuICAmX190aXRsZS13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmRlbGV0ZS1idG4td3JhcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5kZWxldGUtYnRuLXdyYXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cblxuIiwiJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWJsYWNrLTgwMDogIzIyMjtcblxuJGNvbG9yLWJsdWUtOTAwOiAjMDkxZTQyO1xuJGNvbG9yLWJsdWUtODAwOiAjMTcyYjRkO1xuJGNvbG9yLWJsdWUtNzAwOiAjMDI2YWE3O1xuJGNvbG9yLWJsdWUtNjAwOiAjMDA3OWJmO1xuJGNvbG9yLWJsdWUtMTAwOiAjZTRmMGY2O1xuXG4kY29sb3ItZ3JleS04MDA6ICMzMjMyMzI7XG4kY29sb3ItZ3JleS02MDA6ICM4ZDhkOGQ7XG4kY29sb3ItZ3JleS01MDA6ICM2Yjc3OGM7XG4kY29sb3ItZ3JleS0yMDA6ICNkZmUxZTY7XG4kY29sb3ItZ3JleS0xMDA6ICNmNGY1Zjc7XG5cbiRjb2xvci1ncmVlbjogIzVhYWM0NDtcblxuJG1hcmstY29sb3ItZ3JlZW46ICM1MTk4Mzk7XG4kbWFyay1jb2xvci15ZWxsb3c6ICNmMmQ2MDA7XG4kbWFyay1jb2xvci1vcmFuZ2U6ICNmZjlmMWE7XG4kbWFyay1jb2xvci1yZWQ6ICNlYjVhNDY7XG4kbWFyay1jb2xvci1wdXJwbGU6ICNjMzc3ZTA7XG4kbWFyay1jb2xvci1ibHVlOiAjMDA3OWJmO1xuXG4kY29sb3ItcmVkOiAjZWI1YTQ2O1xuXG4kY29sb3ItbGlnaHQtZ3JleS0xMDA6ICMwOTFlNDI7XG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMvJztcblxuQG1peGluIGZvbnQtZmFjZSggJG5hbWUsICRkaXIsICRwYXRoLCAkdHlwZSkge1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJG5hbWU7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy8nICsgJGRpciArICcvJyArICRuYW1lICsgJHBhdGgpIGZvcm1hdCgkdHlwZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuQG1peGluIGZvbnQoJGZhbWlseSwgJHNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRmYW1pbHksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "nn61":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/task-editor-dialog/task-editor-dialog.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: TaskEditorDialogComponent */

    /***/
    function nn61(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskEditorDialogComponent", function () {
        return TaskEditorDialogComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _root_store_auth_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @root-store/auth/selectors/auth.selectors */
      "pnCI");
      /* harmony import */


      var _root_store_board_selectors_board_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @root-store/board/selectors/board.selectors */
      "56pH");
      /* harmony import */


      var _root_store_board_selectors_task_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @root-store/board/selectors/task.selectors */
      "0LJv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../modules/editor/editor.component */
      "yvq4");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../shared/components/delete-button/delete-button.component */
      "wmMX");
      /* harmony import */


      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../shared/components/loader/loader.component */
      "668k");

      function TaskEditorDialogComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_div_5_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r11.openEditor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.taskName, " ");
        }
      }

      function TaskEditorDialogComponent_app_editor_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-editor", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blurAction", function TaskEditorDialogComponent_app_editor_7_Template_app_editor_blurAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r13.onEditTitle();
          })("enterAction", function TaskEditorDialogComponent_app_editor_7_Template_app_editor_enterAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r15.onEditTitle();
          })("escAction", function TaskEditorDialogComponent_app_editor_7_Template_app_editor_escAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r16.keyEsc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formContromName", ctx_r1.taskNameControl);
        }
      }

      function TaskEditorDialogComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", status_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", status_r17, " ");
        }
      }

      function TaskEditorDialogComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r18);
        }
      }

      function TaskEditorDialogComponent_li_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 32);
        }

        if (rf & 2) {
          var mark_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "task-editor-modal__mark--" + mark_r19);
        }
      }

      function TaskEditorDialogComponent_div_28_div_7_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TaskEditorDialogComponent_div_28_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_div_28_div_7_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);

            var mark_r21 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r23.selectMark(mark_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TaskEditorDialogComponent_div_28_div_7_mat_icon_1_Template, 2, 0, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mark_r21 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "marks-modal__item--" + mark_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.isCheckedMark(mark_r21));
        }
      }

      function TaskEditorDialogComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_div_28_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r25.closeMarks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " \u041C\u0435\u0442\u043A\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-delete-button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_div_28_Template_app_delete_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r27.closeMarks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TaskEditorDialogComponent_div_28_div_7_Template, 2, 2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.marksNames)("ngForTrackBy", ctx_r5.trackByName);
        }
      }

      function TaskEditorDialogComponent_ul_47_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_ul_47_li_1_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);

            var comment_r29 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r30.deleteComment(comment_r29._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comment_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comment_r29.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comment_r29.comment);
        }
      }

      function TaskEditorDialogComponent_ul_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TaskEditorDialogComponent_ul_47_li_1_Template, 7, 2, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r6.comments$))("ngForTrackBy", ctx_r6.trackById);
        }
      }

      function TaskEditorDialogComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TaskEditorDialogComponent_ul_58_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var log_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 2, log_r33.date, "short"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](log_r33.action);
        }
      }

      function TaskEditorDialogComponent_ul_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TaskEditorDialogComponent_ul_58_li_1_Template, 6, 5, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r8.tasks$));
        }
      }

      function TaskEditorDialogComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041D\u0435\u0442 \u043B\u043E\u0433\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TaskEditorDialogComponent_app_loader_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
        }
      }

      var TaskEditorDialogComponent = /*#__PURE__*/function () {
        function TaskEditorDialogComponent(fb, store, data) {
          _classCallCheck(this, TaskEditorDialogComponent);

          this.fb = fb;
          this.store = store;
          this.data = data;
          this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
          this.task = this.data.task;
          this.taskName = this.task.task;
          this.marks = _toConsumableArray(this.task.marks) || false;
          this.taskNameControl = this.fb.control('');
          this.taskCommentControl = this.fb.control('');
          this.statusControl = this.fb.control('');
          this.isOpenEditor$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.isOpenMarks$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.marksNames = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];
          this.statuses = ['ready for develop', 'develop', 'on hold', 'review', 'test', 'done'];
        }

        _createClass(TaskEditorDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.store.select(_root_store_auth_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getCurrentUser"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (user) {
              _this3.currantUser = user;
            });
            this.comments$ = this.store.select(_root_store_board_selectors_task_selectors__WEBPACK_IMPORTED_MODULE_6__["getTaskComments"](this.data.columnId, this.task._id));
            this.tasks$ = this.store.select(_root_store_board_selectors_task_selectors__WEBPACK_IMPORTED_MODULE_6__["getTaskLogs"](this.data.columnId, this.task._id));
            this.users$ = this.store.select(_root_store_board_selectors_task_selectors__WEBPACK_IMPORTED_MODULE_6__["getTaskField"](this.data.columnId, this.task._id, 'users')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (users) {
              return users.slice(0, 3).reduce(function (result, user) {
                result.push(user.name[0]);
                return result;
              }, []);
            }));
            this.boardState$ = this.store.select(_root_store_board_selectors_board_selectors__WEBPACK_IMPORTED_MODULE_5__["getBoardState"]);
            this.statusControl.patchValue(this.task.status || '');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.closeEditor();
            this.closeMarks();
            this.destroy.next(null);
            this.destroy.complete();
          }
        }, {
          key: "trackById",
          value: function trackById(index, element) {
            return element._id;
          }
        }, {
          key: "trackByName",
          value: function trackByName(index, element) {
            return element;
          }
        }, {
          key: "openEditor",
          value: function openEditor() {
            this.setIsOpenEditor(true);
            this.taskNameControl.patchValue(this.taskName);
          }
        }, {
          key: "closeEditor",
          value: function closeEditor() {
            this.setIsOpenEditor(false);
          }
        }, {
          key: "onEditTitle",
          value: function onEditTitle() {
            var _a;

            if (this.taskNameControl.value === this.taskName) {
              this.closeEditor();
              return;
            }

            if (!((_a = this.taskNameControl.value) === null || _a === void 0 ? void 0 : _a.trim())) {
              this.taskNameControl.patchValue(this.taskName);
              this.closeEditor();
              return;
            }

            this.taskName = this.taskNameControl.value;
            var payload = {
              task: this.taskNameControl.value,
              taskId: this.task._id,
              boardId: this.data.boardId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_3__["updateTaskTitle"]({
              payload: payload
            }));
            this.closeEditor();
          }
        }, {
          key: "keyEsc",
          value: function keyEsc() {
            this.taskNameControl.patchValue(this.taskName);
            this.closeEditor();
          }
        }, {
          key: "onChangeStatus",
          value: function onChangeStatus() {
            var payload = {
              taskId: this.task._id,
              status: this.statusControl.value,
              boardId: this.data.boardId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_3__["changeTaskStatus"]({
              payload: payload
            }));
          }
        }, {
          key: "isCheckedMark",
          value: function isCheckedMark(value) {
            return this.marks.some(function (mark) {
              return mark === value;
            });
          }
        }, {
          key: "openMarks",
          value: function openMarks() {
            this.setIsOpenMarks(true);
          }
        }, {
          key: "closeMarks",
          value: function closeMarks() {
            this.setIsOpenMarks(false);
          }
        }, {
          key: "selectMark",
          value: function selectMark(value) {
            var isCheckedMark = this.marks.some(function (checkMark) {
              return checkMark === value;
            });

            if (isCheckedMark) {
              this.marks = this.marks.filter(function (checkMark) {
                return checkMark !== value;
              });
            }

            if (!isCheckedMark) {
              this.marks.push(value);
            }

            var payload = {
              mark: value,
              taskId: this.task._id,
              columnId: this.data.columnId,
              boardId: this.data.boardId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_3__["updateTaskMarks"]({
              payload: payload
            }));
          }
        }, {
          key: "createComment",
          value: function createComment() {
            var comment = {
              comment: this.taskCommentControl.value,
              name: this.currantUser.name,
              email: this.currantUser.email
            };
            var payload = {
              comment: comment,
              taskId: this.task._id,
              boardId: this.data.boardId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_3__["createTaskComment"]({
              payload: payload
            }));
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(commentId) {
            this.comments$ = this.store.select(_root_store_board_selectors_task_selectors__WEBPACK_IMPORTED_MODULE_6__["getTaskComments"](this.data.columnId, this.task._id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (comments) {
              return comments.filter(function (comment) {
                return comment._id !== commentId;
              });
            }));
            var payload = {
              commentId: commentId,
              taskId: this.task._id,
              boardId: this.data.boardId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_3__["deleteTaskComment"]({
              payload: payload
            }));
          }
        }, {
          key: "isEmptyComment",
          value: function isEmptyComment() {
            var comment = this.taskCommentControl.value;
            return Boolean(comment && comment.trim && comment.trim().length);
          }
        }, {
          key: "addOnTask",
          value: function addOnTask() {
            var payload = {
              userId: this.currantUser._id,
              taskId: this.task._id,
              boardId: this.data.boardId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_3__["addUserOnTask"]({
              payload: payload
            }));
          }
        }, {
          key: "setIsOpenEditor",
          value: function setIsOpenEditor(value) {
            this.isOpenEditor$.next(value);
          }
        }, {
          key: "setIsOpenMarks",
          value: function setIsOpenMarks(value) {
            this.isOpenMarks$.next(value);
          }
        }]);

        return TaskEditorDialogComponent;
      }();

      TaskEditorDialogComponent.ɵfac = function TaskEditorDialogComponent_Factory(t) {
        return new (t || TaskEditorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      TaskEditorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: TaskEditorDialogComponent,
        selectors: [["app-task-editor-dialog"]],
        decls: 64,
        vars: 35,
        consts: [[1, "task-editor-modal"], [1, "task-editor-modal__row", "task-editor-modal__title-wrap", "task-editor-modal__row--space-between"], ["class", "task-editor-modal__title", 3, "click", 4, "ngIf"], [3, "formContromName", "blurAction", "enterAction", "escAction", 4, "ngIf"], ["appearance", "outline", 1, "task-editor-modal__status"], [3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "task-editor-modal__row", "task-editor-modal__row--inline"], [1, "users-list", "list-unstyled"], ["class", "users-list__user", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "task-editor-modal__subscribe-wrap"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "task-editor-modal__marks-wrap"], [1, "task-editor-modal__marks", "list-unstyled"], ["class", "task-editor-modal__mark", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "task-editor-modal__mark", "task-editor-modal__mark--main", 3, "click"], ["class", "marks-modal-wrap", 4, "ngIf"], [1, "task-editor-modal__row", "task-editor-modal__comment"], [3, "placeholder", "formContromName"], [1, "task-editor-modal__comment__btn"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "task-editor-modal__row"], [1, "task-editor-modal__logs", "logs"], ["hideToggle", "", 1, "task-editor-modal__commetns"], ["class", "comments list-unstyled", 4, "ngIf"], [4, "ngIf"], ["hideToggle", ""], ["class", "logs__list", 4, "ngIf"], [1, "task-editor-modal__title", 3, "click"], [3, "formContromName", "blurAction", "enterAction", "escAction"], [3, "value"], [1, "users-list__user"], [1, "task-editor-modal__mark", 3, "ngClass"], [1, "marks-modal-wrap"], [1, "marks-modal-overlay", 3, "click"], [1, "marks-modal"], [1, "marks-modal__header"], ["classes", "grey", 3, "click"], [1, "marks-modal__list"], ["class", "marks-modal__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "marks-modal__item", 3, "ngClass", "click"], [1, "comments", "list-unstyled"], ["class", "comments__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "comments__item"], [1, "comments__commentator"], [1, "comments__comment"], [1, "comments__delete", 3, "click"], [1, "logs__list"], ["class", "logs__item", 4, "ngFor", "ngForOf"], [1, "logs__item"]],
        template: function TaskEditorDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "note");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TaskEditorDialogComponent_div_5_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TaskEditorDialogComponent_app_editor_7_Template, 1, 1, "app-editor", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function TaskEditorDialogComponent_Template_mat_select_selectionChange_13_listener() {
              return ctx.onChangeStatus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, TaskEditorDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, TaskEditorDialogComponent_li_17_Template, 2, 1, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_Template_button_click_20_listener() {
              return ctx.addOnTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, TaskEditorDialogComponent_li_24_Template, 1, 1, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_Template_li_click_25_listener() {
              return ctx.openMarks();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, TaskEditorDialogComponent_div_28_Template, 8, 2, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "app-editor", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaskEditorDialogComponent_Template_button_click_35_listener() {
              return ctx.createComment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-expansion-panel", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " Comments ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, TaskEditorDialogComponent_ul_47_Template, 3, 4, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](48, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, TaskEditorDialogComponent_div_49_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-expansion-panel", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " Task logs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, TaskEditorDialogComponent_ul_58_Template, 3, 3, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](59, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, TaskEditorDialogComponent_div_60_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, TaskEditorDialogComponent_app_loader_62_Template, 1, 0, "app-loader", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](63, "async");
          }

          if (rf & 2) {
            var tmp_16_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 17, ctx.isOpenEditor$));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 19, ctx.isOpenEditor$));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.statusControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.statuses);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 21, ctx.users$))("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackByName);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 23, ctx.isOpenMarks$));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439...")("formContromName", ctx.taskCommentControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isEmptyComment());

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](48, 25, ctx.comments$).length);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 27, ctx.comments$).length);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](59, 29, ctx.tasks$).length);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 31, ctx.tasks$).length);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](63, 33, ctx.boardState$)) == null ? null : tmp_16_0.isFetching);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__["EditorComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelDescription"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_18__["DeleteButtonComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        styles: [".task-editor-modal[_ngcontent-%COMP%] {\n  min-height: 320px;\n  background: #fff;\n  width: 100%;\n  max-width: 600px;\n  min-width: 540px;\n}\n.task-editor-modal[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.task-editor-modal__title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.task-editor-modal__title-wrap[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.task-editor-modal__title[_ngcontent-%COMP%] {\n  padding: 0 0 0 3px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n}\n.task-editor-modal__row[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n}\n.task-editor-modal__row--inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n}\n.task-editor-modal__row--space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.task-editor-modal__marks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 0;\n  position: relative;\n}\n.task-editor-modal__mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  max-height: 36px;\n  border-radius: 3px;\n  margin-right: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.task-editor-modal__mark[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.task-editor-modal__mark--main[_ngcontent-%COMP%] {\n  background-color: #dfe1e6;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.task-editor-modal__mark--main[_ngcontent-%COMP%]:hover {\n  background: #6b778c;\n}\n.task-editor-modal__mark--main[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.task-editor-modal__mark--green[_ngcontent-%COMP%] {\n  background: #519839;\n}\n.task-editor-modal__mark--yellow[_ngcontent-%COMP%] {\n  background: #f2d600;\n}\n.task-editor-modal__mark--orange[_ngcontent-%COMP%] {\n  background: #ff9f1a;\n}\n.task-editor-modal__mark--red[_ngcontent-%COMP%] {\n  background: #eb5a46;\n}\n.task-editor-modal__mark--purple[_ngcontent-%COMP%] {\n  background: #c377e0;\n}\n.task-editor-modal__mark--blue[_ngcontent-%COMP%] {\n  background: #0079bf;\n}\n.task-editor-modal__status[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding: 0;\n}\n.task-editor-modal__status[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 5px 0 5px 0;\n}\n.task-editor-modal__subscribe-wrap[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.task-editor-modal__comment[_ngcontent-%COMP%]     .editor {\n  width: 100%;\n  margin-bottom: 10px;\n}\n.users-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-flow: row-reverse;\n  margin-right: 10px;\n  margin-bottom: 0;\n}\n.users-list__user[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #dfe1e6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  text-transform: uppercase;\n}\n.marks-modal-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 200px;\n  border-radius: 3px;\n}\n.marks-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n}\n.marks-modal[_ngcontent-%COMP%] {\n  border: 1px solid #dfe1e6;\n  position: relative;\n  z-index: 1;\n  background: #fff;\n  padding: 5px;\n}\n.marks-modal__header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px 5px 20px;\n  border-bottom: 1px solid #dfe1e6;\n}\n.marks-modal__header[_ngcontent-%COMP%]     .delete-button-wrap {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.marks-modal__list[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.marks-modal__item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  height: 32px;\n  max-height: 32px;\n  border-radius: 3px;\n  margin-right: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.marks-modal__item[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.marks-modal__item--green[_ngcontent-%COMP%] {\n  background: #519839;\n}\n.marks-modal__item--yellow[_ngcontent-%COMP%] {\n  background: #f2d600;\n}\n.marks-modal__item--orange[_ngcontent-%COMP%] {\n  background: #ff9f1a;\n}\n.marks-modal__item--red[_ngcontent-%COMP%] {\n  background: #eb5a46;\n}\n.marks-modal__item--purple[_ngcontent-%COMP%] {\n  background: #c377e0;\n}\n.marks-modal__item--blue[_ngcontent-%COMP%] {\n  background: #0079bf;\n}\n.marks-modal__item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: static;\n}\n.comments[_ngcontent-%COMP%] {\n  max-height: 250px;\n  overflow: auto;\n}\n.comments__item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dfe1e6;\n}\n.comments__commentator[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: #0079bf;\n  text-decoration: underline;\n}\n.comments__delete[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n}\n.logs__list[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  overflow: auto;\n  height: 200px;\n}\n.logs[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: static;\n}\n.logs[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrLWVkaXRvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQ0pZO0VES1osV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLFNBQUE7QUFGTjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0k7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUxOO0FBUUk7RUFDRSw4QkFBQTtBQU5OO0FBVUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVRKO0FBWUk7RUFDRSxZQUFBO0FBVk47QUFhSTtFQUNFLHlCQ3pEVztFRDBEWCxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYTjtBQWFNO0VBQ0UsbUJDakVTO0FEc0RqQjtBQWNNO0VBQ0UsMkJBQUE7QUFaUjtBQWdCSTtFQUNFLG1CQ3BFYTtBRHNEbkI7QUFpQkk7RUFDRSxtQkN2RWM7QUR3RHBCO0FBa0JJO0VBQ0UsbUJDMUVjO0FEMERwQjtBQW1CSTtFQUNFLG1CQzdFVztBRDREakI7QUFvQkk7RUFDRSxtQkNoRmM7QUQ4RHBCO0FBcUJJO0VBQ0UsbUJDbkZZO0FEZ0VsQjtBQXlCTTtFQUNFLFVBQUE7QUF2QlI7QUEwQk07RUFDRSxvQkFBQTtBQXhCUjtBQTZCRTtFQUNFLGtCQUFBO0FBM0JKO0FBK0JJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBN0JOO0FBa0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBL0JGO0FBaUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkNuSWE7RURvSWIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSx5QkFBQTtBQS9CSjtBQW1DQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQ2hMWTtFRGlMWixZQUFBO0FBaENGO0FBa0NFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUFoQ0o7QUFrQ0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQWhDTjtBQW9DRTtFQUNFLGVBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBbkNKO0FBcUNJO0VBQ0UsWUFBQTtBQW5DTjtBQXNDSTtFQUNFLG1CQ3RNYTtBRGtLbkI7QUF1Q0k7RUFDRSxtQkN6TWM7QURvS3BCO0FBd0NJO0VBQ0UsbUJDNU1jO0FEc0twQjtBQXlDSTtFQUNFLG1CQy9NVztBRHdLakI7QUEwQ0k7RUFDRSxtQkNsTmM7QUQwS3BCO0FBMkNJO0VBQ0UsbUJDck5ZO0FENEtsQjtBQTRDSTtFQUNFLGdCQUFBO0FBMUNOO0FBK0NBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBNUNGO0FBOENFO0VBQ0UsZ0NBQUE7QUE1Q0o7QUErQ0U7RUFDRSwwQkFBQTtFQUNBLGNDeFBhO0VEeVBiLDBCQUFBO0FBN0NKO0FBb0RFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFsREo7QUF3REU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBckRKO0FBd0RFO0VBQ0UsZ0JBQUE7QUF0REo7QUF5REU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBdkRKIiwiZmlsZSI6InRhc2stZWRpdG9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLnRhc2stZWRpdG9yLW1vZGFsIHtcbiAgbWluLWhlaWdodDogMzIwcHg7XG4gIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi13aWR0aDogNTQwcHg7XG5cbiAgLm1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgJl9fdGl0bGUtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIHRvcDogMTBweDtcbiAgICB9XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgcGFkZGluZzogMCAwIDAgM3B4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICYtLWlubGluZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgfVxuXG4gICAgJi0tc3BhY2UtYmV0d2VlbiB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG5cbiAgJl9fbWFya3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmX19tYXJrIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWF4LWhlaWdodDogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG5cbiAgICAmLS1tYWluIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LTIwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ3JleS01MDA7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ncmVlbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1ncmVlbjtcbiAgICB9XG5cbiAgICAmLS15ZWxsb3cge1xuICAgICAgYmFja2dyb3VuZDogJG1hcmstY29sb3IteWVsbG93O1xuICAgIH1cblxuICAgICYtLW9yYW5nZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1vcmFuZ2U7XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRtYXJrLWNvbG9yLXJlZDtcbiAgICB9XG5cbiAgICAmLS1wdXJwbGUge1xuICAgICAgYmFja2dyb3VuZDogJG1hcmstY29sb3ItcHVycGxlO1xuICAgIH1cblxuICAgICYtLWJsdWUge1xuICAgICAgYmFja2dyb3VuZDogJG1hcmstY29sb3ItYmx1ZTtcbiAgICB9XG4gIH1cblxuICAmX19zdGF0dXMge1xuICAgIDo6bmctZGVlcCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX3N1YnNjcmliZS13cmFwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAmX19jb21tZW50IHtcbiAgICA6Om5nLWRlZXAgLmVkaXRvciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi51c2Vycy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICZfX3VzZXIge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ3JleS0yMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuXG4ubWFya3MtbW9kYWwtd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm1hcmtzLW1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLm1hcmtzLW1vZGFsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWdyZXktMjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuXG4gICZfX2hlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDIwcHggNXB4IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1ncmV5LTIwMDtcblxuICAgIDo6bmctZGVlcCAuZGVsZXRlLWJ1dHRvbi13cmFwIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cblxuICAgICYtLWdyZWVuIHtcbiAgICAgIGJhY2tncm91bmQ6ICRtYXJrLWNvbG9yLWdyZWVuO1xuICAgIH1cblxuICAgICYtLXllbGxvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci15ZWxsb3c7XG4gICAgfVxuXG4gICAgJi0tb3JhbmdlIHtcbiAgICAgIGJhY2tncm91bmQ6ICRtYXJrLWNvbG9yLW9yYW5nZTtcbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgYmFja2dyb3VuZDogJG1hcmstY29sb3ItcmVkO1xuICAgIH1cblxuICAgICYtLXB1cnBsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1wdXJwbGU7XG4gICAgfVxuXG4gICAgJi0tYmx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1ibHVlO1xuICAgIH1cblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIH1cbiAgfVxufVxuXG4uY29tbWVudHMge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgJl9faXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1ncmV5LTIwMDtcbiAgfVxuXG4gICZfX2NvbW1lbnRhdG9yIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjogJGNvbG9yLWJsdWUtNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJl9fY29tbWVudCB7XG5cbiAgfVxuXG4gICZfX2RlbGV0ZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG59XG5cbi5sb2dzIHtcbiAgJl9fbGlzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAubWF0LWljb24ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG4iLCIkY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMjIyO1xuXG4kY29sb3ItYmx1ZS05MDA6ICMwOTFlNDI7XG4kY29sb3ItYmx1ZS04MDA6ICMxNzJiNGQ7XG4kY29sb3ItYmx1ZS03MDA6ICMwMjZhYTc7XG4kY29sb3ItYmx1ZS02MDA6ICMwMDc5YmY7XG4kY29sb3ItYmx1ZS0xMDA6ICNlNGYwZjY7XG5cbiRjb2xvci1ncmV5LTgwMDogIzMyMzIzMjtcbiRjb2xvci1ncmV5LTYwMDogIzhkOGQ4ZDtcbiRjb2xvci1ncmV5LTUwMDogIzZiNzc4YztcbiRjb2xvci1ncmV5LTIwMDogI2RmZTFlNjtcbiRjb2xvci1ncmV5LTEwMDogI2Y0ZjVmNztcblxuJGNvbG9yLWdyZWVuOiAjNWFhYzQ0O1xuXG4kbWFyay1jb2xvci1ncmVlbjogIzUxOTgzOTtcbiRtYXJrLWNvbG9yLXllbGxvdzogI2YyZDYwMDtcbiRtYXJrLWNvbG9yLW9yYW5nZTogI2ZmOWYxYTtcbiRtYXJrLWNvbG9yLXJlZDogI2ViNWE0NjtcbiRtYXJrLWNvbG9yLXB1cnBsZTogI2MzNzdlMDtcbiRtYXJrLWNvbG9yLWJsdWU6ICMwMDc5YmY7XG5cbiRjb2xvci1yZWQ6ICNlYjVhNDY7XG5cbiRjb2xvci1saWdodC1ncmV5LTEwMDogIzA5MWU0MjtcblxuJGZvbnQtcGF0aDogJy4uL2Fzc2V0cy9mb250cy8nO1xuXG5AbWl4aW4gZm9udC1mYWNlKCAkbmFtZSwgJGRpciwgJHBhdGgsICR0eXBlKSB7XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAkbmFtZTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzLycgKyAkZGlyICsgJy8nICsgJG5hbWUgKyAkcGF0aCkgZm9ybWF0KCR0eXBlKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuXG5AbWl4aW4gZm9udCgkZmFtaWx5LCAkc2l6ZSkge1xuICBmb250LWZhbWlseTogJGZhbWlseSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "yEGt":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/board/components/add-board-dialog/add-board-dialog.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: AddBoardDialogComponent */

    /***/
    function yEGt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBoardDialogComponent", function () {
        return AddBoardDialogComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/core/services/user.service */
      "f4AX");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AddBoardDialogComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r2.name, " ");
        }
      }

      var AddBoardDialogComponent = /*#__PURE__*/function () {
        function AddBoardDialogComponent(dialogRef, fb, userService) {
          _classCallCheck(this, AddBoardDialogComponent);

          this.dialogRef = dialogRef;
          this.fb = fb;
          this.userService = userService;
        }

        _createClass(AddBoardDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.addBoardForm = this.fb.group({
              name: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              role: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              userId: this.fb.control('')
            });
            this.filteredOptions$ = this.addBoardForm.controls.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (val) {
              if (typeof val === 'string') {
                return _this4.userService.getUsers(val);
              }

              return _this4.userService.getUsers(val.name);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response.data.users;
            }));
          }
        }, {
          key: "displayProperty",
          value: function displayProperty(value) {
            if (value) {
              return value.name;
            }
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            this.addBoardForm.controls.userId.patchValue(event.option.value._id);
          }
        }, {
          key: "close",
          value: function close(result) {
            this.dialogRef.close(result);
          }
        }, {
          key: "done",
          value: function done() {
            var payload = {
              userId: this.addBoardForm.value.userId,
              role: this.addBoardForm.value.role
            };
            this.close(payload);
          }
        }]);

        return AddBoardDialogComponent;
      }();

      AddBoardDialogComponent.ɵfac = function AddBoardDialogComponent_Factory(t) {
        return new (t || AddBoardDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      AddBoardDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AddBoardDialogComponent,
        selectors: [["app-add-board-dialog"]],
        decls: 23,
        vars: 7,
        consts: [[3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", 3, "matAutocomplete"], ["formControlName", "userId", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "role"], ["value", "developer"], ["value", "viewer"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [3, "value"]],
        template: function AddBoardDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "User name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-autocomplete", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function AddBoardDialogComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddBoardDialogComponent_mat_option_8_Template, 2, 2, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Choose role");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Viewer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBoardDialogComponent_Template_button_click_19_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBoardDialogComponent_Template_button_click_21_listener() {
              return ctx.done();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addBoardForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.displayProperty);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, ctx.filteredOptions$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addBoardForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "yuLS":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/board/components/column/componens/task/task.component.ts ***!
      \********************************************************************************/

    /*! exports provided: TaskComponent */

    /***/
    function yuLS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
        return TaskComponent;
      });
      /* harmony import */


      var _app_components_task_editor_dialog_task_editor_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/components/task-editor-dialog/task-editor-dialog.component */
      "nn61");
      /* harmony import */


      var _root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @root-store/board/actions/board.actions */
      "kf3a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../shared/components/delete-button/delete-button.component */
      "wmMX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function TaskComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 8);
        }

        if (rf & 2) {
          var mark_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "mark--" + mark_r4);
        }
      }

      function TaskComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "remove_red_eye");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.task == null ? null : ctx_r1.task.users.length, " ");
        }
      }

      function TaskComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "mode_comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.task == null ? null : ctx_r2.task.comments == null ? null : ctx_r2.task.comments.length, " ");
        }
      }

      function TaskComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Status: ", ctx_r3.task == null ? null : ctx_r3.task.status, "");
        }
      }

      var TaskComponent = /*#__PURE__*/function () {
        function TaskComponent(dialog, store) {
          _classCallCheck(this, TaskComponent);

          this.dialog = dialog;
          this.store = store;
        }

        _createClass(TaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openDialog",
          value: function openDialog() {
            this.dialog.open(_app_components_task_editor_dialog_task_editor_dialog_component__WEBPACK_IMPORTED_MODULE_0__["TaskEditorDialogComponent"], {
              data: {
                task: this.task,
                columnId: this.columnId,
                boardId: this.boardId
              }
            });
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(event) {
            event.stopPropagation();
            var payload = {
              taskId: this.task._id,
              boardId: this.boardId
            };
            this.store.dispatch(_root_store_board_actions_board_actions__WEBPACK_IMPORTED_MODULE_1__["deleteTask"]({
              payload: payload
            }));
          }
        }, {
          key: "trackById",
          value: function trackById(index, element) {
            return element._id;
          }
        }]);

        return TaskComponent;
      }();

      TaskComponent.ɵfac = function TaskComponent_Factory(t) {
        return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TaskComponent,
        selectors: [["app-task"]],
        inputs: {
          task: "task",
          columnId: "columnId",
          boardId: "boardId"
        },
        decls: 11,
        vars: 7,
        consts: [["cdkDrag", "", 1, "task", 3, "click"], [3, "classes", "click"], [1, "marks-wrap"], ["class", "mark", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "task__title"], [1, "task__icons-wrap"], ["class", "task__icons", 4, "ngIf"], [4, "ngIf"], [1, "mark", 3, "ngClass"], [1, "task__icons"]],
        template: function TaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_div_click_0_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-delete-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_app_delete_button_click_1_listener($event) {
              return ctx.deleteTask($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TaskComponent_div_3_Template, 1, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TaskComponent_div_8_Template, 4, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TaskComponent_div_9_Template, 4, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TaskComponent_div_10_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("classes", "gray");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.task == null ? null : ctx.task.marks)("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.task.task);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.users == null ? null : ctx.task.users.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.comments == null ? null : ctx.task.comments.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.status);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_6__["DeleteButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: [".task[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  margin-bottom: 8px;\n  padding: 5px;\n  position: relative;\n  color: #172b4d;\n  min-height: 54px;\n  display: flex;\n  flex-flow: row wrap;\n}\n.task[_ngcontent-%COMP%]:hover     .delete-button-wrap {\n  display: block;\n}\n.task[_ngcontent-%COMP%]     .delete-button-wrap {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: none;\n}\n.task-inner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.task__marks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  padding-right: 20px;\n}\n.task__mark[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 8px;\n  max-height: 8px;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.task__mark[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.task__mark--green[_ngcontent-%COMP%] {\n  background: #519839;\n}\n.task__mark--yellow[_ngcontent-%COMP%] {\n  background: #f2d600;\n}\n.task__mark--orange[_ngcontent-%COMP%] {\n  background: #ff9f1a;\n}\n.task__mark--red[_ngcontent-%COMP%] {\n  background: #eb5a46;\n}\n.task__mark--purple[_ngcontent-%COMP%] {\n  background: #c377e0;\n}\n.task__mark--blue[_ngcontent-%COMP%] {\n  background: #0079bf;\n}\n.task__title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  overflow: hidden;\n  word-wrap: break-word;\n  color: #172b4d;\n  flex: 1 1 100%;\n}\n.task[_ngcontent-%COMP%]:hover {\n  background: #f4f5f7;\n  text-decoration: none;\n}\n.task[_ngcontent-%COMP%]:hover   .task__edit-wrap[_ngcontent-%COMP%], .task[_ngcontent-%COMP%]:hover   .task__delete-wrap[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.task-icons-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  bottom: 5px;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n.task__icons-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.task__icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n.task__icons[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: auto;\n  width: auto;\n  margin-right: 5px;\n}\n.marks-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  padding-right: 20px;\n}\n.mark[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 8px;\n  max-height: 8px;\n  border-radius: 3px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mark[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.mark--green[_ngcontent-%COMP%] {\n  background: #519839;\n}\n.mark--yellow[_ngcontent-%COMP%] {\n  background: #f2d600;\n}\n.mark--orange[_ngcontent-%COMP%] {\n  background: #ff9f1a;\n}\n.mark--red[_ngcontent-%COMP%] {\n  background: #eb5a46;\n}\n.mark--purple[_ngcontent-%COMP%] {\n  background: #c377e0;\n}\n.mark--blue[_ngcontent-%COMP%] {\n  background: #0079bf;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdGFzay5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkNIWTtFRElaLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ0xlO0VETWYsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlJO0VBQ0UsY0FBQTtBQUZOO0FBTUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUpKO0FBUUU7RUFDRSxXQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUko7QUFVSTtFQUNFLFlBQUE7QUFSTjtBQVdJO0VBQ0UsbUJDckNhO0FENEJuQjtBQVlJO0VBQ0UsbUJDeENjO0FEOEJwQjtBQWFJO0VBQ0UsbUJDM0NjO0FEZ0NwQjtBQWNJO0VBQ0UsbUJDOUNXO0FEa0NqQjtBQWVJO0VBQ0UsbUJDakRjO0FEb0NwQjtBQWdCSTtFQUNFLG1CQ3BEWTtBRHNDbEI7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNDOUVhO0VEK0ViLGNBQUE7QUFoQko7QUFtQkU7RUFDRSxtQkMxRWE7RUQyRWIscUJBQUE7QUFqQko7QUFtQkk7O0VBRUUsbUJBQUE7QUFqQk47QUFxQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBbkJKO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBcEJKO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyQko7QUF1Qkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXJCTjtBQTBCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdkJGO0FBMEJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF2QkY7QUF5QkU7RUFDRSxZQUFBO0FBdkJKO0FBMEJFO0VBQ0UsbUJDcEllO0FENEduQjtBQTJCRTtFQUNFLG1CQ3ZJZ0I7QUQ4R3BCO0FBNEJFO0VBQ0UsbUJDMUlnQjtBRGdIcEI7QUE2QkU7RUFDRSxtQkM3SWE7QURrSGpCO0FBOEJFO0VBQ0UsbUJDaEpnQjtBRG9IcEI7QUErQkU7RUFDRSxtQkNuSmM7QURzSGxCO0FBaUNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBOUJGO0FBbUNBO0VBQ0UsVUFBQTtBQWhDRjtBQW1DQTtFQUNFLHNEQUFBO0FBaENGIiwiZmlsZSI6InRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi50YXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsYWNrLCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogJGNvbG9yLWJsdWUtODAwO1xuICBtaW4taGVpZ2h0OiA1NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIDo6bmctZGVlcCAuZGVsZXRlLWJ1dHRvbi13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCAuZGVsZXRlLWJ1dHRvbi13cmFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAmLWlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21hcmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuXG4gICZfX21hcmsge1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIG1heC1oZWlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgICYtLWdyZWVuIHtcbiAgICAgIGJhY2tncm91bmQ6ICRtYXJrLWNvbG9yLWdyZWVuO1xuICAgIH1cblxuICAgICYtLXllbGxvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci15ZWxsb3c7XG4gICAgfVxuXG4gICAgJi0tb3JhbmdlIHtcbiAgICAgIGJhY2tncm91bmQ6ICRtYXJrLWNvbG9yLW9yYW5nZTtcbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgYmFja2dyb3VuZDogJG1hcmstY29sb3ItcmVkO1xuICAgIH1cblxuICAgICYtLXB1cnBsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1wdXJwbGU7XG4gICAgfVxuXG4gICAgJi0tYmx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1ibHVlO1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgY29sb3I6ICRjb2xvci1ibHVlLTgwMDtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmV5LTEwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAudGFza19fZWRpdC13cmFwLFxuICAgIC50YXNrX19kZWxldGUtd3JhcCB7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gICYtaWNvbnMtd3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAmX19pY29ucy13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9faWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuLm1hcmtzLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFyayB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDhweDtcbiAgbWF4LWhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gICYtLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1ncmVlbjtcbiAgfVxuXG4gICYtLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZDogJG1hcmstY29sb3IteWVsbG93O1xuICB9XG5cbiAgJi0tb3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kOiAkbWFyay1jb2xvci1vcmFuZ2U7XG4gIH1cblxuICAmLS1yZWQge1xuICAgIGJhY2tncm91bmQ6ICRtYXJrLWNvbG9yLXJlZDtcbiAgfVxuXG4gICYtLXB1cnBsZSB7XG4gICAgYmFja2dyb3VuZDogJG1hcmstY29sb3ItcHVycGxlO1xuICB9XG5cbiAgJi0tYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogJG1hcmstY29sb3ItYmx1ZTtcbiAgfVxufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIiwiJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWJsYWNrLTgwMDogIzIyMjtcblxuJGNvbG9yLWJsdWUtOTAwOiAjMDkxZTQyO1xuJGNvbG9yLWJsdWUtODAwOiAjMTcyYjRkO1xuJGNvbG9yLWJsdWUtNzAwOiAjMDI2YWE3O1xuJGNvbG9yLWJsdWUtNjAwOiAjMDA3OWJmO1xuJGNvbG9yLWJsdWUtMTAwOiAjZTRmMGY2O1xuXG4kY29sb3ItZ3JleS04MDA6ICMzMjMyMzI7XG4kY29sb3ItZ3JleS02MDA6ICM4ZDhkOGQ7XG4kY29sb3ItZ3JleS01MDA6ICM2Yjc3OGM7XG4kY29sb3ItZ3JleS0yMDA6ICNkZmUxZTY7XG4kY29sb3ItZ3JleS0xMDA6ICNmNGY1Zjc7XG5cbiRjb2xvci1ncmVlbjogIzVhYWM0NDtcblxuJG1hcmstY29sb3ItZ3JlZW46ICM1MTk4Mzk7XG4kbWFyay1jb2xvci15ZWxsb3c6ICNmMmQ2MDA7XG4kbWFyay1jb2xvci1vcmFuZ2U6ICNmZjlmMWE7XG4kbWFyay1jb2xvci1yZWQ6ICNlYjVhNDY7XG4kbWFyay1jb2xvci1wdXJwbGU6ICNjMzc3ZTA7XG4kbWFyay1jb2xvci1ibHVlOiAjMDA3OWJmO1xuXG4kY29sb3ItcmVkOiAjZWI1YTQ2O1xuXG4kY29sb3ItbGlnaHQtZ3JleS0xMDA6ICMwOTFlNDI7XG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMvJztcblxuQG1peGluIGZvbnQtZmFjZSggJG5hbWUsICRkaXIsICRwYXRoLCAkdHlwZSkge1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJG5hbWU7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy8nICsgJGRpciArICcvJyArICRuYW1lICsgJHBhdGgpIGZvcm1hdCgkdHlwZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuQG1peGluIGZvbnQoJGZhbWlseSwgJHNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRmYW1pbHksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG59XG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=board-board-module-es5.js.map