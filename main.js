(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  position: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTYW11ZWwgTGF3YWxcXGlyZWdpc3RlcmtpZHN3ZWIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgXHJcbiAgIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iRegKidsApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _parent_dashboard_parent_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parent-dashboard/parent-dashboard.component */ "./src/app/parent-dashboard/parent-dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _parent_profile_parent_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parent-profile/parent-profile.component */ "./src/app/parent-profile/parent-profile.component.ts");
/* harmony import */ var _children_view_children_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./children-view/children-view.component */ "./src/app/children-view/children-view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _child_form_child_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./child-form/child-form.component */ "./src/app/child-form/child-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'dashboard', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
        children: [
            { path: 'children', component: _children_view_children_view_component__WEBPACK_IMPORTED_MODULE_11__["ChildrenViewComponent"],
                children: [
                    { path: 'addChild', component: _child_form_child_form_component__WEBPACK_IMPORTED_MODULE_13__["ChildFormComponent"] },
                ]
            },
            { path: 'addChild', component: _child_form_child_form_component__WEBPACK_IMPORTED_MODULE_13__["ChildFormComponent"] },
            { path: 'profile', component: _parent_profile_parent_profile_component__WEBPACK_IMPORTED_MODULE_10__["ParentProfileComponent"] },
            { path: 'register', component: _parent_dashboard_parent_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["ParentDashboardComponent"] },
            { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _parent_dashboard_parent_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["ParentDashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _parent_profile_parent_profile_component__WEBPACK_IMPORTED_MODULE_10__["ParentProfileComponent"],
                _children_view_children_view_component__WEBPACK_IMPORTED_MODULE_11__["ChildrenViewComponent"],
                _child_form_child_form_component__WEBPACK_IMPORTED_MODULE_13__["ChildFormComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                // MyOwnCustomMaterialModule,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/child-form/child-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/child-form/child-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"body\">\r\n        <div style=\"margin: 30px\">\r\n        <mat-accordion class=\"example-headers-align\" >\r\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Personal data\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Enter your personal details\r\n                <mat-icon>account_circle</mat-icon>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n              <br>\r\n\r\n              <mat-icon style=\"font-size: 190px\">person</mat-icon>\r\n              <button mat-raised-button color=\"accent\">Upload Passport</button>\r\n\r\n\r\n\r\n            <mat-form-field style=\"padding-left:5px\" appearance=\"outline\">\r\n                <mat-label>Picture url</mat-label>\r\n                <input matInput>\r\n                <mat-icon matSuffix>person</mat-icon>\r\n                <!-- <mat-hint>Hint</mat-hint> -->\r\n              </mat-form-field>\r\n\r\n            <form class=\"example-form\">\r\n            <mat-form-field style=\"margin-right: 10px;\" class=\"example-full-width\" >\r\n              <input matInput  placeholder=\"First name\" required>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field  style=\"margin-right: 10px;\" class=\"example-full-width\" >\r\n              <input matInput  placeholder=\"Last name\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field  style=\"margin-right: 10px;\">\r\n                <mat-select placeholder=\"Gender\" name=\"gender\">\r\n                  <mat-option value=\"option1\">Male</mat-option>\r\n                  <mat-option value=\"option2\">Female</mat-option>\r\n                </mat-select>\r\n                <mat-error>Please choose a gender</mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose DOB\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n          </form>\r\n\r\n\r\n            <mat-action-row>\r\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n            </mat-action-row>\r\n          </mat-expansion-panel>\r\n\r\n<!-- .........................enf of first expansion panel ..................................... -->\r\n\r\n          <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Medical form\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Medical/allergies you may want us to be concern about?\r\n                <mat-icon>room</mat-icon>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n        <div class=\"medical\">\r\n          <mat-checkbox style=\"margin-bottom: 30px\">My Child have some special needs</mat-checkbox>\r\n\r\n          <mat-checkbox [(ngModel)] =\"checked\" >My Child have some food allergies</mat-checkbox>\r\n        </div>\r\n\r\n\r\n            <div *ngIf=\"checked == true\" >\r\n              <form class=\"example-form\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput #message maxlength=\"256\" placeholder=\"Enter Known food allergies\">\r\n                  <mat-hint align=\"start\"><strong>Give a short discription of any food allergies you may want us to be concern about</strong> </mat-hint>\r\n                  <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\r\n                </mat-form-field>\r\n\r\n              </form>\r\n\r\n            </div>\r\n\r\n            <mat-action-row>\r\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n            </mat-action-row>\r\n          </mat-expansion-panel>\r\n\r\n          <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Emergence Contact\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n               Give details of contact in case of emergency\r\n                <mat-icon>developer_board</mat-icon>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n    <div style=\"display: flex; justify-content: center;  flex-direction: row;\r\n    flex-wrap: wrap;\">\r\n                  <mat-form-field class=\"example-contact\">\r\n                      <input matInput placeholder=\"Street\" required>\r\n                    </mat-form-field>\r\n                <mat-form-field class=\"example-contact\">\r\n                  <input matInput placeholder=\"City\" required>\r\n              </mat-form-field>\r\n                  <mat-form-field class=\"example-contact\">\r\n                <input matInput placeholder=\"State\" required>\r\n              </mat-form-field>\r\n                  <mat-form-field class=\"example-contact\">\r\n                <input matInput #postalCode maxlength=\"5\" placeholder=\"Zip Code\" required>\r\n                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n            <mat-action-row>\r\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n            </mat-action-row>\r\n          </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n        </div>\r\n        </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/child-form/child-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/child-form/child-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 60%; }\n\n.medical {\n  display: flex;\n  flex-direction: column;\n  margin-right: 30px; }\n\n.example-form {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.example-full-width {\n  width: 48%; }\n\n.example-full-width-2 {\n  width: 100%; }\n\n.example-contact {\n  min-width: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQtZm9ybS9DOlxcVXNlcnNcXFNhbXVlbCBMYXdhbFxcaXJlZ2lzdGVya2lkc3dlYi9zcmNcXGFwcFxcY2hpbGQtZm9ybVxcY2hpbGQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsV0FBVztFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQ0QsRUFBQTs7QUFFQTtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoaWxkLWZvcm0vY2hpbGQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLCBcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5tZWRpY2FsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtd3JhcDogd3JhcDtcclxuIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiA0OCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgtMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhY3Qge1xyXG4gIG1pbi13aWR0aDogMzAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/child-form/child-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/child-form/child-form.component.ts ***!
  \****************************************************/
/*! exports provided: ChildFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildFormComponent", function() { return ChildFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildFormComponent = /** @class */ (function () {
    function ChildFormComponent(forms, fm) {
        this.forms = forms;
        this.fm = fm;
        this.checked = false;
        this.indeterminate = true;
        this.labelPosition = 'after';
        this.disabled = false;
        this.step = 0;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    ChildFormComponent.prototype.check = function () {
        this.checked = true;
    };
    ChildFormComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ChildFormComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ChildFormComponent.prototype.nextStep = function () {
        this.step++;
    };
    ChildFormComponent.prototype.prevStep = function () {
        this.step--;
    };
    ChildFormComponent.prototype.ngOnInit = function () {
    };
    ChildFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child-form',
            template: __webpack_require__(/*! ./child-form.component.html */ "./src/app/child-form/child-form.component.html"),
            styles: [__webpack_require__(/*! ./child-form.component.scss */ "./src/app/child-form/child-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]])
    ], ChildFormComponent);
    return ChildFormComponent;
}());



/***/ }),

/***/ "./src/app/children-view/children-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/children-view/children-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"myLayout\">\r\n<mat-card class=\"myCard\">\r\n    <mat-card-content class=\"fabBut\">\r\n      <div >\r\n        <button mat-fab routerLink=\"/dashboard/addChild\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n      </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"myCard\">\r\n    <mat-card-content class=\"fabBut\">\r\n      <div >\r\n        <button mat-fab routerLink=\"/dashboard/addChild\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n      </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"myCard\">\r\n    <mat-card-content class=\"fabBut\">\r\n      <div >\r\n        <button mat-fab routerLink=\"/dashboard/addChild\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n      </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"myCard\">\r\n    <mat-card-content class=\"fabBut\">\r\n      <div >\r\n        <button mat-fab routerLink=\"/dashboard/addChild\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n      </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"myCard\">\r\n    <mat-card-content class=\"fabBut\">\r\n      <div >\r\n        <button mat-fab routerLink=\"/dashboard/addChild\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n      </mat-card-content>\r\n</mat-card>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/children-view/children-view.component.scss":
/*!************************************************************!*\
  !*** ./src/app/children-view/children-view.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myCard {\n  display: flex;\n  justify-content: center;\n  margin: 20px;\n  min-height: 250px;\n  min-width: 300px;\n  background-color: #f3ebeb; }\n\n@media only screen and (max-width: 768px) {\n  .myLayout {\n    justify-content: center;\n    flex-direction: column; } }\n\n.myLayout {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  margin: 30px; }\n\n.fabBut {\n  text-align: center;\n  padding-top: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGRyZW4tdmlldy9DOlxcVXNlcnNcXFNhbXVlbCBMYXdhbFxcaXJlZ2lzdGVya2lkc3dlYi9zcmNcXGFwcFxcY2hpbGRyZW4tdmlld1xcY2hpbGRyZW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFNaEIseUJBQXlCLEVBQUE7O0FBUzNCO0VBRUU7SUFDRSx1QkFBdUI7SUFDckIsc0JBQXNCLEVBQUEsRUFDekI7O0FBcUJIO0VBQ0UsYUFBYTtFQUNkLGVBQWU7RUFJZCxvQkFBb0I7RUFFcEIsWUFBWSxFQUFBOztBQUtkO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hpbGRyZW4tdmlldy9jaGlsZHJlbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgLy8gbWluLWhlaWdodDogMTAwcHg7XHJcbiAgLy8gbWluLXdpZHRoOiAxNTBweDtcclxuXHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZWJlYjtcclxuICAvLyBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gYWxpZ24taXRlbXM6IHN0cmV0Y2hcclxufVxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIFxyXG4vLyB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCl7XHJcbiBcclxuICAubXlMYXlvdXQgeyAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuLy8gICAubXlMYXlvdXQgeyAgXHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuLy8gICAubXlMYXlvdXQgeyAgXHJcbiAgICBcclxuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubXlMYXlvdXR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiBcclxuICBcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuIFxyXG4gIG1hcmdpbjogMzBweDtcclxuXHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2RiY2ZjZjtcclxufVxyXG5cclxuLmZhYkJ1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/children-view/children-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/children-view/children-view.component.ts ***!
  \**********************************************************/
/*! exports provided: ChildrenViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenViewComponent", function() { return ChildrenViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildrenViewComponent = /** @class */ (function () {
    function ChildrenViewComponent() {
    }
    ChildrenViewComponent.prototype.ngOnInit = function () {
    };
    ChildrenViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-children-view',
            template: __webpack_require__(/*! ./children-view.component.html */ "./src/app/children-view/children-view.component.html"),
            styles: [__webpack_require__(/*! ./children-view.component.scss */ "./src/app/children-view/children-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildrenViewComponent);
    return ChildrenViewComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"body\">\r\n<section class=\"login\">\r\n  <mat-card class=\"login-card\" >\r\n    <div style=\"text-align: center; margin-top: 0px; font-family: 'Roboto', sans-serif; font-size: 25px\">  \r\n    \r\n        <span style=\"color: rgb(252, 194, 4)\">i</span>\r\n        <span style=\"color: rgb(5, 133, 253)\">R</span>\r\n        <span style=\"color: rgb(255, 4, 4)\">e</span>\r\n        <span style=\"color: rgb(7, 247, 7)\">g</span>\r\n        <span style=\"color: rgb(253, 178, 39)\">i</span>\r\n        <span style=\"color: rgb(42, 145, 241)\">s</span>\r\n        <span style=\"color: rgb(255, 4, 4)\">t</span>\r\n        <span style=\"color: rgb(248, 162, 1)\">e</span>\r\n        <span style=\"color: rgb(4, 252, 4)\">r </span>\r\n        \r\n        <span style=\"color: rgb(5, 132, 252)\"> K</span>\r\n        <span style=\"color: rgb(255, 4, 4)\">i</span>\r\n        <span style=\"color: rgb(5, 252, 5)\">d</span>\r\n        <span style=\"color: rgb(4, 252, 4)\">s</span>\r\n        \r\n    </div>\r\n      <mat-card-title>\r\n       <div style=\"text-align: center; margin: 30px; color: rgb(112, 66, 155)\" >\r\n        <h3>\r\n          PARENT LOGIN\r\n        </h3>\r\n        <mat-hint style=\"font-size: 16px; text-align: center\">Enter phone number and last name to login</mat-hint>\r\n        </div>\r\n        </mat-card-title>\r\n        \r\n        \r\n        <form class=\"example-form\">\r\n            <mat-form-field  class=\"example-full-width\" style=\"margin-bottom: 25px; color: rgb(212, 54, 133); \" appearance=\"outline\">\r\n                  <!-- <mat-label style=\"font-size: 30px; text-align: center\">Phone Number</mat-label> -->\r\n                <input autofocus style=\"font-size: 25px; text-align: center\" matInput placeholder=\"\">\r\n                <!-- <mat-icon style=\"font-size: 30px; text-align: center\" matSuffix>vpn_key</mat-icon> -->\r\n              </mat-form-field>\r\n\r\n              <mat-form-field  class=\"example-full-width\" style=\"margin-bottom: 50px; color: rgb(212, 54, 133); \" appearance=\"outline\">\r\n                  <!-- <mat-label style=\"font-size: 30px; text-align: center\">Last Name</mat-label> -->\r\n                <input style=\"font-size: 20px; text-align: center\" matInput placeholder=\"Enter last name\">\r\n                <!-- <mat-icon style=\"font-size: 30px; text-align: center\" matSuffix>vpn_key</mat-icon> -->\r\n              </mat-form-field>\r\n            <div style=\"text-align: center; font-size: 20px\">\r\n            <button mat-raised-button color=\"primary\" [routerLink]=\"'/dashboard'\">SUBMIT</button>\r\n          </div>\r\n          </form>\r\n\r\n          <mat-checkbox [(ngModel)] =\"checked\" >My Child have some food allergies</mat-checkbox>\r\n   </mat-card>\r\n</section>\r\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  padding-top: 100px;\n  min-height: 100%;\n  background-color: #f7f7f4; }\n\n.login-card {\n  max-width: 400px;\n  margin: auto; }\n\n.example-form {\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxTYW11ZWwgTGF3YWxcXGlyZWdpc3RlcmtpZHN3ZWIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQjtFQUVqQixnQkFBZ0I7RUFDaEIseUJBQW9DLEVBQUE7O0FBRXRDO0VBQ0csZ0JBQWdCO0VBQ2hCLFlBQWEsRUFBQTs7QUFHZjtFQUdFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDQpXHJcbiB9XHJcbiAubG9naW4tY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAgYXV0bztcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgLy8gbWluLXdpZHRoOiAxNTBweDtcclxuICAgIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.checked = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n/* .mat-toolbar {\r\n  position: fixed;\r\n  \r\n \r\n} */\r\n\r\n.fixedHeader {\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 20;\r\n  width: 100%  !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi8qIC5tYXQtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIFxyXG4gXHJcbn0gKi9cclxuXHJcbi5maXhlZEhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMTAwJSAgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <mat-sidenav-container class=\"sidenav-container\">\r\n        <mat-sidenav\r\n          #drawer\r\n          class=\"sidenav\"\r\n          fixedInViewport=\"true\"\r\n          [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n          [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n          [opened]=\"!(isHandset$ | async)\">\r\n          <!-- <mat-toolbar class=\"fixedHeader\" color=\"primary\">qwfqefqfq</mat-toolbar> -->\r\n\r\n          <mat-toolbar  color=\"primary\">Menu</mat-toolbar>\r\n          <mat-nav-list>\r\n            <a mat-list-item routerLink=\"profile\">Parent Profile</a>\r\n            <a mat-list-item routerLink=\"register\">Kids Profile</a>\r\n            <a mat-list-item routerLink=\"children\" href=\"#\">Children</a>\r\n          </mat-nav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content>\r\n          <mat-toolbar class =\"fixedHeader\" color=\"primary\">\r\n            <button\r\n              type=\"button\"\r\n              aria-label=\"Toggle sidenav\"\r\n              mat-icon-button\r\n              (click)=\"drawer.toggle()\"\r\n              *ngIf=\"isHandset$ | async\">\r\n              <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n            </button>\r\n            <div style=\"flex: 1 1 auto; text-align: center\">\r\n            <h1>\r\n                <span style=\"color: rgb(223, 209, 165)\">i</span>\r\n                <span style=\"color: rgb(175, 214, 250)\">R</span>\r\n                <span style=\"color: rgb(250, 178, 178)\">e</span>\r\n                <span style=\"color: rgb(170, 255, 170)\">g</span>\r\n                <span style=\"color: rgb(223, 209, 165)\">i</span>\r\n                <span style=\"color: rgb(175, 214, 250)\">s</span>\r\n                <span style=\"color: rgb(250, 178, 178)\">t</span>\r\n                <span style=\"color: rgb(170, 255, 170)\">e</span>\r\n                <span style=\"color: rgb(223, 209, 165)\">r</span>\r\n                <span style=\"color: rgb(175, 214, 250)\">K</span>\r\n                <span style=\"color: rgb(250, 178, 178)\">i</span>\r\n                <span style=\"color: rgb(170, 255, 170)\">d</span>\r\n                <span style=\"color: rgb(170, 255, 170)\">s</span>\r\n                </h1>\r\n              </div>\r\n          </mat-toolbar>\r\n      \r\n      <div style=\"margin-top: 80px\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      \r\n        </mat-sidenav-content>\r\n      </mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    NavigationComponent.prototype.register = function () {
        this.myRoutes = "<app-parent-dashboard></app-parent-dashboard>";
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/parent-dashboard/parent-dashboard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/parent-dashboard/parent-dashboard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\r\n  margin: 20px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWRhc2hib2FyZC9wYXJlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYXJlbnQtZGFzaGJvYXJkL3BhcmVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/parent-dashboard/parent-dashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/parent-dashboard/parent-dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <h1 class=\"mat-h1\">Dashboard</h1>\r\n\r\n  \r\n\r\n  <!-- <app-children-view></app-children-view> -->\r\n  \r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/parent-dashboard/parent-dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/parent-dashboard/parent-dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: ParentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentDashboardComponent", function() { return ParentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentDashboardComponent = /** @class */ (function () {
    function ParentDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    ParentDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent-dashboard',
            template: __webpack_require__(/*! ./parent-dashboard.component.html */ "./src/app/parent-dashboard/parent-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./parent-dashboard.component.css */ "./src/app/parent-dashboard/parent-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], ParentDashboardComponent);
    return ParentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/parent-profile/parent-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/parent-profile/parent-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"body\">\r\n<div style=\"margin: 30px\">\r\n<mat-accordion class=\"example-headers-align\" >\r\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Personal data\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Type your Name and Nick Name\r\n        <mat-icon>account_circle</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <button mat-raised-button color=\"accent\">Upload Passport</button> \r\n    <mat-form-field style=\"padding-left:5px\" appearance=\"outline\">\r\n        <mat-label>Picture url</mat-label>\r\n        <input matInput>\r\n        <mat-icon matSuffix>person</mat-icon>\r\n        <!-- <mat-hint>Hint</mat-hint> -->\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-icon style=\"font-size: 15vw\">person</mat-icon>\r\n  \r\n    \r\n\r\n    <form class=\"example-form\">\r\n    <mat-form-field style=\"margin-right: 10px;\" class=\"example-full-width\" >\r\n      <input matInput  placeholder=\"First name\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field  style=\"margin-right: 10px;\" class=\"example-full-width\" >\r\n      <input matInput  placeholder=\"Last name\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field  class=\"example-full-width\" >\r\n      <input matInput  placeholder=\"Other names\">\r\n    </mat-form-field>\r\n  </form>\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Address\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Type your Address\r\n        <mat-icon>room</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <form class=\"example-form\">\r\n      <mat-form-field  class=\"example-full-width-2\" >\r\n        <input matInput placeholder=\"Address-1\" required>\r\n        <mat-icon matSuffix>mode_edit</mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field  class=\"example-full-width-2\" >\r\n        <input matInput placeholder=\"Address-2\">\r\n        <mat-icon matSuffix>mode_edit</mat-icon>\r\n      </mat-form-field>\r\n    </form>\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Contact Information\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n       Type your Phone Number and Email Address\r\n        <mat-icon>developer_board</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    \r\n\r\n    <form class=\"example-form\">\r\n        <div class=\"example-container\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n              <mat-icon matSuffix>alternate_email</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"tel\" matInput placeholder=\"Telephone\">\r\n        <mat-icon matSuffix>call</mat-icon>\r\n      </mat-form-field>\r\n      \r\n    </form>\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n</mat-accordion>\r\n</div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/parent-profile/parent-profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/parent-profile/parent-profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 60%; }\n\n.example-form {\n  width: 100%; }\n\n.example-full-width {\n  width: 30%; }\n\n.example-full-width-2 {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LXByb2ZpbGUvQzpcXFVzZXJzXFxTYW11ZWwgTGF3YWxcXGlyZWdpc3RlcmtpZHN3ZWIvc3JjXFxhcHBcXHBhcmVudC1wcm9maWxlXFxwYXJlbnQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFVBQVUsRUFBQTs7QUFJWjtFQUNFLFdBQVcsRUFBQTs7QUFJYjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC1wcm9maWxlL3BhcmVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsIFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgtMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/parent-profile/parent-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/parent-profile/parent-profile.component.ts ***!
  \************************************************************/
/*! exports provided: ParentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentProfileComponent", function() { return ParentProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentProfileComponent = /** @class */ (function () {
    function ParentProfileComponent() {
        this.step = 0;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    ParentProfileComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ParentProfileComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ParentProfileComponent.prototype.nextStep = function () {
        this.step++;
    };
    ParentProfileComponent.prototype.prevStep = function () {
        this.step--;
    };
    ParentProfileComponent.prototype.ngOnInit = function () {
    };
    ParentProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent-profile',
            template: __webpack_require__(/*! ./parent-profile.component.html */ "./src/app/parent-profile/parent-profile.component.html"),
            styles: [__webpack_require__(/*! ./parent-profile.component.scss */ "./src/app/parent-profile/parent-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentProfileComponent);
    return ParentProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Samuel Lawal\iregisterkidsweb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map