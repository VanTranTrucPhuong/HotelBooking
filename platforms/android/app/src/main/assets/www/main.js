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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/hotel-detail/hotel-detail.component */ "./src/app/pages/hotel-detail/hotel-detail.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _templates_find_hotel_item_find_hotel_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/find-hotel-item/find-hotel-item.component */ "./src/app/templates/find-hotel-item/find-hotel-item.component.ts");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "./src/app/pages/contact-details/contact-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailsComponent"] },
    { path: 'find-hotel', component: _templates_find_hotel_item_find_hotel_item_component__WEBPACK_IMPORTED_MODULE_6__["FindHotelItemComponent"] },
    { path: 'hotel-detail', component: _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_3__["HotelDetailComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'sign-up', component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n    /* position: absolute;\n    top: 20%; */\n    /* z-index: 9;\n    margin-bottom: 100px; */\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <!-- <app-header class=\"header\" [isDisplayHeader]=\"isDisplayHeader()\"></app-header> -->\n\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <app-navbar-bottom [isDisplayNavbar]=\"isDisplayNavbar()\"></app-navbar-bottom>\n\n</div>\n"

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
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/utility.service */ "./src/app/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(utility) {
        this.utility = utility;
        this.title = 'HotelBooking';
        utility.setDisplayHeader(true);
        utility.setDisplayNavbar(true);
    }
    AppComponent.prototype.isDisplayHeader = function () {
        return this.utility.isDisplayHeader();
    };
    AppComponent.prototype.isDisplayNavbar = function () {
        return this.utility.isDisplayNavbar();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _templates_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/hotel-item/hotel-item.component */ "./src/app/templates/hotel-item/hotel-item.component.ts");
/* harmony import */ var _templates_navbar_bottom_navbar_bottom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/navbar-bottom/navbar-bottom.component */ "./src/app/templates/navbar-bottom/navbar-bottom.component.ts");
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/header/header.component */ "./src/app/templates/header/header.component.ts");
/* harmony import */ var _templates_explore_item_explore_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/explore-item/explore-item.component */ "./src/app/templates/explore-item/explore-item.component.ts");
/* harmony import */ var _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/hotel-detail/hotel-detail.component */ "./src/app/pages/hotel-detail/hotel-detail.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/@syncfusion/ej2-angular-calendars.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-splitbuttons */ "./node_modules/@syncfusion/ej2-angular-splitbuttons/@syncfusion/ej2-angular-splitbuttons.es5.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/footer/footer.component */ "./src/app/templates/footer/footer.component.ts");
/* harmony import */ var _templates_find_hotel_item_find_hotel_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templates/find-hotel-item/find-hotel-item.component */ "./src/app/templates/find-hotel-item/find-hotel-item.component.ts");
/* harmony import */ var _pages_find_hotel_find_hotel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/find-hotel/find-hotel.component */ "./src/app/pages/find-hotel/find-hotel.component.ts");
/* harmony import */ var _pages_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/book-detail/book-detail.component */ "./src/app/pages/book-detail/book-detail.component.ts");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "./src/app/pages/contact-details/contact-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Date range












// Wheel Selector
// Material
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _templates_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_6__["HotelItemComponent"],
                _templates_navbar_bottom_navbar_bottom_component__WEBPACK_IMPORTED_MODULE_7__["NavbarBottomComponent"],
                _templates_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _templates_explore_item_explore_item_component__WEBPACK_IMPORTED_MODULE_9__["ExploreItemComponent"],
                _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_10__["HotelDetailComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _templates_find_hotel_item_find_hotel_item_component__WEBPACK_IMPORTED_MODULE_19__["FindHotelItemComponent"],
                _pages_find_hotel_find_hotel_component__WEBPACK_IMPORTED_MODULE_20__["FindHotelComponent"],
                _pages_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_21__["BookDetailComponent"],
                _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_22__["ContactDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__["DateRangePickerModule"],
                _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__["DropDownListModule"],
                _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_13__["DropDownButtonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pages/book-detail/book-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/book-detail/book-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-content{\n    margin-top: 1rem;\n    margin-bottom: 5rem;\n}\n\n/* Icon */\n\n.dot-icon{\n    font-size: 8px;\n}\n\n/* End Icon */\n\n.title-text{\n    color: rgba(0,0,0,.54);\n}\n\n/* Button */\n\n.btn-continue{\n    width: 100%;\n}\n\n/* End button */\n\n/* Header */\n\n/* General Header */\n\n.general-header{\n    background-color: #545dff;\n    height: 150px;\n    padding: 1rem;\n}\n\n.header-title{\n    display: flex;\n}\n\n/* Processbar */\n\n.header-processbar{\n    margin-right: 1rem;\n    color: #b4b4fb!important;\n}\n\n.active{\n    color: white!important;\n}\n\n.active .circle{\n    background-color: white!important;\n}\n\nul.processbar{\n    display: flex;\n    justify-content: flex-end;\n    text-decoration: none;\n    list-style-type: none;\n    padding: unset;\n    font-size: 12px;\n}\n\nul.processbar > li{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-left: .5rem;\n}\n\nul.processbar li p.circle{\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border: 1px solid #b4b4fb;\n    border-radius: 50%;\n    margin-right: .75rem;\n    background: #b4b4fb;\n    color: #545dff;\n    /* padding: 2rem; */\n}\n\nul.processbar li p.line{\n    width: 30px;\n    height: 2px;\n    background-color: #b4b4fb;\n    margin-left: .25rem;\n}\n\n/* End Processbar */\n\n/* End Header */"

/***/ }),

/***/ "./src/app/pages/book-detail/book-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/book-detail/book-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"general-header\">\n    <div class=\"header-title text-white\">\n      <div>\n        <i class=\"material-icons\">keyboard_backspace</i>\n      </div>\n      <div>\n        <h4 class=\"mb-4\">&nbsp;&nbsp;Fill in Details</h4>\n      </div>\n    </div>\n    <div class=\"header-processbar\">\n      <ul class=\"processbar\">\n        <li class=\"active\">\n          <p class=\"circle\">01</p>\n          <p class=\"label\">Book</p>\n          <p class=\"line\"></p>\n        </li>\n        <li class=\"\">\n          <p class=\"circle\">02</p>\n          <p class=\"label\">Check out</p>\n          <p class=\"line\"></p>\n        </li>\n        <li class=\"\">\n          <p class=\"circle\">03</p>\n          <p class=\"label\">Pay</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n<div class=\"book-content container-fluid\">\n  <!-- Your Booking -->\n  <div>\n    <p class=\"title-text\">Your booking</p>\n    <div class=\"row\">\n      <div class=\"col\">\n        <p>Marriotte NY city</p>\n      </div>\n      <div class=\"col text-right\">\n        <button mat-stroked-button color=\"primary\">Details</button>\n      </div>\n    </div>\n  </div>\n  <!-- End Your Booking -->\n\n  <hr>\n\n  <!-- Information Booking -->\n  <div>\n    <div class=\"infor-book-item\">\n      <ul>\n        <li>\n          <p class=\"title-text\">Check-in-day</p>\n          <p>Thur, 06 August 2018</p>\n        </li>\n        <li>\n          <p class=\"title-text\">Check-out-day</p>\n          <p>Sat, 10 August 2018</p>\n        </li>\n        <li>\n          <p class=\"title-text\">Room</p>\n          <p>Standard Double Room with view</p>\n        </li>\n      </ul>\n    </div>\n    <!-- End Information Booking -->\n\n    <hr>\n\n    <!-- Contact Details -->\n    <div class=\"contact-detail\">\n      <p class=\"title-text\">Contact Details</p>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <p>Please fill in contact details</p>\n        </div>\n        <div class=\"col text-right\">\n          <button mat-stroked-button color=\"primary\">Fill in</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- End Contact Details -->\n\n    <hr>\n\n    <!-- Total price -->\n    <div class=\"total-price\">\n      <p class=\"title-text\">Your Price</p>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <p>Total Price</p>\n        </div>\n        <div class=\"col text-right\">\n          <p>$119</p>\n        </div>\n      </div>\n    </div>\n    <!-- End total price -->\n\n    <!-- Button  -->\n    <button mat-raised-button color=\"primary\" class=\"btn-continue\">Continue</button>\n    <!-- End Button -->\n  </div>"

/***/ }),

/***/ "./src/app/pages/book-detail/book-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/book-detail/book-detail.component.ts ***!
  \************************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
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

var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent() {
    }
    BookDetailComponent.prototype.ngOnInit = function () {
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/pages/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/pages/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-details/contact-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".country-code, .telephone{\n    width: 48%;\n}"

/***/ }),

/***/ "./src/app/pages/contact-details/contact-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-content container mt-5\">\n  <h6>Where to send you booking details?</h6>\n  <form action=\"\">\n    <!-- Name -->\n    <div class=\"name-field\">\n      <mat-form-field class=\"field\">\n        <input matInput placeholder=\"Contact name\">\n      </mat-form-field>\n    </div>\n    <!-- End name -->\n\n    <!-- Country code & telephone -->\n    <div class=\"country-tel-field d-flex justify-content-between\">\n        <mat-form-field class=\"country-code\">\n          <input matInput placeholder=\"Country code\">\n        </mat-form-field>\n        <mat-form-field class=\"telephone\">\n          <input matInput placeholder=\"Telephone\">\n        </mat-form-field>\n      </div>\n    <!-- End code & telephone -->\n\n    <!-- Email -->\n    <mat-form-field class=\"field\">\n      <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address\n      </mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <!-- End email -->\n  </form>\n  <!-- Button done -->\n  <div class=\"\">\n    <button mat-raised-button color=\"primary\" class=\"btn\">Done</button>\n  </div>\n  <!-- End button done -->\n</div>"

/***/ }),

/***/ "./src/app/pages/contact-details/contact-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
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


var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
    };
    ContactDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/pages/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/pages/contact-details/contact-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/find-hotel/find-hotel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/find-hotel/find-hotel.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/find-hotel/find-hotel.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/find-hotel/find-hotel.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/pages/find-hotel/find-hotel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/find-hotel/find-hotel.component.ts ***!
  \**********************************************************/
/*! exports provided: FindHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindHotelComponent", function() { return FindHotelComponent; });
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

var FindHotelComponent = /** @class */ (function () {
    function FindHotelComponent() {
    }
    FindHotelComponent.prototype.ngOnInit = function () {
    };
    FindHotelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-hotel',
            template: __webpack_require__(/*! ./find-hotel.component.html */ "./src/app/pages/find-hotel/find-hotel.component.html"),
            styles: [__webpack_require__(/*! ./find-hotel.component.css */ "./src/app/pages/find-hotel/find-hotel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindHotelComponent);
    return FindHotelComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#custom-search-input{\n    border: solid 1px #E4E4E4;\n    border-radius: 6px;\n    background-color: #fff;\n}\n\n#custom-search-input input{\n    border: 0;\n    box-shadow: none;\n}\n\n#custom-search-input button{\n    margin: 2px 0 0 0;\n    background: none;\n    box-shadow: none;\n    border: 0;\n    color: #666666;\n    padding: 0 8px 0 10px;\n}\n\n#custom-search-input button:hover{\n    border: 0;\n    box-shadow: none;\n    border-left: solid 1px #ccc;\n}\n\n#custom-search-input .glyphicon-search{\n    font-size: 23px;\n}\n\n.icon-search{\n    color: #a8a8a8;\n}\n\n.form{\n    padding: 0.5em 5%;\n}\n\n.form-control{\n    padding: unset;\n}\n\n.form__label{\n    margin: 0.75rem 0;\n}\n\n.form__icon{\n    color: #fc6f81;\n}\n\n.card{\n    border-radius: 1em;\n}\n\n.info-text{\n    text-align: left;\n    width: 100%;\n}\n\nheader, form{\n    padding: 2em 5%;\n}\n\n.form-group{\n    margin-bottom: 20px;\n}\n\n.check-in{\n    margin-left: unset;\n}\n\n.form__date{\n    margin-right: 0.75rem;\n}\n\n.input__date{\n    padding: .375rem .75rem;\n}\n\n.form__duration{\n    /* max-width: 30%; */\n}\n\nh2.heading{\n    font-size: 18px;\n    text-transform: uppercase;\n    font-weight: 300;\n    text-align: left;\n    color: #506982;\n    border-bottom: 1px solid #506982;\n    padding-bottom: 3px;\n    margin-bottom: 20px;\n}\n\n.btn-find-hotel{\n    outline: none;\n    background-color: #545dff;\n    /* border-color: #545dff; */\n    font-size: 16px;\n    margin-top: 10%;\n    padding: 5px 0;\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.title__recent-searches{\n    padding: 1rem;\n}\n\n.col-6.col-md-6.item:nth-child(odd){\n    padding-right: .5rem;\n    padding-left: 2px;\n}\n\n.col-6.col-md-6.item:nth-child(even){\n    padding-left: .5rem;\n    padding-right: 2px;\n}\n\n.explore{\n    width: 100%;\n}\n\n.explore__content{\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.explore__item{\n    display: inline-block;\n    /* margin: 0 0.5rem; */\n}\n\n/* Date */\n\n#control_wrapper {\n    max-width: 246px;\n    margin: 30px auto;\n    padding-top: 50px;\n}\n\n.control-section {\n    margin: 25px auto;\n}\n\n.e-input-group:not(.e-float-icon-left):not(.e-float-input)::after,.e-input-group:not(.e-float-icon-left):not(.e-float-input)::before{\n    background: unset;\n}\n\n.e-input-group:not(.e-float-icon-left), .e-input-group.e-control-wrapper:not(.e-float-icon-left){\n    border: unset;\n}\n\n.e-input-group-icon.e-range-icon, .e-control-wrapper .e-input-group-icon.e-range-icon {\n    padding: 4px;\n}\n\n.e-input-group input.e-input:focus, .e-input-group.e-control-wrapper input.e-input:focus, .e-input-group textarea.e-input:focus, .e-input-group.e-control-wrapper textarea.e-input:focus {\n    padding: 4px 0px 8px;\n    margin: 4px 0 4px 13px;\n}\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home container mx-auto container-custom\">\n  <div class=\"card home__find-hotel\">\n    <form action=\"\" class=\"form\">\n      <!--  Details -->\n      <div class=\"form-group\">\n        <div class=\"grid\">\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <label class=\"form__label\"><i class=\"form__icon fa fa-map-pin\"></i>&nbsp;&nbsp;Destination</label>\n              <div id=\"custom-search-input\">\n                <div class=\"input-group col-md-12\">\n                  <input type=\"text\" class=\"form-control input-search\" placeholder=\"NewYork\" />\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-search btn-lg\" type=\"button\">\n                      <a href=\"#\"><i class=\"fa fa-search icon-search\"></i></a>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <div class=\"row check-in\">\n                <div class=\"col-8 col-md-6 p-0 form__date\">\n                  <label class=\"form__label\"><i class=\"form__icon fa fa-calendar\"></i>&nbsp;&nbsp;Check-in date</label>\n                  <ejs-daterangepicker class=\"form-control\"></ejs-daterangepicker>\n                </div>\n                <div class=\"col-3 col-md-6 p-0 form__duration\">\n                  <label class=\"form__label\">Duration</label>\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <label class=\"form__label\"><i class=\"form__icon fa fa-tags\"></i>&nbsp;&nbsp;Total guests & Rooms</label>\n              <div id=\"custom-search-input\">\n                <div class=\"input-group col-md-12\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"2 guests & 1 rooms\" />\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-info btn-lg\" type=\"button\">\n                      <a href=\"#\"><i class=\"fa fa-sort\"></i></a>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <button mat-raised-button color=\"primary\" class=\"btn-find-hotel\" (click)='goToFindHotel()'>Find hotel</button>\n            </div>\n          </div>\n        </div>\n      </div> <!-- /.form-group -->\n    </form>\n  </div>\n  <div class=\"recent-searches\">\n    <h5 class=\"title__recent-searches\">Recent Researches</h5>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-6 col-md-6 item \" *ngFor='let item of hotelListRecent'>\n          <app-hotel-item [hotel]='item' (click)='goToDetail()'></app-hotel-item>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"explore\">\n    <h5 class=\"title__recent-searches\">Explore with QueenHotel</h5>\n    <div class=\"explore__content\">\n      <app-explore-item class=\"explore__item\"></app-explore-item>\n      <app-explore-item class=\"explore__item\"></app-explore-item>\n      <app-explore-item class=\"explore__item\"></app-explore-item>\n      <app-explore-item class=\"explore__item\"></app-explore-item>\n      <app-explore-item class=\"explore__item\"></app-explore-item>\n      <app-explore-item class=\"explore__item\"></app-explore-item>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(utility, router) {
        this.utility = utility;
        this.router = router;
        this.hotelListRecent = [
            // tslint:disable-next-line:max-line-length
            { name: 'California', price: '200.000 USD', description: 'Some example text', image: './assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg' },
            { name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' },
            { name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' },
            { name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' },
            { name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' }
        ];
        utility.setDisplayHeader(true);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.isDisplayHeader = function () {
        return this.utility.isDisplayHeader();
    };
    HomeComponent.prototype.goToFindHotel = function () {
        this.router.navigate(['/find-hotel']);
    };
    HomeComponent.prototype.goToDetail = function () {
        this.router.navigate(['/hotel-detail']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotel-detail/hotel-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/hotel-detail/hotel-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Slide */\n.container-slide{\n    padding-right: 25px;\n    padding-left: 25px;\n}\n.carousel-inner {\n    border-radius: 0.5em;\n}\n.carousel-inner img {\n    width: 100%;\n    height: 315px;\n}\n.carousel-indicators li{\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n}\n/* End Slide */\n/* Deals */\n.heading{\n    margin: 2rem 0;\n}\n.deals__content, .rating{\n    display: flex;\n    justify-content: space-between;\n    /* align-items: center; */\n}\n.sub-title, .pernight{\n    font-size: 14px;\n    color: rgb(150, 150, 150);\n}\n.title{\n    color: #4D4DC7;\n}\n.price{\n    color: rgb(255, 116, 66);\n}\n.btn-see{\n    float: right;\n    background-color: rgb(195, 195, 238);\n    font-size: 14px;\n    color: #4c4cc6;\n}\nhr.line{\n    margin-top: 4rem;\n    border-top: 2px solid #f5bec5;\n}\n/* End Deals */\n/* Rating & Reviews */\n.rating__point{\n    width: 50px;\n    height: 50px;\n    background-color: #4D4DC7;\n    border-radius: 5px;\n    position: relative;\n    margin-right: 0.5rem;\n}\n.point{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.bar__content{\n    padding-right: 15px;\n    margin: 10px 0;\n}\n.bar__content:nth-child(odd){\n    padding-left: 0;\n}\n/* .bar__content:nth-child(even){\n    padding-right: 0;\n} */\n.bar__content p{\n    margin-bottom: 1rem;\n    letter-spacing: 0.5;\n}\n/* The bar container */\n.bar-container {\n    width: 85%;\n    background-color: rgb(247, 209, 138);\n    text-align: center;\n    color: white;\n    border-radius: 10px;\n}\n/* Individual bars */\n.bar{\n    width: 60%; \n    height: 4px; \n    background-color: rgb(255, 175, 25);\n    border-radius: 10px;\n    position: relative;\n}\n.rating__bars{\n    display: flex;\n    flex-wrap: wrap;\n}\n.bar__point{\n    position: absolute;\n    color: rgb(255, 175, 25);\n    top: 1.5rem;\n    right: 5px;\n}\n/* End Rating & Reviews */\n/* Amenities */\n.amenites__content{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 2rem;\n}\n.amenities__item{\n    padding-top: 20px;\n    text-align: center;\n    width: 80px;\n    height: 80px;\n    border: 1px solid rgb(70, 70, 70);\n}\n.icon, .icon-name{\n    color: #4D4DC7;\n}\n.icon{\n    font-size: 25px;\n}\n.icon-name{\n    font-size: 14px;\n    margin: 0;\n}\n/* End Amenities */\n/* Description Hotel */\n.description__text{\n    color: rgb(150, 150, 150);\n}\n/* End Descripttion Hotel */\n/* Contact */\n#map {\n    width: 100%;\n    height: 250px;\n    background-color: grey;\n  }\n/* End Contact */"

/***/ }),

/***/ "./src/app/pages/hotel-detail/hotel-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/hotel-detail/hotel-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-detail container-custom\">\n  <!-- Carousel -->\n  <div class=\"container-fluid container-slide\">\n    <div class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      </ul>\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"./assets/images/HaLong.jpg\" alt=\"Los Angeles\">\n        </div>\n        <div class=\"carousel-item\">\n          <img\n            src=\"./assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg\"\n            alt=\"Chicago\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"./assets/images/tivkumb_0.jpg\" alt=\"New York\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End Carousel  -->\n\n  <div class=\"container-fluid\">\n\n    <!-- Deals -->\n    <div class=\"deals\">\n      <h6 class=\"deals__heading heading\">Deals</h6>\n      <div class=\"deals__content\">\n        <div class=\"deals__text\">\n          <h6 class=\"deals__title title\">\n            Hotel Website\n          </h6>\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\n        </div>\n        <div class=\"deals__price\">\n          <h6 class=\"price\">$119</h6>\n          <p class=\"pernight\">per night</p>\n        </div>\n      </div>\n      <div class=\"deals__content\">\n        <div class=\"deals__text\">\n          <h6 class=\"deals__title title\">\n            Hotel Website\n          </h6>\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\n        </div>\n        <div class=\"deals__price\">\n          <h6 class=\"price\">$119</h6>\n          <p class=\"pernight\">per night</p>\n        </div>\n      </div>\n      <div class=\"deals__content\">\n        <div class=\"deals__text\">\n          <h6 class=\"deals__title title\">\n            Hotel Website\n          </h6>\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\n        </div>\n        <div class=\"deals__price\">\n          <h6 class=\"price\">$119</h6>\n          <p class=\"pernight\">per night</p>\n        </div>\n      </div>\n      <div class=\"deals__content\">\n        <div class=\"deals__text\">\n          <h6 class=\"deals__title title\">\n            Hotel Website\n          </h6>\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\n        </div>\n        <div class=\"deals__price\">\n          <h6 class=\"price\">$119</h6>\n          <p class=\"pernight\">per night</p>\n        </div>\n      </div>\n      <button class=\"btn btn-see\">See more</button>\n    </div>\n    <!-- End Deals -->\n\n    <hr class=\"line\">\n\n    <!-- Rating & Reviews -->\n    <div class=\"rating-review\">\n      <h6 class=\"rating-review__heading heading\">Rating & Reviews</h6>\n      <div class=\"rating\">\n        <div class=\"rating__point\">\n          <p class=\"point text-white\">8.4</p>\n        </div>\n        <div class=\"rating__text\">\n          <h6 class=\"rating__title title\">Impressive</h6>\n          <p class=\"sub-title\">Rating based on 6969 reviews across the web</p>\n        </div>\n      </div>\n      <div class=\"rating__bars\">\n        <!-- with using property binding -->\n        <div class=\"col-6 bar__content\">\n          <p class=\"sub-title\">Comfort</p>\n          <div class=\"bar-container\">\n            <div class=\"bar bar-comfort\"></div>\n          </div>\n          <div class=\"bar__point\">8.9</div>\n        </div>\n        <div class=\"col-6 bar__content\">\n          <p class=\"sub-title\">Service</p>\n          <div class=\"bar-container\">\n            <div class=\"bar bar-service\"></div>\n          </div>\n          <div class=\"bar__point\">8.9</div>\n        </div>\n        <div class=\"col-6 bar__content\">\n          <p class=\"sub-title\">Cleanliness</p>\n          <div class=\"bar-container\">\n            <div class=\"bar bar-cleanliness\"></div>\n          </div>\n          <div class=\"bar__point\">8.9</div>\n        </div>\n        <div class=\"col-6 bar__content\">\n          <p class=\"sub-title\">Food</p>\n          <div class=\"bar-container\">\n            <div class=\"bar bar-food\"></div>\n          </div>\n          <div class=\"bar__point\">8.9</div>\n        </div>\n        <div class=\"col-6 bar__content\">\n          <p class=\"sub-title\">Location</p>\n          <div class=\"bar-container\">\n            <div class=\"bar bar-location\"></div>\n          </div>\n          <div class=\"bar__point\">8.9</div>\n        </div>\n      </div>\n      <button class=\"btn btn-see\">See more</button>\n    </div>\n    <!-- End Rating & Reviews -->\n\n    <hr class=\"line\">\n\n    <!-- Amenities -->\n    <div class=\"amenities\">\n      <h6 class=\"heading\">Main Amenities</h6>\n      <div class=\"amenites__content\">\n        <div class=\"amenities__item\">\n            <i class=\"fa fa-wifi icon\"></i>\n            <p class=\"icon-name\">Free Wifi</p>\n        </div>\n        <div class=\"amenities__item\">\n            <i class=\"material-icons icon\">restaurant</i>\n            <p class=\"icon-name\">Breakfast</p>\n        </div>\n        <div class=\"amenities__item\">\n            <i class=\"material-icons icon\">local_hotel</i>\n            <p class=\"icon-name\">Spa</p>\n        </div>\n        <div class=\"amenities__item\">\n            <i class=\"material-icons icon\">pool</i>\n            <p class=\"icon-name\">Swimming</p>\n        </div>\n      </div>\n      <button class=\"btn btn-see\">See all amenities</button>\n    </div>\n    <!-- End Amenities -->\n\n    <hr class=\"line\">\n\n    <!-- Hotel Description -->\n    <div class=\"description\">\n      <h6 class=\"heading\">Hotel Description</h6>\n      <p class=\"description__text\">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit aut et sint accusantium blanditiis tempore repellendus incidunt doloremque quas?\n      </p>\n    </div>\n    <!-- End Hotel Description -->\n\n    <hr class=\"line mt-4\">\n\n    <!-- Contact -->\n    <div class=\"contact\">\n      <h6 class=\"heading\">Contact</h6>\n      <div id=\"map\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1214396311398!2d106.6391917153343!3d10.8020099616734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294fe7593643%3A0x75fc2555a7f3e79!2zRXRvd24sIEPhu5luZyBIw7JhLCBQaMaw4budbmcgMTMsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1559788558354!5m2!1sen!2s\" frameborder=\"0\" style=\"border:0\" width=\"100%\" height=\"100%\"></iframe>\n      </div>\n    </div>\n    <!-- End Contact -->\n  </div>\n\n  <!-- Footer -->\n  <app-footer></app-footer>\n  <!-- End Footer -->\n</div>"

/***/ }),

/***/ "./src/app/pages/hotel-detail/hotel-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/hotel-detail/hotel-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: HotelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailComponent", function() { return HotelDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelDetailComponent = /** @class */ (function () {
    function HotelDetailComponent(ultility) {
        this.ultility = ultility;
        this.ultility.setDisplayNavbar(false);
    }
    HotelDetailComponent.prototype.ngOnInit = function () {
    };
    HotelDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotel-detail',
            template: __webpack_require__(/*! ./hotel-detail.component.html */ "./src/app/pages/hotel-detail/hotel-detail.component.html"),
            styles: [__webpack_require__(/*! ./hotel-detail.component.css */ "./src/app/pages/hotel-detail/hotel-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
    ], HotelDetailComponent);
    return HotelDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    text-decoration: none;\n}\n\n.login-card{\n    margin:50px 0 auto;\n    /* max-width: 80%; */\n}\n\n.login-title{\n    color: #545dff;\n}\n\n.mat-card-header-text{\n    margin: 0 auto !important;\n}\n\n.login-header {\n    text-align: center;\n    margin: 0 auto!important;\n}\n\n.btn-login{\n    width: 100%;\n    outline: none;\n    background-color: #545dff;\n}\n\n.login-field{\n    width: 100%;\n}\n\n/* Text Field  */\n\n.mat-form-field {\n    font-size: 14px;\n    line-height: 2.125;\n    margin-bottom: 1rem;\n}\n\n/* End Text Field */\n\n/* Forgot Password */\n\n.forgot-password{\n    float: right;\n    margin: 1rem 0;\n}\n\n.forgotpw-text{\n    font-size: 14px;\n    text-decoration: none;\n}\n\n/* End Forgot Password */\n\n/* Signup */\n\n.sign-up-text{\n    text-align: center;\n    margin: 1rem 0\n}\n\n/* End Signup */\n\n/* Placeholder */\n\ninput[type=\"email\"]::-webkit-input-placeholder {\n    color: orange;\n}"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-card container-fluid\">\n  <div class=\"login-header\">\n    <mat-card-title class=\"login-title\">Welcome</mat-card-title>\n    <br>\n    <mat-card-subtitle>Sign in to continue</mat-card-subtitle>\n  </div>\n  <mat-card-content>\n    <form action=\"\">\n      <!-- Email -->\n      <mat-form-field class=\"login-field\">\n        <!-- [formControl]=\"emailFormControl\" -->\n        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <!-- End Email -->\n\n      <!-- Password -->\n      <mat-form-field class=\"login-field\">\n        <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n          [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n      <!-- End Password -->\n    </form>\n    <div class=\"forgot-password\">\n      <a href=\"#\" class=\"forgotpw-text\">Forgot Password?</a>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" class=\"btn-login\">Login</button>\n  </mat-card-actions>\n\n  <!-- SignUp -->\n  <div class=\"sign-up-text\">\n    <mat-card-subtitle>New to ...Travel?&nbsp;&nbsp;<a href=\"#\" class=\"signup-text\" routerLink=\"/sign-up\">Signup</a></mat-card-subtitle> \n  </div>\n  <!-- End SignUp -->\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
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
    function LoginComponent(utility) {
        this.utility = utility;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.utility.setDisplayHeader(false);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    text-decoration: none;\n}\n\n.signup-card{\n    padding-top: 20px;\n}\n\n/* Icon back */\n\n.signup-header{\n    display: flex;\n    align-items: center;\n    padding: 20px 0;\n    color: #545dff;\n}\n\n.signup-title{\n    margin: 0;\n}\n\n/* End Icon back */\n\n/* Form */\n\n.mat-card-header-text{\n    margin: 0 auto !important;\n}\n\n.signup-field{\n    width: 100%;\n    margin-bottom: .5rem;\n}\n\n.firstname, .surname{\n    width: 48%;\n}\n\n.name-field{\n    display: flex;\n    justify-content: space-between;\n}\n\n/* End Form */\n\n/* Button */\n\n.btn-signup{\n    width: 100%;\n    outline: none;\n    margin: 1rem 0;\n    background-color: #545dff;\n}\n\n/* End Button */\n\n/* login-text */\n\n.login-text{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-card container-fluid\">\n  <div class=\"signup-header\">\n    <i class=\"material-icons back-icon\">keyboard_backspace</i>\n    <h4 class=\"signup-title\">&nbsp;&nbsp;Sign Up</h4>\n  </div>\n  <mat-card-content>\n    <form action=\"\">\n      <!-- Name -->\n      <div class=\"name-field\">\n        <mat-form-field class=\"firstname\">\n          <input matInput placeholder=\"Firstname\">\n        </mat-form-field>\n        <mat-form-field class=\"surname\">\n          <input matInput placeholder=\"Surname\">\n        </mat-form-field>\n      </div>\n      <!-- End Name -->\n\n      <!-- Email -->\n      <mat-form-field class=\"signup-field\">\n        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <!-- End Email -->\n\n      <!-- Phonenumber -->\n      <mat-form-field class=\"signup-field\">\n        <input matInput maxlength=\"10\" placeholder=\"Phonenumber\">\n      </mat-form-field>\n      <!-- End Phonenumber -->\n\n      <!-- Password -->\n      <mat-form-field class=\"signup-field\">\n        <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n          [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n      <mat-form-field class=\"signup-field\">\n        <input matInput placeholder=\"Renter your password\" [type]=\"hide ? 'password' : 'text'\">\n      </mat-form-field>\n      <!-- End Password -->\n    </form>\n\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" class=\"btn-signup\">Sign up</button>\n  </mat-card-actions>\n\n  <!-- SignUp -->\n  <div class=\"login-text\">\n    <mat-card-subtitle>Alredy have an account?&nbsp;<a href=\"#\" class=\"signup-text\" routerLink=\"/login\">Login</a>\n    </mat-card-subtitle>\n  </div>\n  <!-- End SignUp -->\n</div>"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(utility) {
        this.utility = utility;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.utility.setDisplayHeader(false);
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/pages/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/pages/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/services/utility.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
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

var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this._displayHeader = true;
        this._displayFooter = true;
        this._isDisplayNavbar = true;
    }
    UtilityService.prototype.setDisplayHeader = function (isShow) {
        this._displayHeader = isShow;
    };
    UtilityService.prototype.isDisplayHeader = function () {
        return this._displayHeader;
    };
    UtilityService.prototype.setDisplayFooter = function (isShow) {
        this._displayFooter = isShow;
    };
    UtilityService.prototype.isDisplayFooter = function () {
        return this._displayFooter;
    };
    UtilityService.prototype.setDisplayNavbar = function (isShow) {
        this._isDisplayNavbar = isShow;
    };
    UtilityService.prototype.isDisplayNavbar = function () {
        return this._isDisplayNavbar;
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/templates/explore-item/explore-item.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/templates/explore-item/explore-item.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    max-width: 100%;\n    display: block;\n}\n\n.explore__card{\n    border: unset;\n    margin-right: 1rem;\n}\n\n.explore__card .explore__image{\n    width: 210px;\n    height: 90px;\n    border-radius: calc(0.75rem - 0.5px);\n    position: relative;\n}\n\n.item__text{\n    position: absolute;\n    left: 1rem;\n    bottom: 0rem;\n    z-index: 2;\n}\n\n#overlay_explore {\n    position: absolute;    \n    /* width: 100%; */\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.1);\n    border-radius: calc(0.75rem - 0.5px);\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/templates/explore-item/explore-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/templates/explore-item/explore-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card explore__card\">\n  <img class=\"explore__image\"\n    src=\"./assets/images/HaLong.jpg\"\n    alt=\"Card image\">\n    <div id=\"overlay_explore\"></div>\n  <p class=\"item__text text-white\">Ha Long Bay</p>\n</div>"

/***/ }),

/***/ "./src/app/templates/explore-item/explore-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/templates/explore-item/explore-item.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreItemComponent", function() { return ExploreItemComponent; });
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

var ExploreItemComponent = /** @class */ (function () {
    function ExploreItemComponent() {
    }
    ExploreItemComponent.prototype.ngOnInit = function () {
    };
    ExploreItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore-item',
            template: __webpack_require__(/*! ./explore-item.component.html */ "./src/app/templates/explore-item/explore-item.component.html"),
            styles: [__webpack_require__(/*! ./explore-item.component.css */ "./src/app/templates/explore-item/explore-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExploreItemComponent);
    return ExploreItemComponent;
}());



/***/ }),

/***/ "./src/app/templates/find-hotel-item/find-hotel-item.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/templates/find-hotel-item/find-hotel-item.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".find-hotel-card {\n    margin: 1rem;\n    margin-bottom: 5rem;\n}\n\n.item-heading{\n    margin: 1rem 0;\n}\n\n.item-footer{\n    display: flex;\n    justify-content: space-between;\n}\n\n.item-content{\n    display: flex;\n    color: rgba(0,0,0,.54);\n}\n\n.text-color{\n    color: orange;\n}\n\n.find-hotel-card .mat-card-image{\n    height: 175px;\n}\n\n/* Carousel */\n\n.carousel-inner{\n    overflow: hidden;\n}\n\n.carousel-inner .carousel-item img{\n    width: 100%;\n    display: inline-block;\n    height: 175px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.carousel-indicators li{\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n}\n\n/* End carousel */"

/***/ }),

/***/ "./src/app/templates/find-hotel-item/find-hotel-item.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/templates/find-hotel-item/find-hotel-item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"find-hotel-card\">\n  <!-- <img mat-card-image src=\"./assets/images/room33.jpg\" alt=\"hotel\"> -->\n\n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\" mat-card-image >\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"./assets/images/room33.jpg\" alt=\"hotel\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"./assets/images/room.jpg\" alt=\"hotel\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"./assets/images/room33.jpg\" alt=\"hotel\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n\n  <mat-card-content>\n    <h6 class=\"item-heading\">\n      Standard Double room with view\n    </h6>\n    <mat-card-subtitle>2 guests/room</mat-card-subtitle>\n    <mat-card-subtitle>1 double bed</mat-card-subtitle>\n    <hr>\n    <div class=\"item-content\">\n      <i class=\"material-icons\">restaurant</i>\n      <p>&nbsp;&nbsp;Breakfast not included</p>\n    </div>\n    <div class=\"item-content\">\n      <i class=\"material-icons\">attach_money</i>\n      <p>&nbsp;&nbsp;Non-refundable</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col item-content text-color\">\n        <i class=\"material-icons\">wifi</i>\n        <p>&nbsp;&nbsp;Free wifi</p>\n      </div>\n      <div class=\"col text-right\">\n        <p class=\"text-danger\">&nbsp;&nbsp;2 room(s) left !</p>\n      </div>\n    </div>\n  </mat-card-content>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"price text-color\">$119</p>\n    </div>\n    <div class=\"col text-right\">\n      <button mat-raised-button color=\"primary\">Choose</button>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/templates/find-hotel-item/find-hotel-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/templates/find-hotel-item/find-hotel-item.component.ts ***!
  \************************************************************************/
/*! exports provided: FindHotelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindHotelItemComponent", function() { return FindHotelItemComponent; });
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

var FindHotelItemComponent = /** @class */ (function () {
    function FindHotelItemComponent() {
    }
    FindHotelItemComponent.prototype.ngOnInit = function () {
    };
    FindHotelItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-hotel-item',
            template: __webpack_require__(/*! ./find-hotel-item.component.html */ "./src/app/templates/find-hotel-item/find-hotel-item.component.html"),
            styles: [__webpack_require__(/*! ./find-hotel-item.component.css */ "./src/app/templates/find-hotel-item/find-hotel-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindHotelItemComponent);
    return FindHotelItemComponent;
}());



/***/ }),

/***/ "./src/app/templates/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    width: 100%;\n    background-color: #ffffff;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    /* padding: 1.5rem 0; */\n    overflow: hidden;\n    z-index: 99;\n    position: fixed;\n    bottom: 0;\n}\n\n.footer-content{\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem 0;\n}\n\n.footer-detail{\n    width: 70%;\n}\n\n.footer-detail p{\n    margin-bottom: 0;\n}\n\n.footer-btn{\n    display: flex;\n    align-items: center;\n}\n\n.price{\n    color: orange;\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.mat-card-content, .mat-card-subtitle {\n    font-size: 15px;\n}"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer\">\n  <div class=\"footer-content\">\n    <div class=\"footer-detail\">\n      <mat-card-subtitle>Price/room/night star from</mat-card-subtitle>\n      <p class=\"price\">$119</p>\n      <mat-card-subtitle>per night on Hotel website</mat-card-subtitle>\n    </div>\n    <div class=\"footer-btn mx-auto\">\n        <button mat-raised-button color=\"warn\">Select room</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/templates/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/templates/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/templates/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    max-width: 100%;\n    display: block;\n}\n\n.header__image{\n    position: relative; \n}\n\n.header__image img{\n\n}\n\n#overlay {\n    position: absolute;    \n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(86, 58, 109, 0.418);\n    cursor: pointer;\n}\n\n.header__icon, .header__text{\n    position: absolute;\n    top: 5%;\n    z-index: 5;\n}\n\n.header__icon{\n    right: 5%;\n}\n\n.header__icon .fa-bars{\n    font-size: 2rem;\n}\n\n.header__text{\n    left: 5%;\n}\n\n/* General Header */\n\n.general-header{\n    background-color: #545dff;\n    height: 150px;\n    padding: 1rem;\n}\n\n.header-title{\n    display: flex;\n}\n\n/* Processbar */\n\n.header-processbar{\n    margin-right: 1rem;\n    color: #b4b4fb!important;\n}\n\n.active{\n    color: white!important;\n}\n\nul.processbar{\n    display: flex;\n    justify-content: flex-end;\n    text-decoration: none;\n    list-style-type: none;\n    padding: unset;\n    font-size: 12px;\n}\n\nul.processbar > li{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-left: .5rem;\n}\n\nul.processbar li p.circle{\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border: 1px solid #b4b4fb;\n    border-radius: 50%;\n    margin-right: .75rem;\n    /* padding: 2rem; */\n}\n\nul.processbar li p.line{\n    width: 30px;\n    height: 2px;\n    background-color: #b4b4fb;\n    margin-left: .25rem;\n}\n\n/* End Processbar */"

/***/ }),

/***/ "./src/app/templates/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"isDisplayHeader\">\n  <div class=\"header__image\">\n    <div id=\"overlay\"></div>\n    <img src=\"./assets/images/tivkumb_0.jpg\" alt=\"\" class=\"\">\n  </div>\n  <div class=\"header__text text-white\">\n    <h5>NEC Hotel</h5>\n  </div>\n  <div class=\"header__icon\">\n    <i class=\"fa fa-bars text-white\"></i>\n  </div> -->\n\n  <div class=\"general-header\">\n    <div class=\"header-title text-white\">\n      <div>\n        <i class=\"material-icons\">keyboard_backspace</i>\n      </div>\n      <div>\n        <h4>&nbsp;&nbsp;Fill in Details</h4>\n      </div>\n    </div>\n    <div class=\"header-processbar\">\n      <ul class=\"processbar\">\n        <li class=\"active\">\n          <p class=\"circle\">01</p>\n          <p class=\"label\">Book</p>\n          <p class=\"line\"></p>\n        </li>\n        <li class=\"\">\n          <p class=\"circle\">02</p>\n          <p class=\"label\">Check out</p>\n          <p class=\"line\"></p>\n        </li>\n        <li class=\"\">\n          <p class=\"circle\">03</p>\n          <p class=\"label\">Pay</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/templates/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayHeader", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/templates/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/templates/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/templates/hotel-item/hotel-item.component.css":
/*!***************************************************************!*\
  !*** ./src/app/templates/hotel-item/hotel-item.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    border: unset;\n}\n\n.card-body{\n    padding: 1.25rem 0;\n}\n\n.card-title{\n    margin-bottom: 0.5rem;\n}\n\n.card-img-top{\n    height: 115px;\n}\n\n.item_image{\n    border-radius: calc(0.75rem - 0.5px);\n}\n\n/* checked star */\n\n.checked{\n    color: orange;\n}\n\n.unchecked{\n\n}\n\n.item__info{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: nowrap;\n    margin-bottom: 0.5rem; \n}\n\n.item__info .price{\n    color: orange;  \n    font-size: 15px;\n    margin: unset;\n}\n\n.item__info .fa-star{\n    font-size: 12px;\n}"

/***/ }),

/***/ "./src/app/templates/hotel-item/hotel-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/templates/hotel-item/hotel-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"card-img-top item_image\" [src]=\"hotel.image\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{hotel.name}}</h5>\n    <div class=\"item__info\">\n      <div class=\"price__item\">\n        <p class=\"price\">{{hotel.price}}</p>\n      </div>\n      <div class=\"item__rating\">\n        <span class=\"fa fa-star checked\"></span>\n        <span class=\"fa fa-star checked\"></span>\n        <span class=\"fa fa-star checked\"></span>\n        <span class=\"fa fa-star unchecked\"></span>\n        <span class=\"fa fa-star unchecked\"></span>\n      </div>\n    </div>\n    <p class=\"card-text\">Some example text.{{hotel.descrition}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/templates/hotel-item/hotel-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/templates/hotel-item/hotel-item.component.ts ***!
  \**************************************************************/
/*! exports provided: HotelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelItemComponent", function() { return HotelItemComponent; });
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

var HotelItemComponent = /** @class */ (function () {
    function HotelItemComponent() {
    }
    HotelItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HotelItemComponent.prototype, "hotel", void 0);
    HotelItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotel-item',
            template: __webpack_require__(/*! ./hotel-item.component.html */ "./src/app/templates/hotel-item/hotel-item.component.html"),
            styles: [__webpack_require__(/*! ./hotel-item.component.css */ "./src/app/templates/hotel-item/hotel-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotelItemComponent);
    return HotelItemComponent;
}());



/***/ }),

/***/ "./src/app/templates/navbar-bottom/navbar-bottom.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/templates/navbar-bottom/navbar-bottom.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    width: 100%;\n    background-color: #ffffff;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: unset;\n    overflow: hidden;\n    z-index: 99;\n    position: fixed;\n    bottom: 0;\n}\n\n.navbar a {\n    float: left;\n    padding: 12px;\n    color: rgb(83, 83, 83);\n    text-decoration: none;\n    font-size: 12px;\n    text-align: center;\n}\n\n.navbar__icon{\n    font-size: 20px;\n}\n\n.navbar a:hover {\n    \n}\n\n.active {\n\n}\n\n@media screen and (max-width: 500px) {\n.navbar a {\n    float: none;\n    display: block;\n    }\n}"

/***/ }),

/***/ "./src/app/templates/navbar-bottom/navbar-bottom.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/templates/navbar-bottom/navbar-bottom.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" *ngIf=\"isDisplayNavbar\">\n    <a class=\"active\" href=\"#\"><i class=\"fa fa-fw fa-search navbar__icon\"></i><br>Search</a> \n    <a href=\"#\"><i class=\"fa fa-list navbar__icon\"></i><br>My Booking</a> \n    <a href=\"#\"><i class=\"fa fa-fw fa-bookmark navbar__icon\"></i><br>Bookmark</a> \n    <a href=\"#\"><i class=\"fa fa-fw fa-cog navbar__icon\"></i><br>Setting</a>\n    <a href=\"#\" routerLink=\"/login\"><i class=\"fa fa-fw fa-user navbar__icon\"></i><br>Account</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/templates/navbar-bottom/navbar-bottom.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/templates/navbar-bottom/navbar-bottom.component.ts ***!
  \********************************************************************/
/*! exports provided: NavbarBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBottomComponent", function() { return NavbarBottomComponent; });
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

var NavbarBottomComponent = /** @class */ (function () {
    function NavbarBottomComponent() {
    }
    NavbarBottomComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarBottomComponent.prototype, "isDisplayNavbar", void 0);
    NavbarBottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-bottom',
            template: __webpack_require__(/*! ./navbar-bottom.component.html */ "./src/app/templates/navbar-bottom/navbar-bottom.component.html"),
            styles: [__webpack_require__(/*! ./navbar-bottom.component.css */ "./src/app/templates/navbar-bottom/navbar-bottom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarBottomComponent);
    return NavbarBottomComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/imac-005/Intern/HotelBooking/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map