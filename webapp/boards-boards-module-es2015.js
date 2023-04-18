(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boards-boards-module"],{

/***/ "F9As":
/*!**************************************************!*\
  !*** ./src/app/pages/boards/boards.component.ts ***!
  \**************************************************/
/*! exports provided: BoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _root_store_boards_selectors_boards_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root-store/boards/selectors/boards.selectors */ "DTdi");
/* harmony import */ var _root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root-store/boards/actions/boards.actions */ "jT0b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/editor/editor.component */ "yvq4");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/delete-button/delete-button.component */ "wmMX");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/loader/loader.component */ "668k");












function BoardsComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Admin`s Boards");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/board", a1]; };
function BoardsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, board_r8._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](board_r8.title);
} }
function BoardsComponent_li_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardsComponent_li_6_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.openCreator(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u043E\u0441\u043A\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BoardsComponent_li_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-editor", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("enterAction", function BoardsComponent_li_6_div_4_Template_app_editor_enterAction_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r13.sendCreateBoard(); })("escAction", function BoardsComponent_li_6_div_4_Template_app_editor_escAction_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.cancelCreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardsComponent_li_6_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.sendCreateBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-delete-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardsComponent_li_6_div_4_Template_app_delete_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.closeCreator(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formContromName", ctx_r10.newBoardTitleControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("classes", "white");
} }
function BoardsComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoardsComponent_li_6_div_2_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BoardsComponent_li_6_div_4_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx_r2.boardsState$)) == null ? null : tmp_0_0.isOpenBoardCreator));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, ctx_r2.boardsState$)) == null ? null : tmp_1_0.isOpenBoardCreator);
} }
function BoardsComponent_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Developer`s Boards");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BoardsComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, board_r18._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](board_r18.title);
} }
function BoardsComponent_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Viewer`s Boards");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BoardsComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, board_r19._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](board_r19.title);
} }
function BoardsComponent_app_loader_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader");
} }
class BoardsComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.newBoardTitleControl = this.fb.control('');
    }
    ngOnInit() {
        this.store.dispatch(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["checkBoards"]());
        this.boardsState$ = this.store.select(_root_store_boards_selectors_boards_selectors__WEBPACK_IMPORTED_MODULE_1__["getBoardsState"]);
        this.boards$ = this.boardsState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((boardsState) => boardsState.boards));
    }
    openCreator() {
        this.store.dispatch(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["openBoardCreator"]());
    }
    closeCreator() {
        this.newBoardTitleControl.patchValue('');
        this.store.dispatch(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["closeBoardCreator"]());
    }
    sendCreateBoard() {
        var _a;
        if (!((_a = this.newBoardTitleControl.value) === null || _a === void 0 ? void 0 : _a.trim())) {
            this.newBoardTitleControl.patchValue('');
            this.closeCreator();
            return;
        }
        this.store.dispatch(_root_store_boards_actions_boards_actions__WEBPACK_IMPORTED_MODULE_2__["createBoard"]({ payload: this.newBoardTitleControl.value }));
        this.closeCreator();
    }
    cancelCreate() {
        this.closeCreator();
    }
    trackById(index, element) {
        return element._id;
    }
}
BoardsComponent.ɵfac = function BoardsComponent_Factory(t) { return new (t || BoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
BoardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoardsComponent, selectors: [["app-boards"]], decls: 20, vars: 27, consts: [[1, "boards-wrap", "container-wrap"], [4, "ngIf"], [1, "boards-list", "list-unstyled"], ["class", "boards-list__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "boards-list__item", 4, "ngIf"], [1, "boards-list__item"], [1, "boards-list__link", 3, "routerLink"], [1, "boards-list__title"], [1, "boards-list__btn-wrap"], ["class", "boards-list__btn", 3, "click", 4, "ngIf"], ["class", "boards-list__creator", 4, "ngIf"], [1, "boards-list__btn", 3, "click"], [1, "boards-list__creator"], [3, "formContromName", "enterAction", "escAction"], [1, "boards-list__creator__btns"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "classes", "click"]], template: function BoardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoardsComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BoardsComponent_li_4_Template, 4, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BoardsComponent_li_6_Template, 6, 6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BoardsComponent_h2_8_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BoardsComponent_li_11_Template, 4, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BoardsComponent_h2_13_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, BoardsComponent_li_16_Template, 4, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, BoardsComponent_app_loader_18_Template, 1, 0, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_10_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 11, ctx.boards$)) == null ? null : tmp_0_0.admin.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 13, ctx.boards$)) == null ? null : tmp_1_0.admin)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 15, ctx.boardsState$)) == null ? null : tmp_3_0.isFetching));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 17, ctx.boards$)) == null ? null : tmp_4_0.developer.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 19, ctx.boards$)) == null ? null : tmp_5_0.developer)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 21, ctx.boards$)) == null ? null : tmp_7_0.viewer.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 23, ctx.boards$)) == null ? null : tmp_8_0.viewer)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 25, ctx.boardsState$)) == null ? null : tmp_10_0.isFetching);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _modules_editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _shared_components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_10__["DeleteButtonComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".boards-wrap[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  flex: 1 1 auto;\n}\n@media screen and (max-width: 700px) {\n  .boards-wrap[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n.boards-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-template-rows: 1fr;\n  grid-gap: 15px;\n}\n.boards-list__item[_ngcontent-%COMP%] {\n  height: 95px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.boards-list__link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  background: url('default-background.jpg') center;\n  background-size: cover;\n  cursor: pointer;\n  position: relative;\n}\n.boards-list__link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0);\n  transition: all 0.3s;\n}\n.boards-list__link[_ngcontent-%COMP%]:hover::before {\n  background-color: rgba(0, 0, 0, 0.2);\n  transition: all 0.3s;\n}\n.boards-list__btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.boards-list__btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  background-color: rgba(9, 30, 66, 0.13);\n  transition: all 0.3s;\n}\n.boards-list__btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(9, 30, 66, 0.23);\n  transition: all 0.3s;\n}\n.boards-list__creator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n  padding: 10px;\n  cursor: pointer;\n  background-color: rgba(9, 30, 66, 0.13);\n  transition: all 0.3s;\n}\n.boards-list__creator__btns[_ngcontent-%COMP%] {\n  display: flex;\n}\n.boards-list__title[_ngcontent-%COMP%] {\n  color: #fff;\n  height: 80px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREY7QUFHRTtFQU5GO0lBT0ksZUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBQUROO0FBS007RUFDRSxvQ0FBQTtFQUNBLG9CQUFBO0FBSFI7QUFRRTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7QUFSSjtBQVVJO0VBQ0UsdUNBQUE7RUFDQSxvQkFBQTtBQVJOO0FBWUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7QUFWSjtBQVlJO0VBQ0UsYUFBQTtBQVZOO0FBY0U7RUFDRSxXQ2hHVTtFRGlHVixZQUFBO0VBQ0EsZ0JBQUE7QUFaSiIsImZpbGUiOiJib2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5ib2FyZHMtd3JhcCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5cbi5ib2FyZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1nYXA6IDE1cHg7XG5cbiAgJl9faXRlbSB7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ35zcmMvYXNzZXRzL2ltYWdlcy9kZWZhdWx0LWJhY2tncm91bmQuanBnJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvci1ibGFjaywgMSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvci1ibGFjaywgMC44KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fYnRuLXdyYXAge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICZfX2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsdWUtOTAwLCAwLjg3KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsdWUtOTAwLCAwLjc3KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIH1cbiAgfVxuXG4gICZfX2NyZWF0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvci1ibHVlLTkwMCwgMC44Nyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmX19idG5zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbiIsIiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibGFjay04MDA6ICMyMjI7XG5cbiRjb2xvci1ibHVlLTkwMDogIzA5MWU0MjtcbiRjb2xvci1ibHVlLTgwMDogIzE3MmI0ZDtcbiRjb2xvci1ibHVlLTcwMDogIzAyNmFhNztcbiRjb2xvci1ibHVlLTYwMDogIzAwNzliZjtcbiRjb2xvci1ibHVlLTEwMDogI2U0ZjBmNjtcblxuJGNvbG9yLWdyZXktODAwOiAjMzIzMjMyO1xuJGNvbG9yLWdyZXktNjAwOiAjOGQ4ZDhkO1xuJGNvbG9yLWdyZXktNTAwOiAjNmI3NzhjO1xuJGNvbG9yLWdyZXktMjAwOiAjZGZlMWU2O1xuJGNvbG9yLWdyZXktMTAwOiAjZjRmNWY3O1xuXG4kY29sb3ItZ3JlZW46ICM1YWFjNDQ7XG5cbiRtYXJrLWNvbG9yLWdyZWVuOiAjNTE5ODM5O1xuJG1hcmstY29sb3IteWVsbG93OiAjZjJkNjAwO1xuJG1hcmstY29sb3Itb3JhbmdlOiAjZmY5ZjFhO1xuJG1hcmstY29sb3ItcmVkOiAjZWI1YTQ2O1xuJG1hcmstY29sb3ItcHVycGxlOiAjYzM3N2UwO1xuJG1hcmstY29sb3ItYmx1ZTogIzAwNzliZjtcblxuJGNvbG9yLXJlZDogI2ViNWE0NjtcblxuJGNvbG9yLWxpZ2h0LWdyZXktMTAwOiAjMDkxZTQyO1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzLyc7XG5cbkBtaXhpbiBmb250LWZhY2UoICRuYW1lLCAkZGlyLCAkcGF0aCwgJHR5cGUpIHtcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICRuYW1lO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvJyArICRkaXIgKyAnLycgKyAkbmFtZSArICRwYXRoKSBmb3JtYXQoJHR5cGUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG5cbkBtaXhpbiBmb250KCRmYW1pbHksICRzaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkZmFtaWx5LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6ICRzaXplO1xufVxuIl19 */"] });


/***/ }),

/***/ "dfPZ":
/*!***********************************************!*\
  !*** ./src/app/pages/boards/boards.module.ts ***!
  \***********************************************/
/*! exports provided: BoardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsModule", function() { return BoardsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _boards_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boards-routing.module */ "sdU1");
/* harmony import */ var _boards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boards.component */ "F9As");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
/* harmony import */ var _app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/editor/editor.module */ "BE0I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class BoardsModule {
}
BoardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BoardsModule });
BoardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function BoardsModule_Factory(t) { return new (t || BoardsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_4__["EditorModule"],
            _boards_routing_module__WEBPACK_IMPORTED_MODULE_1__["BoardsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BoardsModule, { declarations: [_boards_component__WEBPACK_IMPORTED_MODULE_2__["BoardsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_4__["EditorModule"],
        _boards_routing_module__WEBPACK_IMPORTED_MODULE_1__["BoardsRoutingModule"]] }); })();


/***/ }),

/***/ "sdU1":
/*!*******************************************************!*\
  !*** ./src/app/pages/boards/boards-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BoardsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsRoutingModule", function() { return BoardsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_pages_boards_boards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/boards/boards.component */ "F9As");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _app_pages_boards_boards_component__WEBPACK_IMPORTED_MODULE_1__["BoardsComponent"]
    },
];
class BoardsRoutingModule {
}
BoardsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BoardsRoutingModule });
BoardsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BoardsRoutingModule_Factory(t) { return new (t || BoardsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BoardsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=boards-boards-module-es2015.js.map