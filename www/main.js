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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/hotel-detail/hotel-detail.component */ "./src/app/pages/hotel-detail/hotel-detail.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _pages_fill_in_details_fill_in_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/fill-in-details/fill-in-details.component */ "./src/app/pages/fill-in-details/fill-in-details.component.ts");
/* harmony import */ var _pages_finded_hotel_list_finded_hotel_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/finded-hotel-list/finded-hotel-list.component */ "./src/app/pages/finded-hotel-list/finded-hotel-list.component.ts");
/* harmony import */ var _pages_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/room-list/room-list.component */ "./src/app/pages/room-list/room-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'HOME', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'FINDEDHOTELLIST', component: _pages_finded_hotel_list_finded_hotel_list_component__WEBPACK_IMPORTED_MODULE_8__["FindedHotelListComponent"] },
    { path: 'ROOMLIST', component: _pages_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_9__["RoomListComponent"] },
    { path: 'HOTELDETAIL', component: _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_4__["HotelDetailComponent"] },
    { path: 'LOGIN', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'SIGNUP', component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] },
    { path: 'FILLINDETAILS', component: _pages_fill_in_details_fill_in_details_component__WEBPACK_IMPORTED_MODULE_7__["FillInDetailsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
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

module.exports = ".main{\r\n    /* position: absolute;\r\n    top: 20%; */\r\n    /* z-index: 9;\r\n    margin-bottom: 100px; */\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <app-header class=\"header\" [title]=\"getTitle()\" [isDisplayHeader]=\"isDisplayHeader()\" [isDisplayHomeHeader]=\"isDisplayHomeHeader()\" [isDisplayInnerHeader]=\"isDisplayInnerHeader()\" [isDisplayProcessBar]=\"isDisplayProcessBar()\" [isDisplayStarRating]=\"isDisplayStarRating()\"\r\n        [isDisplayBackButton]=\"isDisplayBackButton()\" [isDisplayHeaderTitle]=\"isDisplayHeaderTitle()\" [applyCheckOutStatus]=\"applyCheckOutStatus()\" [applyPayStatus]=\"applyPayStatus()\">\r\n    </app-header>\r\n\r\n    <div class=\"main\">\r\n        <router-outlet></router-outlet>\r\n        <div class=\"spinner\" *ngIf=\"routerChanged\">\r\n            <div class=\"bounce1\"></div>\r\n            <div class=\"bounce2\"></div>\r\n            <div class=\"bounce3\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-navbar-bottom [isDisplayNavbar]=\"isDisplayNavbar()\"></app-navbar-bottom>\r\n\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
    function AppComponent(utility, router, _snackBar) {
        var _this = this;
        this.utility = utility;
        this.router = router;
        this._snackBar = _snackBar;
        this.routerChanged = true;
        utility.setDisplayHeader(true);
        utility.setDisplayHeaderTitle(true);
        utility.setDisplayHomeHeader(true);
        utility.setDisplayInnerHeader(false);
        utility.setDisplayNavbar(true);
        utility.setDisplayStarRating(false);
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
                _this.routerChanged = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
                _this.timeout = setTimeout(function () {
                    clearTimeout(_this.timeout);
                    _this.routerChanged = false;
                }, 2000);
            }
        });
    }
    AppComponent.prototype.isDisplayHeader = function () {
        return this.utility.isDisplayHeader();
    };
    AppComponent.prototype.isDisplayHomeHeader = function () {
        return this.utility.isDisplayHomeHeader();
    };
    AppComponent.prototype.isDisplayInnerHeader = function () {
        return this.utility.isDisplayInnerHeader();
    };
    AppComponent.prototype.isDisplayNavbar = function () {
        return this.utility.isDisplayNavbar();
    };
    AppComponent.prototype.isDisplayProcessBar = function () {
        return this.utility.isDisplayProcessBar();
    };
    AppComponent.prototype.isDisplayBackButton = function () {
        return this.utility.isDisplayBackButton();
    };
    AppComponent.prototype.isDisplayHeaderTitle = function () {
        return this.utility.isDisplayHeaderTitle();
    };
    AppComponent.prototype.getTitle = function () {
        return this.utility.getTitle();
    };
    AppComponent.prototype.isDisplayStarRating = function () {
        return this.utility.isDisplayStarRating();
    };
    AppComponent.prototype.applyCheckOutStatus = function () {
        return this.utility.applyCheckOutStatus();
    };
    AppComponent.prototype.applyPayStatus = function () {
        return this.utility.applyPayStatus();
    };
    AppComponent.prototype.pushPage = function (pageCode, stackStatus) {
        if (stackStatus === void 0) { stackStatus = null; }
        try {
            console.log('Push page: ', pageCode);
            // if (pageCode === PAGE_CODE.VERSION || pageCode === PAGE_CODE.EXCEPTION) {
            //   this.router.navigate(['/' + pageCode]);
            // } else {
            var dispId = pageCode.substring(4);
            var myself = this;
            // this.webServices.getInvalidateUserAcntKbn(SystemHelper.acntID, SystemHelper.acntSbt, dispId, function (result: any) {
            //   const data: ResYukoAcntUserInf = result;
            //   if (data) {
            //     if (data.errorCode === '0') {
            //       myself.utility.pushStackPage(pageCode, stackStatus);
            //       myself.router.navigate(['/' + pageCode]);
            //     }
            //   }
            // });
            myself.utility.pushStackPage(pageCode, stackStatus);
            myself.router.navigate(['/' + pageCode]);
            // }
        }
        catch (error) {
            // Nothing
        }
    };
    AppComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 3000,
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _templates_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/hotel-item/hotel-item.component */ "./src/app/templates/hotel-item/hotel-item.component.ts");
/* harmony import */ var _templates_navbar_bottom_navbar_bottom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/navbar-bottom/navbar-bottom.component */ "./src/app/templates/navbar-bottom/navbar-bottom.component.ts");
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/header/header.component */ "./src/app/templates/header/header.component.ts");
/* harmony import */ var _templates_explore_item_explore_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/explore-item/explore-item.component */ "./src/app/templates/explore-item/explore-item.component.ts");
/* harmony import */ var _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/hotel-detail/hotel-detail.component */ "./src/app/pages/hotel-detail/hotel-detail.component.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/footer/footer.component */ "./src/app/templates/footer/footer.component.ts");
/* harmony import */ var _templates_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/room-item/room-item.component */ "./src/app/templates/room-item/room-item.component.ts");
/* harmony import */ var _pages_fill_in_details_fill_in_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/fill-in-details/fill-in-details.component */ "./src/app/pages/fill-in-details/fill-in-details.component.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_utility_service_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/utility.service.js */ "./src/app/services/utility.service.js");
/* harmony import */ var _pages_finded_hotel_list_finded_hotel_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/finded-hotel-list/finded-hotel-list.component */ "./src/app/pages/finded-hotel-list/finded-hotel-list.component.ts");
/* harmony import */ var _templates_finded_hotel_item_finded_hotel_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./templates/finded-hotel-item/finded-hotel-item.component */ "./src/app/templates/finded-hotel-item/finded-hotel-item.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _pages_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/room-list/room-list.component */ "./src/app/pages/room-list/room-list.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//  Environment constant firebaseConfig property










// Date range








// Pipes

// Material



// Firebase




// Ng boostrap



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _templates_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_7__["HotelItemComponent"],
                _templates_navbar_bottom_navbar_bottom_component__WEBPACK_IMPORTED_MODULE_8__["NavbarBottomComponent"],
                _templates_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _templates_explore_item_explore_item_component__WEBPACK_IMPORTED_MODULE_10__["ExploreItemComponent"],
                _pages_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_11__["HotelDetailComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"],
                _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _templates_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_18__["RoomItemComponent"],
                _pages_fill_in_details_fill_in_details_component__WEBPACK_IMPORTED_MODULE_19__["FillInDetailsComponent"],
                _pages_finded_hotel_list_finded_hotel_list_component__WEBPACK_IMPORTED_MODULE_22__["FindedHotelListComponent"],
                _templates_finded_hotel_item_finded_hotel_item_component__WEBPACK_IMPORTED_MODULE_23__["FindedHotelItemComponent"],
                _pages_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_29__["RoomListComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterPipe"]
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_26__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_12__["SatDatepickerModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_12__["SatNativeDateModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_20__["NgPipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestoreModule"]
            ],
            providers: [
                // include some services in app module providers
                _services_utility_service_js__WEBPACK_IMPORTED_MODULE_21__["UtilityService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

/***/ "./src/app/pages/fill-in-details/fill-in-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/fill-in-details/fill-in-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-details-content {\r\n    margin-top: 1rem;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n/* The container */\r\n\r\n\r\n.container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n\r\n/* Hide the browser's default radio button */\r\n\r\n\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* Create a custom radio button */\r\n\r\n\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n    border: 1px solid #545dff;\r\n}\r\n\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n\r\n.container:hover input~.checkmark {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n/* When the radio button is checked, add a blue background */\r\n\r\n\r\n.container input:checked~.checkmark {\r\n    background-color: white;\r\n}\r\n\r\n\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n\r\n\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n\r\n/* Show the indicator (dot/circle) when checked */\r\n\r\n\r\n.container input:checked~.checkmark:after {\r\n    display: block;\r\n}\r\n\r\n\r\n/* Style the indicator (dot/circle) */\r\n\r\n\r\n.container .checkmark:after {\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    background: #545dff;\r\n}\r\n\r\n\r\n/* Button */\r\n\r\n\r\n.btn-continue {\r\n    margin: 1.5rem 0;\r\n}\r\n\r\n\r\n/* End button */\r\n\r\n\r\n/* Modal contact*/\r\n\r\n\r\n.modal {\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n\r\n.modal-header {\r\n    justify-content: unset;\r\n}\r\n\r\n\r\n.modal-body {\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.modal-dialog {\r\n    position: fixed;\r\n    bottom: 0;\r\n    margin: unset;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.modal-content {\r\n    border: unset;\r\n    border-radius: unset;\r\n}\r\n\r\n\r\ni.material-icons.modal-back-icon {\r\n    margin-top: 0.15rem;\r\n}\r\n\r\n\r\n.country-code,\r\n.telephone {\r\n    width: 48%;\r\n}\r\n\r\n\r\nh6.contact-title {\r\n    margin: 1.5rem 0 1.5rem 0;\r\n}\r\n\r\n\r\n.field {\r\n    margin-bottom: .75rem;\r\n}\r\n\r\n\r\n/* End modal contact */\r\n\r\n\r\n/* .modal.fade .modal-dialog {\r\n    -webkit-transform: scale(0.1);\r\n    -moz-transform: scale(0.1);\r\n    -ms-transform: scale(0.1);\r\n    transform: scale(0.1);\r\n    top: 300px;\r\n    opacity: 0;\r\n    -webkit-transition: all 0.3s;\r\n    -moz-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.modal.fade.in .modal-dialog {\r\n    -webkit-transform: scale(1);\r\n    -moz-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    transform: scale(1);\r\n    -webkit-transform: translate3d(0, -300px, 0);\r\n    transform: translate3d(0, -300px, 0);\r\n    opacity: 1;\r\n} */\r\n\r\n\r\n/* Payment-button-group */\r\n\r\n\r\n.payment-button-group {\r\n    margin-top: 20rem;\r\n}"

/***/ }),

/***/ "./src/app/pages/fill-in-details/fill-in-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fill-in-details/fill-in-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fill-details-content\" *ngIf=\"bookCheckoutStatus; else Payment\">\r\n    <!-- Book detail -->\r\n    <div class=\"book-content container-fluid\">\r\n        <!-- Your Booking -->\r\n        <div>\r\n            <p class=\"title-text\">Your booking</p>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <p>Marriotte NY city</p>\r\n                </div>\r\n                <div class=\"col text-right\">\r\n                    <button mat-stroked-button color=\"primary\">Details</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- End Your Booking -->\r\n\r\n        <hr>\r\n\r\n        <!-- Information Booking -->\r\n        <div>\r\n            <div class=\"infor-book-item\">\r\n                <ul>\r\n                    <li class=\"dot-check-in\">\r\n                        <span class=\"title-text\">&nbsp;&nbsp;Check-in-day</span>\r\n                        <p>Thur, 06 August 2018</p>\r\n                    </li>\r\n                    <li class=\"dot-check-out\">\r\n                        <span class=\"title-text\">&nbsp;&nbsp;Check-out-day</span>\r\n                        <p>Sat, 10 August 2018</p>\r\n                    </li>\r\n                    <li class=\"dot-room\">\r\n                        <span class=\"title-text room-type\">&nbsp;&nbsp;Room</span>\r\n                        <p>Standard Double Room with view</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- End Information Booking -->\r\n\r\n            <hr>\r\n\r\n            <!-- Contact Details -->\r\n            <div class=\"contact-detail\" *ngIf=\"originContactStatus; else CheckOutDetail\">\r\n                <p class=\"title-text\">Contact Details</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-8\">\r\n                        <p>Please fill in contact details</p>\r\n                    </div>\r\n                    <div class=\"col text-right\">\r\n                        <button mat-stroked-button color=\"primary\" data-toggle=\"modal\" data-target=\"#myModal\">Fill\r\n                            in</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-2\">\r\n                    <div class=\"col-8\">\r\n                        <p>Any special request?</p>\r\n                    </div>\r\n                    <div class=\"col text-right\">\r\n                        <button mat-stroked-button color=\"primary\">Add more</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- End Contact Details -->\r\n\r\n            <hr>\r\n\r\n            <!-- Total price -->\r\n            <div class=\"total-price\">\r\n                <p class=\"title-text\">Your Price</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-8\">\r\n                        <p>Total Price</p>\r\n                    </div>\r\n                    <div class=\"col text-right\">\r\n                        <p class=\"price\">$119</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- End total price -->\r\n\r\n            <!-- Button  -->\r\n            <button mat-raised-button color=\"primary\" class=\"btn-common btn-continue\" (click)=\"FillInContinue()\" [disabled]=\"btnContinueStatus\">{{buttonTitle}}</button>\r\n            <!-- End Button -->\r\n        </div>\r\n        <!-- End book detail -->\r\n    </div>\r\n</div>\r\n<!-- Check-Out -->\r\n<ng-template #CheckOutDetail>\r\n    <!-- Contact Check-Out Details -->\r\n    <div class=\"contact-detail\">\r\n        <p class=\"title-text\">Contact Details</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-8\">\r\n                <p>Guest's name</p>\r\n            </div>\r\n            <div class=\"col-8\">\r\n                <p style=\"font-weight: 700;\">{{_fullName}}</p>\r\n            </div>\r\n        </div>\r\n        <p>{{_telephone}} / {{_email}}</p>\r\n        <div class=\"select-form\">\r\n            <label class=\"container\">I'm booking for myself\r\n                <input type=\"radio\" checked=\"checked\" name=\"radio\">\r\n                <span class=\"checkmark\"></span>\r\n            </label>\r\n            <label class=\"container\">I'm booking for another person\r\n                <input type=\"radio\" name=\"radio\">\r\n                <span class=\"checkmark\"></span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <!-- End Contact Check-Out Details -->\r\n\r\n    <hr>\r\n\r\n    <!-- Special request-->\r\n    <div>\r\n        <p class=\"title-text\">Special request</p>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <p>High Floor</p>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n                <button mat-stroked-button color=\"primary\">Change / Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End special request -->\r\n</ng-template>\r\n<!-- End Check Out -->\r\n\r\n<!-- Contact Form -->\r\n<ng-template #Payment>\r\n    <div class=\"container-fluid\">\r\n        <p>Implement payment step</p>\r\n        <!-- Button  -->\r\n        <div class=\"row payment-button-group\">\r\n            <div class=\"col\">\r\n                <button mat-raised-button color=\"primary\" class=\"btn-common btn-check-info\" (click)=\"checkInfo()\">Check Information</button>\r\n            </div>\r\n            <div class=\"col\">\r\n                <button mat-raised-button color=\"primary\" class=\"btn-common btn-check-info\" (click)=\"confirmPayment()\">Confirm</button>\r\n            </div>\r\n        </div>\r\n        <!-- End Button -->\r\n    </div>\r\n</ng-template>\r\n<!-- End contact form -->\r\n\r\n<!-- Popup Contact -->\r\n<div class=\"modal fade\" id=\"myModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n                <span data-dismiss=\"modal\"><i class=\"material-icons modal-back-icon\">keyboard_backspace</i></span>\r\n                <h4 class=\"modal-title\">&nbsp;&nbsp;Contact</h4>\r\n            </div>\r\n\r\n            <!-- Modal body -->\r\n            <div class=\"modal-body\">\r\n                <h6 class=\"contact-title\">Where to send you booking details?</h6>\r\n                <form action=\"\">\r\n                    <!-- Name -->\r\n                    <mat-form-field class=\"field\">\r\n                        <input matInput placeholder=\"Contact name\" #fullName>\r\n                    </mat-form-field>\r\n                    <!-- End name -->\r\n\r\n                    <!-- Country code & telephone -->\r\n                    <div class=\"field d-flex justify-content-between\">\r\n                        <mat-form-field class=\"country-code\">\r\n                            <span matPrefix>+ &nbsp;</span>\r\n                            <input matInput maxlength=\"2\" placeholder=\"Country code\" #countryCode>\r\n                            <mat-hint align=\"end\">{{countryCode.value.length}} / 2</mat-hint>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"telephone\">\r\n                            <input matInput maxlength=\"8\" placeholder=\"Telephone\" #telephone>\r\n                            <mat-hint align=\"end\">{{telephone.value.length}} / 8</mat-hint>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <!-- End code & telephone -->\r\n\r\n                    <!-- Email -->\r\n                    <mat-form-field class=\"field\">\r\n                        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" #email>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                            Please enter a valid email address\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                            Email is <strong>required</strong>\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                    <!-- End email -->\r\n                </form>\r\n            </div>\r\n\r\n            <!-- Modal footer -->\r\n            <div class=\"modal-footer\">\r\n                <button mat-raised-button color=\"primary\" class=\"btn\" (click)=\"getInformationGuest(fullName, countryCode, telephone, email)\">Done</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End popup Contact -->"

/***/ }),

/***/ "./src/app/pages/fill-in-details/fill-in-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fill-in-details/fill-in-details.component.ts ***!
  \********************************************************************/
/*! exports provided: FillInDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillInDetailsComponent", function() { return FillInDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FillInDetailsComponent = /** @class */ (function (_super) {
    __extends(FillInDetailsComponent, _super);
    function FillInDetailsComponent(utility, router, _snackBar) {
        var _this = _super.call(this, utility, router, _snackBar) || this;
        _this.utility = utility;
        _this.router = router;
        _this._snackBar = _snackBar;
        _this.originContactStatus = true;
        _this.bookCheckoutStatus = true;
        _this.countContinueBtnClick = 0;
        _this.btnContinueStatus = true;
        _this.buttonTitle = 'Continue';
        _this.currentPositon = '';
        _this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        _this.utility.setDisplayHeader(true);
        _this.utility.setDisplayHomeHeader(false);
        _this.utility.setDisplayInnerHeader(true);
        _this.utility.setDisplayProcessBar(true);
        _this.utility.setDisplayStarRating(false);
        _this.utility.setDisplayNavbar(false);
        _this.utility.setCheckOutStatus(false);
        _this.utility.setPayStatus(false);
        _this.utility.setTitle('Fill In Details');
        return _this;
    }
    FillInDetailsComponent.prototype.ngOnInit = function () {
    };
    FillInDetailsComponent.prototype.FillInContinue = function () {
        this.bookCheckoutStatus = false;
        this.utility.setPayStatus(true);
    };
    FillInDetailsComponent.prototype.getInformationGuest = function (fullName, countryCode, telephone, email) {
        this._fullName = fullName.value;
        this._telephone = '+' + countryCode.value + ' ' + telephone.value;
        this._email = email.value;
        var telephoneStr = countryCode.value + telephone.value;
        var regTelephone = /^[0-9]+$/;
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!this._fullName || !regTelephone.test(telephoneStr) || (this._telephone.length < 10) || !regEmail.test(this._email)) {
            console.log('Tel: ' + false);
            this.openSnackBarTop('Please check your input!', '');
        }
        else {
            this.originContactStatus = false;
            this.btnContinueStatus = !this.btnContinueStatus;
            this.utility.setCheckOutStatus(true);
            $('#myModal').modal('hide');
        }
        console.log(this._fullName + ' ' + this._telephone + ' ' + this._email);
    };
    FillInDetailsComponent.prototype.checkInfo = function () {
        this.bookCheckoutStatus = !this.bookCheckoutStatus;
        this.utility.setPayStatus(false);
    };
    FillInDetailsComponent.prototype.confirmPayment = function () {
        alert('--- Return result ---');
    };
    FillInDetailsComponent.prototype.openSnackBarTop = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
            // here specify the position
            verticalPosition: 'top'
        });
    };
    FillInDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fill-in-details',
            template: __webpack_require__(/*! ./fill-in-details.component.html */ "./src/app/pages/fill-in-details/fill-in-details.component.html"),
            styles: [__webpack_require__(/*! ./fill-in-details.component.css */ "./src/app/pages/fill-in-details/fill-in-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], FillInDetailsComponent);
    return FillInDetailsComponent;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/finded-hotel-list/finded-hotel-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/finded-hotel-list/finded-hotel-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".find-hotel-content {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.title-h{\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/pages/finded-hotel-list/finded-hotel-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/finded-hotel-list/finded-hotel-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"find-hotel-content container-fluid mt-2\">\r\n    <div class=\"title\">\r\n        <span class=\"title-h\">Search result ({{searchItemCount}} hotels)</span>\r\n    </div>\r\n    <div class=\"item\">\r\n        <div class=\"row\">\r\n            <ng-container #listHotel *ngFor=\"let hotelItem of hotelList | filterBy: ['hotelCity']: titleSearch \">\r\n                <app-finded-hotel-item [hotelItem]=\"hotelItem\" (eventChooseHotel)=\"chooseHotel($event)\"></app-finded-hotel-item>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/finded-hotel-list/finded-hotel-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/finded-hotel-list/finded-hotel-list.component.ts ***!
  \************************************************************************/
/*! exports provided: FindedHotelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindedHotelListComponent", function() { return FindedHotelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var src_app_services_hotel_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/hotel-management.service */ "./src/app/services/hotel-management.service.ts");
/* harmony import */ var src_app_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindedHotelListComponent = /** @class */ (function () {
    function FindedHotelListComponent(utility, afDB, hotelManagementService, firebaseService) {
        this.utility = utility;
        this.afDB = afDB;
        this.hotelManagementService = hotelManagementService;
        this.firebaseService = firebaseService;
        this.utility.setDisplayHeader(true);
        this.utility.setDisplayInnerHeader(false);
        this.utility.setDisplayBackButton(true);
        this.utility.setDisplayHeaderTitle(false);
        this.utility.setDisplayHomeHeader(true);
        this.utility.setDisplayNavbar(true);
        this.utility.setDisplayProcessBar(false);
        this.utility.setDisplayStarRating(false);
        this.getStoreData();
        this.utility.setTitle(this.titleSearch);
    }
    FindedHotelListComponent.prototype.ngOnInit = function () {
        this.getHotelList();
    };
    FindedHotelListComponent.prototype.ngAfterViewInit = function () {
    };
    FindedHotelListComponent.prototype.getStoreData = function () {
        var _this = this;
        // try some HTTP request:
        this.hotelManagementService.dataSearchForm.subscribe(function (result) {
            _this.titleSearch = result.distination;
        });
    };
    FindedHotelListComponent.prototype.getHotelList = function () {
        var _this = this;
        this.firebaseService.get('/hotels').subscribe(function (result) {
            _this.hotelList = result;
            console.log(_this.hotelList);
        });
    };
    FindedHotelListComponent.prototype.chooseHotel = function (hotelItem) {
        console.log(hotelItem.hotelID);
        // alert('hello');
    };
    FindedHotelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finded-hotel-list',
            template: __webpack_require__(/*! ./finded-hotel-list.component.html */ "./src/app/pages/finded-hotel-list/finded-hotel-list.component.html"),
            styles: [__webpack_require__(/*! ./finded-hotel-list.component.css */ "./src/app/pages/finded-hotel-list/finded-hotel-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            src_app_services_hotel_management_service__WEBPACK_IMPORTED_MODULE_3__["HotelManagementService"],
            src_app_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], FindedHotelListComponent);
    return FindedHotelListComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\r\n    outline: 0 !important;\r\n}\r\n\r\n#custom-search-input {\r\n    border: solid 1px #ced4da;\r\n    border-radius: 6px;\r\n    background-color: #fff;\r\n}\r\n\r\n#custom-search-input input {\r\n    border: 0;\r\n    box-shadow: none;\r\n}\r\n\r\n#custom-search-input button {\r\n    margin: 2px 0 0 0;\r\n    background: none;\r\n    box-shadow: none;\r\n    border: 0;\r\n    color: #666666;\r\n    padding: 0 0 0 10px;\r\n}\r\n\r\n#custom-search-input button:hover {\r\n    border: 0;\r\n    box-shadow: none;\r\n    border-left: solid 1px #ccc;\r\n}\r\n\r\n#custom-search-input .glyphicon-search {\r\n    font-size: 23px;\r\n}\r\n\r\n.icon-search {\r\n    color: #a8a8a8;\r\n}\r\n\r\n.form {\r\n    padding: 0.5em 5%;\r\n}\r\n\r\n.form-control {\r\n    padding: unset;\r\n}\r\n\r\n.form-control:focus {\r\n    box-shadow: none;\r\n    border-color: #ced4da;\r\n}\r\n\r\n.form__date {\r\n    border: 1px solid #ced4da!important;\r\n}\r\n\r\n.form__label {\r\n    margin: 0.75rem 0;\r\n}\r\n\r\n.form__icon {\r\n    color: #fc6f81;\r\n}\r\n\r\n.card {\r\n    border-radius: 1em;\r\n}\r\n\r\n.info-text {\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n\r\nheader,\r\nform {\r\n    padding: 2em 5%;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.check-in {\r\n    margin-left: unset;\r\n}\r\n\r\n.field__date {\r\n    margin-right: 0.75rem;\r\n}\r\n\r\n#duration {\r\n    text-align: center;\r\n}\r\n\r\nh2.heading {\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n    text-align: left;\r\n    color: #506982;\r\n    border-bottom: 1px solid #506982;\r\n    padding-bottom: 3px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.btn-find-hotel {\r\n    outline: none;\r\n    background-color: #545dff;\r\n    /* border-color: #545dff; */\r\n    font-size: 16px;\r\n    margin-top: 10%;\r\n    padding: 5px 0;\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.title__recent-searches {\r\n    padding: 1rem 0;\r\n}\r\n\r\n.col-6.col-md-6.item:nth-child(odd) {\r\n    padding-right: .5rem;\r\n    padding-left: 2px;\r\n}\r\n\r\n.col-6.col-md-6.item:nth-child(even) {\r\n    padding-left: .5rem;\r\n    padding-right: 2px;\r\n}\r\n\r\n.explore {\r\n    width: 100%;\r\n}\r\n\r\n.explore__content {\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n.explore__item {\r\n    display: inline-block;\r\n    /* margin: 0 0.5rem; */\r\n}\r\n\r\n/* Date */\r\n\r\n#control_wrapper {\r\n    max-width: 246px;\r\n    margin: 30px auto;\r\n    padding-top: 50px;\r\n}\r\n\r\n.control-section {\r\n    margin: 25px auto;\r\n}\r\n\r\n.right .calendar-table {\r\n    display: none;\r\n}\r\n\r\n/* Saturn Picker */\r\n\r\nsat-datepicker-toggle.mat-datepicker-toggle {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.mat-datepicker-toggle {\r\n    outline: none!important;\r\n}\r\n\r\n.mat-datepicker-toggle-active {\r\n    color: #545dff;\r\n}\r\n\r\n/* Input number guests */\r\n\r\n/* * {\r\n    box-sizing: border-box\r\n} */\r\n\r\n.input-number {\r\n    width: 80px;\r\n    padding: 0 12px;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    outline: none\r\n}\r\n\r\n.input-number,\r\n.input-number-decrement,\r\n.input-number-increment {\r\n    /* border: 1px solid #ccc; */\r\n    height: 40px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.input-number-decrement,\r\n.input-number-increment {\r\n    display: inline-block;\r\n    width: 45px;\r\n    line-height: 38px;\r\n    background: #f1f1f1;\r\n    color: #444;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    background: #ddd\r\n}\r\n\r\n.input-number-decrement {\r\n    border-right: none;\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.input-number-increment {\r\n    border-left: none;\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n/* icon location */\r\n\r\n/* button.ap-input-icon.ap-icon-pin {\r\n    display: none!important;\r\n} */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home container mx-auto container-custom\">\r\n    <div class=\"card home__find-hotel\">\r\n        <form class=\"form\">\r\n            <!--  Details -->\r\n            <div class=\"form-group\">\r\n                <div class=\"grid\">\r\n                    <div class=\"col-1-4 col-1-4-sm\">\r\n                        <div class=\"controls\">\r\n                            <label class=\"form__label\"><i\r\n                                    class=\"form__icon fa fa-map-pin\"></i>&nbsp;&nbsp;Destination</label>\r\n                            <div id=\"custom-search-input\">\r\n                                <div class=\"input-group px-2\">\r\n                                    <!-- <input type=\"text\" class=\"form-control input-search\" placeholder=\"NewYork\" [(ngModel)]=\"search\" name=\"search\" /> -->\r\n                                    <input type=\"search\" class=\"form-control input-search\" id=\"address-input\" placeholder=\"Where are we going?\" />\r\n                                    <!-- <span class=\"input-group-btn\">\r\n                                        <button class=\"btn btn-search btn-lg\" type=\"button\">\r\n                                            <a><i class=\"fa fa-search icon-search\"></i></a>\r\n                                        </button>\r\n                                    </span> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1-4 col-1-4-sm\">\r\n                        <div class=\"controls\">\r\n                            <div class=\"row check-in\">\r\n                                <div class=\"col-8 col-md-6 p-0 field__date\">\r\n                                    <label class=\"form__label\"><i\r\n                                            class=\"form__icon fa fa-calendar\"></i>&nbsp;&nbsp;Check-in date</label>\r\n                                    <input matInput [satDatepicker]=\"picker2\" class=\"form-control px-2 form__date\" [value]=\"dateRangeDisp\" (dateChange)=\"saveDate($event)\" />\r\n                                    <sat-datepicker #picker2 [rangeMode]=\"true\" [closeAfterSelection]=\"true\"></sat-datepicker>\r\n                                    <sat-datepicker-toggle matSuffix [for]=\"picker2\" (onfocusout)=\"onFocusOut()\"></sat-datepicker-toggle>\r\n                                </div>\r\n                                <div class=\"col-3 col-md-6 p-0 field__duration\">\r\n                                    <label class=\"form__label\">Duration</label>\r\n                                    <input type=\"text\" class=\"form-control px-1 text-center\" disabled [(ngModel)]=\"duration\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1-4 col-1-4-sm\">\r\n                        <div class=\"controls\">\r\n                            <label class=\"form__label\"><i class=\"form__icon fa fa-tags\"></i>&nbsp;&nbsp;Total guest(s)</label>\r\n                            <div>\r\n                                <div class=\"input-group\">\r\n                                    <!-- <input type=\"text\" class=\"form-control\" placeholder=\"2 guest(s)\" />\r\n                                    <span class=\"input-group-btn\">\r\n                                        <button class=\"btn btn-info btn-lg\" type=\"button\">\r\n                                            <a><i class=\"fa fa-sort\"></i></a>\r\n                                        </button>\r\n                                    </span> -->\r\n                                    <span class=\"input-number-decrement\">–</span><input class=\"input-number form-control\" type=\"text\" value=\"1\" min=\"0\" max=\"10\"><span class=\"input-number-increment\">+</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1-4 col-1-4-sm\">\r\n                        <div class=\"controls\">\r\n                            <button [disabled]=\"!isEnableButtonSearch\" mat-raised-button color=\"primary\" class=\"btn-find-hotel\" (click)=\"sendSearch()\">Find hotel</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /.form-group -->\r\n        </form>\r\n    </div>\r\n    <div class=\"recent-searches\">\r\n        <h5 class=\"title__recent-searches\">Recent Researches</h5>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6 col-md-6 item \" *ngFor='let item of hotelListRecent'>\r\n                    <app-hotel-item [hotel]='item' (click)=\"goToPage('FINDEDHOTELLIST')\"></app-hotel-item>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"line\">\r\n\r\n    <div class=\"explore\">\r\n        <h5 class=\"title__recent-searches\">Explore with TravelInHands</h5>\r\n        <div class=\"explore__content\">\r\n            <app-explore-item class=\"explore__item\"></app-explore-item>\r\n            <app-explore-item class=\"explore__item\"></app-explore-item>\r\n            <app-explore-item class=\"explore__item\"></app-explore-item>\r\n            <app-explore-item class=\"explore__item\"></app-explore-item>\r\n            <app-explore-item class=\"explore__item\"></app-explore-item>\r\n        </div>\r\n    </div>\r\n\r\n    <input type=\"search\" id=\"address-input\" placeholder=\"Where are we going?\" />\r\n</div>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/system.constants */ "./src/app/utilities/system.constants.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var src_app_services_hotel_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/hotel-management.service */ "./src/app/services/hotel-management.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// Declare mobiscroll
var guestValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(utility, router, _snackbar, afDB, hotelManagementService) {
        var _this = _super.call(this, utility, router, _snackbar) || this;
        _this.utility = utility;
        _this.router = router;
        _this._snackbar = _snackbar;
        _this.afDB = afDB;
        _this.hotelManagementService = hotelManagementService;
        _this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isEnableButtonSearch = true;
        // Date Range
        _this.dateRangeDisp = { 'begin': Date, 'end': Date };
        // Declare variable of DateRangePicker
        _this.duration = '';
        _this.hotelList = [];
        _this.hotelListRecent = [
            { name: 'NewYork City', price: '200 USD', description: 'Some example text', image: './assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg' },
            { name: 'White Palace', price: '170 USD', description: 'Some example text', image: './assets/images/hotel.jpg' },
            { name: 'King Hotel', price: '150 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' },
            { name: 'NEC Hotel', price: '1200 USD', description: 'Some example text', image: './assets/images/room.jpg' }
        ];
        utility.setDisplayHeader(true);
        utility.setDisplayHomeHeader(true);
        utility.setDisplayInnerHeader(false);
        utility.setDisplayNavbar(true);
        utility.setDisplayHeaderTitle(true);
        utility.setDisplayBackButton(false);
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        inputNumber($('.input-number'));
        configAlgolia();
    };
    HomeComponent.prototype.convertTime = function (str) {
        var date = new Date(str), month = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [month, day, date.getFullYear()].join("/");
    };
    HomeComponent.prototype.saveDate = function (event) {
        var diffDate;
        // look at how the date is emitted from save
        console.log(event.target.value.begin);
        console.log(event.target.value.end);
        this.beginDate = new Date(this.convertTime(event.target.value.begin)).getTime();
        this.endDate = new Date(this.convertTime(event.target.value.end)).getTime();
        diffDate = (this.endDate - this.beginDate) / (24 * 3600 * 1000);
        this.duration = diffDate + ' night(s)';
        // change in view
        this.dateRangeDisp = event.target.value;
    };
    // public isDisplayHeader(): boolean {
    //   return this.utility.isDisplayHeader();
    // }
    // public isDisplayHomeHeader(): boolean {
    //   return this.utility.isDisplayHomeHeader();
    // }
    // public isDisplayInnerHeader(): boolean {
    //   return this.utility.isDisplayInnerHeader();
    // }
    HomeComponent.prototype.goToPage = function (pageCode) {
        try {
            var targetPage = src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_4__["PAGE_CODE"][pageCode];
            console.log(targetPage);
            if (targetPage) {
                this.pushPage(targetPage, {
                    params: {},
                    pageCode: src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_4__["PAGE_CODE"].HOME
                });
            }
        }
        catch (error) {
            // Nothing
        }
    };
    // ngOnDestroy() {
    // }
    // Search Hotel
    HomeComponent.prototype.sendSearch = function () {
        console.log('SendSearch', this.search);
        this.hotelManagementService.setSearchFormData({ distination: this.search, checkInDate: '', checkOutDate: '', duration: this.duration, noOfGuest: '' });
        this.goToPage('FINDEDHOTELLIST');
    };
    // CSS
    HomeComponent.prototype.onFocusOut = function () {
        alert("sđsd");
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        //Transfer different component
        console.log("ngOnDestroy");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "searchEvent", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            src_app_services_hotel_management_service__WEBPACK_IMPORTED_MODULE_7__["HotelManagementService"]])
    ], HomeComponent);
    return HomeComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/hotel-detail/hotel-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/hotel-detail/hotel-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Content */\r\n\r\n.hotel-detail {\r\n    margin-bottom: 8rem;\r\n}\r\n\r\n/*Slide */\r\n\r\n.container-slide {\r\n    padding-right: 25px;\r\n    padding-left: 25px;\r\n}\r\n\r\n.carousel-inner {\r\n    border-radius: 0.5em;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.carousel-inner img {\r\n    width: 100%;\r\n    height: 315px;\r\n}\r\n\r\n.carousel-indicators li {\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* End Slide */\r\n\r\n/* Deals */\r\n\r\n.heading {\r\n    margin: 2rem 0;\r\n}\r\n\r\n.deals__content,\r\n.rating {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    /* align-items: center; */\r\n}\r\n\r\n.sub-title,\r\n.pernight {\r\n    font-size: 14px;\r\n    color: rgb(150, 150, 150);\r\n}\r\n\r\n.title {\r\n    color: #4D4DC7;\r\n}\r\n\r\n.price {\r\n    color: rgb(255, 116, 66);\r\n}\r\n\r\n.btn-see {\r\n    float: right;\r\n    background-color: rgb(195, 195, 238);\r\n    font-size: 14px;\r\n    color: #4c4cc6;\r\n}\r\n\r\nhr.line {\r\n    margin-top: 4rem;\r\n    border-top: 2px solid #f5bec5;\r\n}\r\n\r\n/* End Deals */\r\n\r\n/* Rating & Reviews */\r\n\r\n.rating__point {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #4D4DC7;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.point {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.bar__content {\r\n    padding-right: 15px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.bar__content:nth-child(odd) {\r\n    padding-left: 0;\r\n}\r\n\r\n/* .bar__content:nth-child(even){\r\n    padding-right: 0;\r\n} */\r\n\r\n.bar__content p {\r\n    margin-bottom: 1rem;\r\n    letter-spacing: 0.5;\r\n}\r\n\r\n/* The bar container */\r\n\r\n.bar-container {\r\n    width: 85%;\r\n    background-color: rgb(247, 209, 138);\r\n    text-align: center;\r\n    color: white;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* Individual bars */\r\n\r\n.bar {\r\n    width: 60%;\r\n    height: 4px;\r\n    background-color: rgb(255, 175, 25);\r\n    border-radius: 10px;\r\n    position: relative;\r\n}\r\n\r\n.rating__bars {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.bar__point {\r\n    position: absolute;\r\n    color: rgb(255, 175, 25);\r\n    top: 1.5rem;\r\n    right: 5px;\r\n}\r\n\r\n/* End Rating & Reviews */\r\n\r\n/* Amenities */\r\n\r\n.amenites__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.amenities__item {\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    width: 80px;\r\n    height: 80px;\r\n    border: 1px solid rgb(70, 70, 70);\r\n}\r\n\r\n.icon,\r\n.icon-name {\r\n    color: #4D4DC7;\r\n}\r\n\r\n.icon {\r\n    font-size: 25px;\r\n}\r\n\r\n.icon-name {\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n/* End Amenities */\r\n\r\n/* Description Hotel */\r\n\r\n.description-text {\r\n    color: rgb(150, 150, 150);\r\n    font-size: 14px;\r\n    line-height: 1.75rem;\r\n    letter-spacing: .5px;\r\n}\r\n\r\n/* End Descripttion Hotel */\r\n\r\n/* Contact */\r\n\r\n#map {\r\n    width: 100%;\r\n    height: 250px;\r\n    background-color: grey;\r\n}\r\n\r\n/* End Contact */\r\n\r\n/* Footer */\r\n\r\n.footer {\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    /* padding: 1.5rem 0; */\r\n    overflow: hidden;\r\n    z-index: 99;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n.footer-content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.footer-detail {\r\n    width: 70%;\r\n}\r\n\r\n.footer-detail p {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.footer-btn {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.price {\r\n    color: orange;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.mat-card-content,\r\n.mat-card-subtitle {\r\n    font-size: 15px;\r\n}\r\n\r\n.footer-subtitle {\r\n    margin-bottom: unset;\r\n}\r\n\r\n/* End Footer */"

/***/ }),

/***/ "./src/app/pages/hotel-detail/hotel-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/hotel-detail/hotel-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-detail container-custom\">\r\n    <!-- Carousel -->\r\n    <div class=\"container-fluid container-slide\">\r\n        <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <!-- Indicators -->\r\n            <ul class=\"carousel-indicators\">\r\n                <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n            </ul>\r\n            <!-- The slideshow -->\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img src=\"./assets/images/HaLong.jpg\" alt=\"Los Angeles\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg\" alt=\"Chicago\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/tivkumb_0.jpg\" alt=\"New York\">\r\n                </div>\r\n            </div>\r\n            <!-- Left and right controls -->\r\n            <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\"></span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\"></span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- End Carousel  -->\r\n\r\n    <div class=\"container-fluid\">\r\n\r\n        <!-- Deals -->\r\n        <!-- <div class=\"deals\">\r\n      <h6 class=\"deals__heading heading\">Deals</h6>\r\n      <div class=\"deals__content\">\r\n        <div class=\"deals__text\">\r\n          <h6 class=\"deals__title title\">\r\n            Hotel Website\r\n          </h6>\r\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\r\n        </div>\r\n        <div class=\"deals__price\">\r\n          <h6 class=\"price\">$119</h6>\r\n          <p class=\"pernight\">per night</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"deals__content\">\r\n        <div class=\"deals__text\">\r\n          <h6 class=\"deals__title title\">\r\n            Hotel Website\r\n          </h6>\r\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\r\n        </div>\r\n        <div class=\"deals__price\">\r\n          <h6 class=\"price\">$119</h6>\r\n          <p class=\"pernight\">per night</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"deals__content\">\r\n        <div class=\"deals__text\">\r\n          <h6 class=\"deals__title title\">\r\n            Hotel Website\r\n          </h6>\r\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\r\n        </div>\r\n        <div class=\"deals__price\">\r\n          <h6 class=\"price\">$119</h6>\r\n          <p class=\"pernight\">per night</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"deals__content\">\r\n        <div class=\"deals__text\">\r\n          <h6 class=\"deals__title title\">\r\n            Hotel Website\r\n          </h6>\r\n          <p class=\"deals__sub-title sub-title\">Basic - Suit - Save More 48 Hour Sale</p>\r\n        </div>\r\n        <div class=\"deals__price\">\r\n          <h6 class=\"price\">$119</h6>\r\n          <p class=\"pernight\">per night</p>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-see\">See more</button>\r\n    </div> -->\r\n        <!-- End Deals -->\r\n\r\n        <hr class=\"line\">\r\n\r\n        <!-- Rating & Reviews -->\r\n        <div class=\"rating-review\">\r\n            <h6 class=\"rating-review__heading heading\">Rating & Reviews</h6>\r\n            <div class=\"rating\">\r\n                <div class=\"rating__point\">\r\n                    <p class=\"point text-white\">8.4</p>\r\n                </div>\r\n                <div class=\"rating__text\">\r\n                    <h6 class=\"rating__title title\">Impressive</h6>\r\n                    <p class=\"sub-title\">Rating based on 6969 reviews across the web</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"rating__bars\">\r\n                <!-- with using property binding -->\r\n                <div class=\"col-6 bar__content\">\r\n                    <p class=\"sub-title\">Comfort</p>\r\n                    <div class=\"bar-container\">\r\n                        <div class=\"bar bar-comfort\"></div>\r\n                    </div>\r\n                    <div class=\"bar__point\">8.9</div>\r\n                </div>\r\n                <div class=\"col-6 bar__content\">\r\n                    <p class=\"sub-title\">Service</p>\r\n                    <div class=\"bar-container\">\r\n                        <div class=\"bar bar-service\"></div>\r\n                    </div>\r\n                    <div class=\"bar__point\">8.9</div>\r\n                </div>\r\n                <div class=\"col-6 bar__content\">\r\n                    <p class=\"sub-title\">Cleanliness</p>\r\n                    <div class=\"bar-container\">\r\n                        <div class=\"bar bar-cleanliness\"></div>\r\n                    </div>\r\n                    <div class=\"bar__point\">8.9</div>\r\n                </div>\r\n                <div class=\"col-6 bar__content\">\r\n                    <p class=\"sub-title\">Food</p>\r\n                    <div class=\"bar-container\">\r\n                        <div class=\"bar bar-food\"></div>\r\n                    </div>\r\n                    <div class=\"bar__point\">8.9</div>\r\n                </div>\r\n                <div class=\"col-6 bar__content\">\r\n                    <p class=\"sub-title\">Location</p>\r\n                    <div class=\"bar-container\">\r\n                        <div class=\"bar bar-location\"></div>\r\n                    </div>\r\n                    <div class=\"bar__point\">8.9</div>\r\n                </div>\r\n            </div>\r\n            <!-- <button class=\"btn btn-see\">See more</button> -->\r\n        </div>\r\n        <!-- End Rating & Reviews -->\r\n\r\n        <hr class=\"line\">\r\n\r\n        <!-- Amenities -->\r\n        <div class=\"amenities\">\r\n            <h6 class=\"heading\">Main Amenities</h6>\r\n            <div class=\"amenites__content\">\r\n                <div class=\"amenities__item\">\r\n                    <i class=\"fa fa-wifi icon\"></i>\r\n                    <p class=\"icon-name\">Free Wifi</p>\r\n                </div>\r\n                <div class=\"amenities__item\">\r\n                    <i class=\"material-icons icon\">restaurant</i>\r\n                    <p class=\"icon-name\">Breakfast</p>\r\n                </div>\r\n                <div class=\"amenities__item\">\r\n                    <i class=\"material-icons icon\">local_hotel</i>\r\n                    <p class=\"icon-name\">Spa</p>\r\n                </div>\r\n                <div class=\"amenities__item\">\r\n                    <i class=\"material-icons icon\">pool</i>\r\n                    <p class=\"icon-name\">Swimming</p>\r\n                </div>\r\n            </div>\r\n            <!-- <button class=\"btn btn-see\">See all amenities</button> -->\r\n        </div>\r\n        <!-- End Amenities -->\r\n\r\n        <hr class=\"line\">\r\n\r\n        <!-- Hotel Description -->\r\n        <div class=\"description\">\r\n            <h6 class=\"heading\">Hotel Description</h6>\r\n            <p class=\"description-text\">\r\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit aut et sint accusantium blanditiis tempore repellendus incidunt doloremque quas?\r\n            </p>\r\n        </div>\r\n        <!-- End Hotel Description -->\r\n\r\n        <hr class=\"line mt-4\">\r\n\r\n        <!-- Contact -->\r\n        <div class=\"contact\">\r\n            <h6 class=\"heading\">Contact</h6>\r\n            <div id=\"map\">\r\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1214396311398!2d106.6391917153343!3d10.8020099616734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294fe7593643%3A0x75fc2555a7f3e79!2zRXRvd24sIEPhu5luZyBIw7JhLCBQaMaw4budbmcgMTMsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1559788558354!5m2!1sen!2s\"\r\n                    frameborder=\"0\" style=\"border:0\" width=\"100%\" height=\"100%\"></iframe>\r\n            </div>\r\n        </div>\r\n        <!-- End Contact -->\r\n    </div>\r\n\r\n    <!-- Footer -->\r\n    <div class=\"container-fluid footer\">\r\n        <div class=\"footer-content\">\r\n            <div class=\"footer-detail\">\r\n                <mat-card-subtitle class=\"footer-subtitle\">Price/room/night star from</mat-card-subtitle>\r\n                <p class=\"price\">$119</p>\r\n                <mat-card-subtitle>per night on Hotel website</mat-card-subtitle>\r\n            </div>\r\n            <div class=\"footer-btn mx-auto\">\r\n                <button mat-raised-button color=\"warn\" (click)=\"goToPage('FILLINDETAILS')\">Select room</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End Footer -->\r\n</div>"

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
/* harmony import */ var src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/system.constants */ "./src/app/utilities/system.constants.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HotelDetailComponent = /** @class */ (function (_super) {
    __extends(HotelDetailComponent, _super);
    function HotelDetailComponent(utility, router, _snackBar) {
        var _this = _super.call(this, utility, router, _snackBar) || this;
        _this.utility = utility;
        _this.router = router;
        _this._snackBar = _snackBar;
        utility.setDisplayBackButton(true);
        utility.setDisplayHeaderTitle(false);
        utility.setDisplayNavbar(false);
        utility.setTitle('Marriote NewYork City');
        return _this;
    }
    HotelDetailComponent.prototype.ngOnInit = function () {
    };
    HotelDetailComponent.prototype.goToPage = function (pageCode) {
        // alert(pageCode);
        try {
            var targetPage = src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_CODE"][pageCode];
            console.log(targetPage);
            if (targetPage) {
                this.pushPage(targetPage, {
                    params: {},
                    pageCode: src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_CODE"].HOTELDETAIL
                });
            }
        }
        catch (error) {
            // Nothing
        }
    };
    HotelDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotel-detail',
            template: __webpack_require__(/*! ./hotel-detail.component.html */ "./src/app/pages/hotel-detail/hotel-detail.component.html"),
            styles: [__webpack_require__(/*! ./hotel-detail.component.css */ "./src/app/pages/hotel-detail/hotel-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], HotelDetailComponent);
    return HotelDetailComponent;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    text-decoration: none;\r\n}\r\n\r\n.login-card{\r\n    padding-top:50px;\r\n    /* max-width: 80%; */\r\n}\r\n\r\n.login-title{\r\n    color: #545dff;\r\n}\r\n\r\n.mat-card-header-text{\r\n    margin: 0 auto !important;\r\n}\r\n\r\n.login-header {\r\n    text-align: center;\r\n    margin: 0 auto!important;\r\n}\r\n\r\n.btn-login{\r\n    width: 100%;\r\n    outline: none;\r\n    background-color: #545dff;\r\n}\r\n\r\n.login-field{\r\n    width: 100%;\r\n}\r\n\r\n/* Text Field  */\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    line-height: 2.125;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/* End Text Field */\r\n\r\n/* Forgot Password */\r\n\r\n.forgot-password{\r\n    float: right;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.forgotpw-text{\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* End Forgot Password */\r\n\r\n/* Signup */\r\n\r\n.sign-up-text{\r\n    text-align: center;\r\n    margin: 1rem 0\r\n}\r\n\r\n/* End Signup */\r\n\r\n/* Placeholder */\r\n\r\ninput[type=\"email\"]::-webkit-input-placeholder {\r\n    color: orange;\r\n}"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-card container-fluid\">\r\n    <div class=\"login-header\">\r\n        <mat-card-title class=\"login-title\">Welcome TravelInHands</mat-card-title>\r\n        <br>\r\n        <mat-card-subtitle>Sign in to continue</mat-card-subtitle>\r\n    </div>\r\n    <mat-card-content>\r\n        <form action=\"\">\r\n            <!-- Email -->\r\n            <mat-form-field class=\"login-field\">\r\n                <!-- [formControl]=\"emailFormControl\" -->\r\n                <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" #userID>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- End Email -->\r\n\r\n            <!-- Password -->\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" #password>\r\n                <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </button>\r\n            </mat-form-field>\r\n            <!-- End Password -->\r\n        </form>\r\n        <!-- <div class=\"forgot-password\">\r\n            <a href=\"#\" class=\"forgotpw-text\">Forgot Password?</a>\r\n        </div> -->\r\n    </mat-card-content>\r\n    <mat-card-actions class=\"mt-5\">\r\n        <button mat-raised-button color=\"primary\" class=\"btn-login\" (click)=\"btnLogin_click(userID.value, password.value)\">Login</button>\r\n    </mat-card-actions>\r\n\r\n    <!-- SignUp -->\r\n    <div class=\"sign-up-text\">\r\n        <mat-card-subtitle>New to ... Travel?&nbsp;&nbsp;<a class=\"signup-text text-primary\" (click)=\"goToPageSignUp('SIGNUP')\">Signup</a></mat-card-subtitle>\r\n    </div>\r\n    <!-- End SignUp -->\r\n    <ul>\r\n        <li *ngFor=\"let item of items | async\">\r\n            <pre>{{ item.email }}</pre>\r\n        </li>\r\n    </ul>\r\n</div>"

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
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utilities/system.constants */ "./src/app/utilities/system.constants.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(utility, router, _snackBar, user, afAuth, afDB) {
        var _this = _super.call(this, utility, router, _snackBar) || this;
        _this.utility = utility;
        _this.router = router;
        _this._snackBar = _snackBar;
        _this.user = user;
        _this.afAuth = afAuth;
        _this.afDB = afDB;
        // Set up hide password
        _this.hide = true;
        _this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        _this.utility.setDisplayNavbar(false);
        _this.utility.setDisplayHeader(false);
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // Declare public function
    LoginComponent.prototype.btnLogin_click = function (_userID, _password) {
        try {
            this.userId = _userID;
            this.password = _password;
            if (this.checkValidation()) {
                return;
            }
            else {
                this.login();
                // send to API
                // if result success
                // this.goToPage('HOME');
            }
        }
        catch (exception) {
            // do nothing
        }
    };
    LoginComponent.prototype.checkValidation = function () {
        // tslint:disable-next-line:prefer-const
        var validate;
        var isValidate = false;
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regEmail.test(this.userId) || !this.userId || this.userId.length < 0) {
            isValidate = true;
        }
        if (!isValidate && (!this.password || this.password.length < 0)) {
            isValidate = true;
        }
        if (isValidate) {
            this.openSnackBar('Username or password invalid', 'OK');
        }
        return isValidate;
    };
    LoginComponent.prototype.goToPage = function (pageCode) {
        try {
            var targetPage = src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_6__["PAGE_CODE"][pageCode];
            console.log(targetPage);
            if (targetPage) {
                this.pushPage(targetPage, {
                    params: {},
                    pageCode: src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_6__["PAGE_CODE"].HOME
                });
            }
        }
        catch (error) {
            // Nothing
        }
    };
    LoginComponent.prototype.goToPageSignUp = function (pageCode) {
        try {
            var targetPage = src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_6__["PAGE_CODE"][pageCode];
            console.log(targetPage);
            if (targetPage) {
                this.pushPage(targetPage, {
                    params: {},
                    pageCode: src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_6__["PAGE_CODE"].SIGNUP
                });
            }
        }
        catch (error) {
            // Nothing
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.userId.trim() != "" && this.password.trim() != "") {
            this.user.login();
            this.afAuth.auth.signInWithEmailAndPassword(this.userId, this.password).then(function (auth) {
                console.log('You are logged in', auth);
                _this.afDB.object("/users/" + auth.uid).valueChanges().subscribe(function (data) {
                    // this.loading.dismiss();
                    var userData = data;
                    console.log("JSON: ", JSON.stringify(userData));
                    localStorage.setItem("userObj", JSON.stringify(userData));
                    // this.navCtrl.setRoot(MenuPage);
                    _this.goToPage('HOME');
                });
            }).catch(function (error) {
                console.log(error.message);
                _this.openSnackBar(error.message, 'OK');
                // this.loading.dismiss();
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]])
    ], LoginComponent);
    return LoginComponent;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/room-list/room-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/room-list/room-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".find-hotel-content {\r\n    margin-bottom: 4rem;\r\n}"

/***/ }),

/***/ "./src/app/pages/room-list/room-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/room-list/room-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"find-hotel-content container-fluid mt-2\">\n    <div class=\"title\">\n        <span>All room ({{ roomList.length }})</span>\n    </div>\n    <div class=\"item\">\n        <div class=\"row\">\n            <ng-container *ngFor='let roomItem of roomList'>\n                <app-room-item [roomItem]=\"roomItem\"></app-room-item>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/room-list/room-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/room-list/room-list.component.ts ***!
  \********************************************************/
/*! exports provided: RoomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomListComponent", function() { return RoomListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomListComponent = /** @class */ (function () {
    function RoomListComponent(utility, afDB) {
        this.utility = utility;
        this.afDB = afDB;
        this.utility.setDisplayHeader(true);
        this.utility.setDisplayHomeHeader(false);
        this.utility.setDisplayNavbar(true);
        this.utility.setDisplayInnerHeader(true);
        this.utility.setDisplayProcessBar(false);
        this.utility.setDisplayStarRating(true);
        this.utility.setTitle('Marriote NewYork City');
        this.hotelID = this.utility.popStackData().params.hotelItemID;
    }
    RoomListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afDB.list("/hotels/" + this.hotelID + "/rooms").valueChanges().subscribe(function (result) {
            _this.roomList = result;
            console.log("List room", result);
        });
        // this.getParams();
    };
    // public isDisplayHeader(): boolean {
    //   return this.utility.isDisplayHeader();
    // }
    // public isDisplayHomeHeader(): boolean {
    //   return this.utility.isDisplayHomeHeader();
    // }
    // public isDisplayInnerHeader(): boolean {
    //   return this.utility.isDisplayInnerHeader();
    // }
    RoomListComponent.prototype.getParams = function () {
        console.log("params: " + typeof (this.utility.popStackData().params.hotelItemID));
        // this.hotelID = this.utility.popStackData().params.hotelItemID;
        // console.log("hotelID: " + this.hotelID);
        // return this.utility.popStackData().params.hotelItemID;
    };
    RoomListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-list',
            template: __webpack_require__(/*! ./room-list.component.html */ "./src/app/pages/room-list/room-list.component.html"),
            styles: [__webpack_require__(/*! ./room-list.component.css */ "./src/app/pages/room-list/room-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], RoomListComponent);
    return RoomListComponent;
}());



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    text-decoration: none;\r\n}\r\n\r\n.signup-card{\r\n    padding-top: 20px;\r\n}\r\n\r\n/* Icon back */\r\n\r\n.signup-header{\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 20px 0;\r\n    color: #545dff;\r\n}\r\n\r\n.signup-title{\r\n    margin: 0;\r\n}\r\n\r\n/* End Icon back */\r\n\r\n/* Form */\r\n\r\n.mat-card-header-text{\r\n    margin: 0 auto !important;\r\n}\r\n\r\n.signup-field{\r\n    width: 100%;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.firstname, .surname{\r\n    width: 48%;\r\n}\r\n\r\n.name-field{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* End Form */\r\n\r\n/* Button */\r\n\r\n.btn-signup{\r\n    width: 100%;\r\n    outline: none;\r\n    margin: 1rem 0;\r\n    background-color: #545dff;\r\n}\r\n\r\n/* End Button */\r\n\r\n/* login-text */\r\n\r\n.login-text{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-card container-fluid\">\r\n    <!-- <div class=\"signup-header\">\r\n    <i class=\"material-icons back-icon\">keyboard_backspace</i>\r\n    <h4 class=\"signup-title\">&nbsp;&nbsp;Sign Up</h4>\r\n  </div> -->\r\n    <mat-card-content>\r\n        <form action=\"\">\r\n            <!-- Name -->\r\n            <div class=\"name-field\">\r\n                <mat-form-field class=\"firstname\">\r\n                    <input matInput placeholder=\"Firstname\" #firstName>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"surname\">\r\n                    <input matInput placeholder=\"Surname\" #surName>\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- End Name -->\r\n\r\n            <!-- Email -->\r\n            <mat-form-field class=\"signup-field\">\r\n                <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" #email>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <!-- End Email -->\r\n\r\n            <!-- Phonenumber -->\r\n            <mat-form-field class=\"signup-field\">\r\n                <input matInput maxlength=\"10\" placeholder=\"Phonenumber\" #phoneNumber>\r\n            </mat-form-field>\r\n            <!-- End Phonenumber -->\r\n\r\n            <!-- Password -->\r\n            <mat-form-field class=\"signup-field\">\r\n                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" #password>\r\n                <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </button>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"signup-field\">\r\n                <input matInput placeholder=\"Renter your password\" [type]=\"hide ? 'password' : 'text'\" #confirmPassword>\r\n            </mat-form-field>\r\n            <!-- End Password -->\r\n        </form>\r\n\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-raised-button color=\"primary\" class=\"btn-signup\" (click)=\"btnSignUp_click(firstName.value, surName.value,  email.value, phoneNumber.value, password.value, confirmPassword.value)\">Sign up</button>\r\n    </mat-card-actions>\r\n\r\n    <!-- SignUp -->\r\n    <div class=\"login-text\">\r\n        <mat-card-subtitle>Alredy have an account?&nbsp;<a href=\"#\" class=\"signup-text\" routerLink=\"/LOGIN\">Login</a>\r\n        </mat-card-subtitle>\r\n    </div>\r\n    <!-- End SignUp -->\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Firebase


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(utility, afAuth, afDB, router) {
        this.utility = utility;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.router = router;
        // Set up hide password
        this.hide = true;
        this.newUserObj = {
            firstName: '',
            surName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
        };
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.utility.setDisplayHeader(true);
        this.utility.setDisplayHomeHeader(false);
        this.utility.setDisplayInnerHeader(true);
        this.utility.setDisplayProcessBar(false);
        this.utility.setDisplayNavbar(false);
        this.utility.setDisplayStarRating(false);
        this.utility.setTitle('Sign Up');
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.enableSignup = function () {
        return this.newUserObj.email.trim() != '' && (this.newUserObj.password.trim() != '' && this.newUserObj.confirmPassword.trim() != '') &&
            (this.newUserObj.password.trim() == this.newUserObj.confirmPassword.trim());
    };
    // firstName.value, surName.value,  email.value, phoneNumer.value, password.value, confirmPassword.value
    //   _password: string, _confirmPassword: string
    SignUpComponent.prototype.btnSignUp_click = function (_firstName, _surName, _email, _phoneNumber, _password, _confirmPassword) {
        var _this = this;
        console.log('page');
        var userObj = {
            userName: _firstName + ' ' + _surName,
            email: _email,
            phoneNumber: _phoneNumber,
            password: _password,
            confirmPassword: _confirmPassword,
            profilePicURL: ''
        };
        // console.log('userObj:', _firstName + _surName + _email + _phoneNumber + _password + _confirmPassword);
        this.afAuth.auth.createUserWithEmailAndPassword(userObj.email, userObj.password).then(function (user) {
            var username = userObj.email.split("@")[0];
            console.log('userObj', user, username);
            user.updateProfile({
                displayName: username,
                photoURL: ''
            });
            // user.displayName = username;
            _this.afDB.object('/users/' + user.uid).set(userObj);
            alert("User has been created successfully");
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
        this.newUserObj = {
            firstName: '',
            surName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
        };
        // this.router.navigate(['/LOGIN']);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/pages/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/pages/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (arr, filters) {
        if (!arr) {
            return [];
        }
        if (!filters) {
            return arr;
        }
        console.log(filters);
        var filterKeys = Object.keys(filters);
        return arr.filter(function (eachObj) {
            return filterKeys.every(function (eachKey) {
                if (!filters[eachKey].length) {
                    return true; // passing an empty filter means that filter is ignored.
                }
                return filters[eachKey].includes(eachObj[eachKey]);
            });
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'FilterPipe'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/firebase/firebase.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/firebase/firebase.service.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = /** @class */ (function () {
    function FirebaseService(afDB, firestore) {
        this.afDB = afDB;
        this.firestore = firestore;
        this.basePath = '/shares';
        this.hotelsPath = '/hotels';
    }
    // get hotels
    FirebaseService.prototype.get = function (path) {
        var _this = this;
        var observable = this.afDB.list(path).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { }, /**Success */ Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this.handleError(err);
        })));
        return observable;
    };
    FirebaseService.prototype.handleError = function (err) {
        //Handle Error
        return err;
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/hotel-management.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/hotel-management.service.ts ***!
  \******************************************************/
/*! exports provided: HotelManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelManagementService", function() { return HotelManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelManagementService = /** @class */ (function () {
    function HotelManagementService() {
        // Save Data In Search Form
        this.storeSearchForm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ distination: 'NewYork', checkInDate: '', checkOutDate: '', duration: '', noOfGuest: '' });
        this.dataSearchForm = this.storeSearchForm.asObservable();
    }
    HotelManagementService.prototype.setSearchFormData = function (searchFormData) {
        this.storeSearchForm.next(searchFormData);
    };
    HotelManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HotelManagementService);
    return HotelManagementService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';




var UserService = /** @class */ (function () {
    function UserService(afAuth, afDB) {
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.userRole = {};
        this.isAuthenticated = false;
        this.userObj = {};
        this.tempUserObj = {};
        this.currentUser = '';
        console.log('Hello UserProvider Provider');
        // this.getCurrentUser();
    }
    UserService.prototype.login = function () {
        this.isAuthenticated = true;
    };
    UserService.prototype.logout = function () {
        this.isAuthenticated = false;
    };
    UserService.prototype.isAlreadyAuthenticated = function () {
        return this.isAuthenticated ? true : false;
    };
    UserService.prototype.isUserAuthenticated = function () {
        if (localStorage.getItem("userObj")) {
            this.isAuthenticated = true;
            return true;
        }
        else {
            this.isAuthenticated = false;
            return false;
        }
    };
    UserService.prototype.getCurrentUser = function () {
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
        if (user) {
            console.log('Current User', user.uid);
            return user.uid;
        }
        else {
            console.log("Not logged in");
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/utility.service.js":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.js ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/system.constants */ "./src/app/utilities/system.constants.ts");
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
        this._isDisplayHeader = true;
        this._isDisplayFooter = true;
        this._isDisplayNavbar = true;
        this._isDisplayBackButton = false;
        this._isDisplayHeaderTitle = true;
        this._isDisplayHomeHeader = false;
        this._isDisplayInnerHeader = true;
        this._isDisplayProcessBar = true;
        this._checkOutStatus = false;
        this._payStatus = false;
        this._displayStarRating = true;
        // Back Page
        this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
        this.stackMapping = new Map().set(0, { 'params': {}, 'pageCode': _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT, 'data': {} });
    }
    UtilityService.prototype.getDataOfPrevPage = function () {
        return this.dataOfPrevPage;
    };
    UtilityService.prototype.setDataOfPrevPage = function (data) {
        this.dataOfPrevPage = data;
    };
    // Set Display Header
    UtilityService.prototype.setDisplayHeader = function (isShow) {
        this._isDisplayHeader = isShow;
    };
    UtilityService.prototype.isDisplayHeader = function () {
        return this._isDisplayHeader;
    };
    UtilityService.prototype.setDisplayHomeHeader = function (isShow) {
        this._isDisplayHomeHeader = isShow;
    };
    UtilityService.prototype.isDisplayHomeHeader = function () {
        return this._isDisplayHomeHeader;
    };
    UtilityService.prototype.setDisplayInnerHeader = function (isShow) {
        this._isDisplayInnerHeader = isShow;
    };
    UtilityService.prototype.isDisplayInnerHeader = function () {
        return this._isDisplayInnerHeader;
    };
    // Set Display Footer
    UtilityService.prototype.setDisplayFooter = function (isShow) {
        this._isDisplayFooter = isShow;
    };
    UtilityService.prototype.isDisplayFooter = function () {
        return this._isDisplayFooter;
    };
    // Set Display Navbar(~ Navigation)
    UtilityService.prototype.setDisplayNavbar = function (isShow) {
        this._isDisplayNavbar = isShow;
    };
    UtilityService.prototype.isDisplayNavbar = function () {
        return this._isDisplayNavbar;
    };
    UtilityService.prototype.isDisplayBackButton = function () {
        return this._isDisplayBackButton;
    };
    UtilityService.prototype.setDisplayBackButton = function (isShow) {
        this._isDisplayBackButton = isShow;
    };
    UtilityService.prototype.isDisplayHeaderTitle = function () {
        return this._isDisplayHeaderTitle;
    };
    UtilityService.prototype.setDisplayHeaderTitle = function (isShow) {
        this._isDisplayHeaderTitle = isShow;
    };
    // Set Title
    UtilityService.prototype.getTitle = function () {
        return this._title;
    };
    UtilityService.prototype.setTitle = function (title) {
        this._title = title;
    };
    // Set Display Processbar
    UtilityService.prototype.isDisplayProcessBar = function () {
        return this._isDisplayProcessBar;
    };
    UtilityService.prototype.setDisplayProcessBar = function (isShow) {
        this._isDisplayProcessBar = isShow;
    };
    // Set Display Star Rating
    UtilityService.prototype.isDisplayStarRating = function () {
        return this._displayStarRating;
    };
    UtilityService.prototype.setDisplayStarRating = function (isShow) {
        this._displayStarRating = isShow;
    };
    // Set status of ProcessBar
    UtilityService.prototype.setCheckOutStatus = function (isApply) {
        this._checkOutStatus = isApply;
    };
    UtilityService.prototype.applyCheckOutStatus = function () {
        return this._checkOutStatus;
    };
    UtilityService.prototype.setPayStatus = function (isApply) {
        this._payStatus = isApply;
    };
    UtilityService.prototype.applyPayStatus = function () {
        return this._payStatus;
    };
    UtilityService.prototype.popStackData = function () {
        var rs = this.stackMapping.get(this.stackPage.length - 1);
        this.stackMapping.delete(this.stackPage.length - 1);
        return rs;
    };
    UtilityService.prototype.popToRoot = function () {
        this.stackMapping = new Map().set(0, { 'params': {}, 'pageCode': _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT, 'data': {} });
        this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
        return _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT;
    };
    UtilityService.prototype.popStackPage = function () {
        if (!this.stackPage) {
            this.stackMapping.clear();
            this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
            return _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT;
        }
        if (this.stackPage.length > 1) {
            this.stackData = this.popStackData();
            if (!this.stackData) {
                this.stackData = {
                    'params': {},
                    'pageCode': null,
                    'data': {}
                };
            }
            this.stackPage.pop();
            // save data
            var dataPrev = {
                'data': this.stackData.data,
                'pageCode': this.stackData.pageCode,
                'params': {}
            };
            this.setDataOfPrevPage(dataPrev);
            return this.stackPage[this.stackPage.length - 1];
        }
        return null;
    };
    UtilityService.prototype.popToPageByPageCode = function (pageCode) {
        if (this.stackPage) {
            if (this.stackPage.includes(pageCode)) {
                for (var idx = this.stackPage.length - 1; idx > 0; idx--) {
                    if (this.stackPage[idx] && this.stackPage[idx] === pageCode) {
                        return pageCode;
                    }
                    else {
                        this.popStackPage();
                    }
                }
            }
            else {
                this.popStackPage();
                this.pushStackPage(pageCode, this.stackData);
                return pageCode;
            }
        }
        return null;
    };
    UtilityService.prototype.pushStackPage = function (pageCode, stackStatus, isSaveData) {
        if (stackStatus === void 0) { stackStatus = null; }
        if (isSaveData === void 0) { isSaveData = true; }
        if (!this.stackPage) {
            this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
            this.stackMapping = new Map().set(0, { 'params': {}, 'pageCode': _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT, 'data': {} });
        }
        // check last page code is sampe page, is't
        var currentPage = this.stackPage[this.stackPage.length - 1];
        if (currentPage === pageCode) {
            return;
        }
        this.stackPage.push(pageCode);
        var stackDt = stackStatus;
        if (!stackDt) {
            stackDt = {
                'params': {},
                'pageCode': currentPage,
                'data': {}
            };
        }
        this.stackMapping.set(this.stackPage.length - 1, stackDt);
        this.stackData = stackDt;
        // save data
        if (isSaveData) {
            var dataPrev = {
                'data': stackDt.params,
                'pageCode': pageCode,
                'params': {}
            };
            this.setDataOfPrevPage(dataPrev);
        }
    };
    UtilityService.prototype.getLastPageOfStack = function () {
        if (this.stackPage && this.stackPage.length > 1) {
            return this.stackPage[this.stackPage.length - 1];
        }
        return null;
    };
    UtilityService.prototype.getPreviousLastPageOfStack = function () {
        if (this.stackPage && this.stackPage.length > 1) {
            return this.stackPage[this.stackPage.length - 2];
        }
        return null;
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());

//# sourceMappingURL=utility.service.js.map

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
/* harmony import */ var _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/system.constants */ "./src/app/utilities/system.constants.ts");
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
        this._isDisplayHeader = true;
        this._isDisplayFooter = true;
        this._isDisplayNavbar = true;
        this._isDisplayBackButton = false;
        this._isDisplayHeaderTitle = true;
        this._isDisplayHomeHeader = false;
        this._isDisplayInnerHeader = true;
        this._isDisplayProcessBar = true;
        this._checkOutStatus = false;
        this._payStatus = false;
        this._displayStarRating = true;
        // Back Page
        this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
        this.stackMapping = new Map().set(0, { 'params': {}, 'pageCode': _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT, 'data': {} });
    }
    UtilityService.prototype.getDataOfPrevPage = function () {
        return this.dataOfPrevPage;
    };
    UtilityService.prototype.setDataOfPrevPage = function (data) {
        this.dataOfPrevPage = data;
    };
    // Set Display Header
    UtilityService.prototype.setDisplayHeader = function (isShow) {
        this._isDisplayHeader = isShow;
    };
    UtilityService.prototype.isDisplayHeader = function () {
        return this._isDisplayHeader;
    };
    UtilityService.prototype.setDisplayHomeHeader = function (isShow) {
        this._isDisplayHomeHeader = isShow;
    };
    UtilityService.prototype.isDisplayHomeHeader = function () {
        return this._isDisplayHomeHeader;
    };
    UtilityService.prototype.setDisplayInnerHeader = function (isShow) {
        this._isDisplayInnerHeader = isShow;
    };
    UtilityService.prototype.isDisplayInnerHeader = function () {
        return this._isDisplayInnerHeader;
    };
    // Set Display Footer
    UtilityService.prototype.setDisplayFooter = function (isShow) {
        this._isDisplayFooter = isShow;
    };
    UtilityService.prototype.isDisplayFooter = function () {
        return this._isDisplayFooter;
    };
    // Set Display Navbar(~ Navigation)
    UtilityService.prototype.setDisplayNavbar = function (isShow) {
        this._isDisplayNavbar = isShow;
    };
    UtilityService.prototype.isDisplayNavbar = function () {
        return this._isDisplayNavbar;
    };
    UtilityService.prototype.isDisplayBackButton = function () {
        return this._isDisplayBackButton;
    };
    UtilityService.prototype.setDisplayBackButton = function (isShow) {
        this._isDisplayBackButton = isShow;
    };
    UtilityService.prototype.isDisplayHeaderTitle = function () {
        return this._isDisplayHeaderTitle;
    };
    UtilityService.prototype.setDisplayHeaderTitle = function (isShow) {
        this._isDisplayHeaderTitle = isShow;
    };
    // Set Title
    UtilityService.prototype.getTitle = function () {
        return this._title;
    };
    UtilityService.prototype.setTitle = function (title) {
        this._title = title;
    };
    // Set Display Processbar
    UtilityService.prototype.isDisplayProcessBar = function () {
        return this._isDisplayProcessBar;
    };
    UtilityService.prototype.setDisplayProcessBar = function (isShow) {
        this._isDisplayProcessBar = isShow;
    };
    // Set Display Star Rating
    UtilityService.prototype.isDisplayStarRating = function () {
        return this._displayStarRating;
    };
    UtilityService.prototype.setDisplayStarRating = function (isShow) {
        this._displayStarRating = isShow;
    };
    // Set status of ProcessBar
    UtilityService.prototype.setCheckOutStatus = function (isApply) {
        this._checkOutStatus = isApply;
    };
    UtilityService.prototype.applyCheckOutStatus = function () {
        return this._checkOutStatus;
    };
    UtilityService.prototype.setPayStatus = function (isApply) {
        this._payStatus = isApply;
    };
    UtilityService.prototype.applyPayStatus = function () {
        return this._payStatus;
    };
    UtilityService.prototype.popStackData = function () {
        var rs = this.stackMapping.get(this.stackPage.length - 1);
        this.stackMapping.delete(this.stackPage.length - 1);
        return rs;
    };
    UtilityService.prototype.popToRoot = function () {
        this.stackMapping = new Map().set(0, { 'params': {}, 'pageCode': _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT, 'data': {} });
        this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
        return _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT;
    };
    UtilityService.prototype.popStackPage = function () {
        if (!this.stackPage) {
            this.stackMapping.clear();
            this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
            return _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT;
        }
        if (this.stackPage.length > 1) {
            this.stackData = this.popStackData();
            if (!this.stackData) {
                this.stackData = {
                    'params': {},
                    'pageCode': null,
                    'data': {}
                };
            }
            this.stackPage.pop();
            // save data
            var dataPrev = {
                'data': this.stackData.data,
                'pageCode': this.stackData.pageCode,
                'params': {}
            };
            this.setDataOfPrevPage(dataPrev);
            return this.stackPage[this.stackPage.length - 1];
        }
        return null;
    };
    UtilityService.prototype.popToPageByPageCode = function (pageCode) {
        if (this.stackPage) {
            if (this.stackPage.includes(pageCode)) {
                for (var idx = this.stackPage.length - 1; idx > 0; idx--) {
                    if (this.stackPage[idx] && this.stackPage[idx] === pageCode) {
                        return pageCode;
                    }
                    else {
                        this.popStackPage();
                    }
                }
            }
            else {
                this.popStackPage();
                this.pushStackPage(pageCode, this.stackData);
                return pageCode;
            }
        }
        return null;
    };
    UtilityService.prototype.pushStackPage = function (pageCode, stackStatus, isSaveData) {
        if (stackStatus === void 0) { stackStatus = null; }
        if (isSaveData === void 0) { isSaveData = true; }
        if (!this.stackPage) {
            this.stackPage = [_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT];
            this.stackMapping = new Map().set(0, { 'params': {}, 'pageCode': _utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].DEFAULT, 'data': {} });
        }
        // check last page code is sampe page, is't
        var currentPage = this.stackPage[this.stackPage.length - 1];
        if (currentPage === pageCode) {
            return;
        }
        this.stackPage.push(pageCode);
        var stackDt = stackStatus;
        if (!stackDt) {
            stackDt = {
                'params': {},
                'pageCode': currentPage,
                'data': {}
            };
        }
        this.stackMapping.set(this.stackPage.length - 1, stackDt);
        this.stackData = stackDt;
        // save data
        if (isSaveData) {
            var dataPrev = {
                'data': stackDt.params,
                'pageCode': pageCode,
                'params': {}
            };
            this.setDataOfPrevPage(dataPrev);
        }
    };
    UtilityService.prototype.getLastPageOfStack = function () {
        if (this.stackPage && this.stackPage.length > 1) {
            return this.stackPage[this.stackPage.length - 1];
        }
        return null;
    };
    UtilityService.prototype.getPreviousLastPageOfStack = function () {
        if (this.stackPage && this.stackPage.length > 1) {
            return this.stackPage[this.stackPage.length - 2];
        }
        return null;
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

module.exports = "img{\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\n\r\n.explore__card{\r\n    border: unset;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.explore__card .explore__image{\r\n    width: 210px;\r\n    height: 90px;\r\n    border-radius: calc(0.75rem - 0.5px);\r\n    position: relative;\r\n}\r\n\r\n.item__text{\r\n    position: absolute;\r\n    left: 1rem;\r\n    bottom: 0rem;\r\n    z-index: 2;\r\n}\r\n\r\n#overlay_explore {\r\n    position: absolute;    \r\n    /* width: 100%; */\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.1);\r\n    border-radius: calc(0.75rem - 0.5px);\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/templates/explore-item/explore-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/templates/explore-item/explore-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card explore__card\">\r\n  <img class=\"explore__image\"\r\n    src=\"./assets/images/HaLong.jpg\"\r\n    alt=\"Card image\">\r\n    <div id=\"overlay_explore\"></div>\r\n  <p class=\"item__text text-white\">Ha Long Bay</p>\r\n</div>"

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

/***/ "./src/app/templates/finded-hotel-item/finded-hotel-item.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/templates/finded-hotel-item/finded-hotel-item.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".find-hotel-card {\r\n    margin: 1rem;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.item-heading {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.item-footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.item-content {\r\n    display: flex;\r\n    color: rgba(0, 0, 0, .54);\r\n}\r\n\r\n.text-color {\r\n    color: orange;\r\n}\r\n\r\n.find-hotel-card .mat-card-image {\r\n    height: 170px;\r\n}\r\n\r\n.location__icon {\r\n    font-size: 20px;\r\n}\r\n\r\n.image-card-hotel>img {\r\n    width: 230px;\r\n    height: 150px;\r\n}\r\n\r\n/* star */\r\n\r\n.star {\r\n    position: relative;\r\n    display: inline-block;\r\n    font-size: 1.5rem;\r\n    color: #d3d3d3;\r\n}\r\n\r\n.full {\r\n    color: orange;\r\n}\r\n\r\n.half {\r\n    position: absolute;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    color: orange;\r\n}"

/***/ }),

/***/ "./src/app/templates/finded-hotel-item/finded-hotel-item.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/templates/finded-hotel-item/finded-hotel-item.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"find-hotel-card\">\r\n    <!-- <img mat-card-image src=\"./assets/images/room33.jpg\" alt=\"hotel\"> -->\r\n\r\n    <img mat-card-image src=\"{{hotelItem?.hotelImagePath}}\" alt=\"Hotel Image\">\r\n\r\n\r\n    <mat-card-content>\r\n        <h5 class=\"item-heading\">\r\n            {{hotelItem.hotelName}}\r\n        </h5>\r\n        <div class=\"row d-flex \">\r\n            <div class=\"d-flex\">\r\n                <div class=\"item__rating mx-3\">\r\n                    <!-- <span class=\"fa fa-star checked mr-1\"></span>\r\n                    <span class=\"fa fa-star checked mr-1\"></span>\r\n                    <span class=\"fa fa-star checked mr-1\"></span>\r\n                    <span class=\"fa fa-star unchecked mr-1\"></span>\r\n                    <span class=\"fa fa-star unchecked mr-1\"></span> -->\r\n                    <ng-template #temp let-fill=\"fill\">\r\n                        <span class=\"star\" [class.full]=\"fill === 100\">\r\n                          <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n                        </span>\r\n                    </ng-template>\r\n\r\n                    <ngb-rating [(rate)]=\"hotelItem.starRating\" [starTemplate]=\"temp\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex align-items-center\">\r\n                <i class=\"material-icons location__icon\">location_on</i>\r\n                <p class=\"m-0\">{{hotelItem.hotelCity}}</p>\r\n            </div>\r\n        </div>\r\n    </mat-card-content>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <p class=\"price text-color\">$119</p>\r\n        </div>\r\n        <div class=\"col text-right\">\r\n            <!-- (click)=\"goToPage('FINDHOTEL')\" -->\r\n            <button class=\"btn-color\" mat-raised-button color=\"primary\" (click)=\"chooseHotel()\">View rooms</button>\r\n        </div>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/templates/finded-hotel-item/finded-hotel-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/templates/finded-hotel-item/finded-hotel-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: FindedHotelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindedHotelItemComponent", function() { return FindedHotelItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/system.constants */ "./src/app/utilities/system.constants.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FindedHotelItemComponent = /** @class */ (function (_super) {
    __extends(FindedHotelItemComponent, _super);
    function FindedHotelItemComponent(utility, router, _snackBar, config) {
        var _this = _super.call(this, utility, router, _snackBar) || this;
        _this.utility = utility;
        _this.router = router;
        _this._snackBar = _snackBar;
        _this.eventChooseHotel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.utility.setDisplayHeaderTitle(false);
        config.max = 5;
        config.readonly = true;
        return _this;
    }
    FindedHotelItemComponent.prototype.ngOnInit = function () {
    };
    FindedHotelItemComponent.prototype.goToPage = function (pageCode) {
        try {
            var targetPage = src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"][pageCode];
            console.log("targetPage", targetPage);
            if (targetPage) {
                this.pushPage(targetPage, {
                    params: {
                        hotelItemID: this.hotelItem.hotelID
                    },
                    pageCode: src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].FINDEDHOTELLIST
                });
            }
        }
        catch (error) {
        }
    };
    FindedHotelItemComponent.prototype.chooseHotel = function () {
        console.log(this.hotelItem);
        this.eventChooseHotel.emit(this.hotelItem);
        this.goToPage('ROOMLIST');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FindedHotelItemComponent.prototype, "hotelItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FindedHotelItemComponent.prototype, "eventChooseHotel", void 0);
    FindedHotelItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finded-hotel-item',
            template: __webpack_require__(/*! ./finded-hotel-item.component.html */ "./src/app/templates/finded-hotel-item/finded-hotel-item.component.html"),
            styles: [__webpack_require__(/*! ./finded-hotel-item.component.css */ "./src/app/templates/finded-hotel-item/finded-hotel-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbRatingConfig"]])
    ], FindedHotelItemComponent);
    return FindedHotelItemComponent;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]));



/***/ }),

/***/ "./src/app/templates/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    /* padding: 1.5rem 0; */\r\n    overflow: hidden;\r\n    z-index: 99;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n.footer-content{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.footer-detail{\r\n    width: 70%;\r\n}\r\n\r\n.footer-detail p{\r\n    margin-bottom: 0;\r\n}\r\n\r\n.footer-btn{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.price{\r\n    color: orange;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.mat-card-content, .mat-card-subtitle {\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer\">\r\n  <div class=\"footer-content\">\r\n    <div class=\"footer-detail\">\r\n      <mat-card-subtitle>Price/room/night star from</mat-card-subtitle>\r\n      <p class=\"price\">$119</p>\r\n      <mat-card-subtitle>per night on Hotel website</mat-card-subtitle>\r\n    </div>\r\n    <div class=\"footer-btn mx-auto\">\r\n        <button mat-raised-button color=\"warn\">Select room</button>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "img {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\n\r\n.home-header {\r\n    position: relative;\r\n}\r\n\r\n#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(86, 58, 109, 0.418);\r\n    cursor: pointer;\r\n}\r\n\r\n.header-icon,\r\n.header-text {\r\n    position: absolute;\r\n    top: 5%;\r\n    z-index: 5;\r\n}\r\n\r\n.header-icon {\r\n    right: 5%;\r\n}\r\n\r\n.header-icon .fa-bars {\r\n    font-size: 2rem;\r\n}\r\n\r\n.header-text {\r\n    left: 5%;\r\n}\r\n\r\n/* Inner Header */\r\n\r\n.inner-header {\r\n    background-color: #545dff;\r\n    height: 150px;\r\n    padding: 1.5rem 1rem 1rem 1rem;\r\n}\r\n\r\n.header-title {\r\n    display: flex;\r\n}\r\n\r\ni.header-back-icon {\r\n    font-size: 30px;\r\n}\r\n\r\n/* Processbar */\r\n\r\n.header-processbar {\r\n    margin-right: 1rem;\r\n    color: #b4b4fb!important;\r\n}\r\n\r\n.active-fill-in-details {\r\n    color: white!important;\r\n}\r\n\r\n.active-fill-in-details .circle {\r\n    background-color: white!important;\r\n}\r\n\r\nul.processbar {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    padding: unset;\r\n    font-size: 12px;\r\n}\r\n\r\nul.processbar>li {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-left: .5rem;\r\n}\r\n\r\n.processbar-text {\r\n    text-align: -webkit-center!important;\r\n}\r\n\r\n.processbar-text:nth-of-type(1) {\r\n    padding-right: 1rem!important;\r\n}\r\n\r\nul.processbar li p.circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    border: 1px solid #b4b4fb;\r\n    border-radius: 50%;\r\n    margin-right: .75rem;\r\n    background: #b4b4fb;\r\n    color: #545dff;\r\n    margin: 0 0 .5rem 0;\r\n    /* padding: 2rem; */\r\n}\r\n\r\nul.processbar p.line {\r\n    width: 35px;\r\n    height: 2px;\r\n    background-color: #b4b4fb;\r\n    margin-top: 1rem;\r\n}\r\n\r\n/* End Processbar */"

/***/ }),

/***/ "./src/app/templates/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDisplayHeader\">\r\n    <div *ngIf=\"isDisplayHomeHeader\">\r\n        <div class=\"home-header\">\r\n            <div id=\"overlay\"></div>\r\n            <img src=\"./assets/images/tivkumb_0.jpg\" alt=\"\" class=\"\">\r\n        </div>\r\n        <div class=\"header-text text-white\" *ngIf=\"isDisplayHeaderTitle\">\r\n            <h5>TravelInHands</h5>\r\n        </div>\r\n        <div class=\"header-title text-white header-text\" *ngIf=\"isDisplayBackButton\">\r\n            <div >\r\n                <span class=\"text-white\" (click)=\"btnBack_click()\" ><i class=\"material-icons header-back-icon\">keyboard_backspace</i></span>\r\n            </div>\r\n            <div>\r\n                <h4>&nbsp;&nbsp;{{title}}</h4>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"header-icon\">\r\n            <i class=\"fa fa-bars text-white\"></i>\r\n        </div> -->\r\n    </div>\r\n\r\n\r\n    <div class=\"inner-header\" *ngIf=\"isDisplayInnerHeader\">\r\n        <div class=\"header-title text-white\">\r\n            <div>\r\n                <span class=\"text-white\" (click)=\"btnBack_click()\" ><i class=\"material-icons header-back-icon\">keyboard_backspace</i></span>\r\n            </div>\r\n            <div>\r\n                <h4>&nbsp;&nbsp;{{title}}</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"header-star\" *ngIf=\"isDisplayStarRating\">\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star unchecked\"></span>\r\n            <span class=\"fa fa-star unchecked\"></span>\r\n        </div>\r\n        <div class=\"header-processbar\" *ngIf=\"isDisplayProcessBar\">\r\n            <ul class=\"processbar\">\r\n                <li class=\"active-fill-in-details\">\r\n                    <div class=\"processbar-text text-center\">\r\n                        <p class=\"circle\">01</p>\r\n                        <p class=\"label\">Book</p>\r\n                    </div>\r\n                </li>\r\n                <p class=\"line\"></p>\r\n                <li [ngClass]=\"{'active-fill-in-details': applyCheckOutStatus}\">\r\n                    <div class=\"processbar-text\">\r\n                        <p class=\"circle\">02</p>\r\n                        <p class=\"label\">Check out</p>\r\n                    </div>\r\n                </li>\r\n                <p class=\"line\"></p>\r\n                <li [ngClass]=\"{'active-fill-in-details': applyPayStatus}\">\r\n                    <div class=\"processbar-text\">\r\n                        <p class=\"circle\">03</p>\r\n                        <p class=\"label\">Pay</p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
    function HeaderComponent(utility, router, location) {
        this.utility = utility;
        this.router = router;
        this.location = location;
        this.BACK_PAGE_TYPE = {
            CONFIRM_POPUP: 1,
            DEFINED: 2,
            STACK: 3
        };
        /**Setting Default Value **/
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.btnBack_click = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayHeaderTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayBackButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayHomeHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayInnerHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayProcessBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isDisplayStarRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "processBarStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "applyCheckOutStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "applyPayStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/templates/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/templates/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
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

module.exports = ".card{\r\n    border: unset;\r\n}\r\n\r\n.card-body{\r\n    padding: 1.25rem 0;\r\n}\r\n\r\n.card-title{\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.card-img-top{\r\n    height: 115px;\r\n}\r\n\r\n.item_image{\r\n    border-radius: calc(0.75rem - 0.5px);\r\n}\r\n\r\n/* checked star */\r\n\r\n.checked{\r\n    color: orange;\r\n}\r\n\r\n.unchecked{\r\n\r\n}\r\n\r\n.item__info{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n    margin-bottom: 0.5rem; \r\n}\r\n\r\n.item__info .price{\r\n    color: orange;  \r\n    font-size: 15px;\r\n    margin: unset;\r\n}\r\n\r\n.item__info .fa-star{\r\n    font-size: 12px;\r\n}"

/***/ }),

/***/ "./src/app/templates/hotel-item/hotel-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/templates/hotel-item/hotel-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img class=\"card-img-top item_image\" [src]=\"hotel.image\" alt=\"Card image\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{hotel.name}}</h5>\r\n    <div class=\"item__info\">\r\n      <div class=\"price__item\">\r\n        <p class=\"price\">{{hotel.price}}</p>\r\n      </div>\r\n      <div class=\"item__rating\">\r\n        <span class=\"fa fa-star checked\"></span>\r\n        <span class=\"fa fa-star checked\"></span>\r\n        <span class=\"fa fa-star checked\"></span>\r\n        <span class=\"fa fa-star unchecked\"></span>\r\n        <span class=\"fa fa-star unchecked\"></span>\r\n      </div>\r\n    </div>\r\n    <p class=\"card-text\">Some example text.{{hotel.descrition}}</p>\r\n  </div>\r\n</div>"

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

module.exports = ".navbar {\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    padding: unset;\r\n    overflow: hidden;\r\n    z-index: 99;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n.navbar a {\r\n    float: left;\r\n    padding: 12px;\r\n    color: rgb(83, 83, 83);\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    text-align: center;\r\n}\r\n\r\n.navbar__icon{\r\n    font-size: 20px;\r\n}\r\n\r\n.navbar a:hover {\r\n    \r\n}\r\n\r\n.active {\r\n\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n.navbar a {\r\n    float: none;\r\n    display: block;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/templates/navbar-bottom/navbar-bottom.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/templates/navbar-bottom/navbar-bottom.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" *ngIf=\"isDisplayNavbar\">\r\n    <a href=\"\" onclick=\"return false;\" class=\"active\" href=\"#\"><i class=\"fa fa-fw fa-search navbar__icon\"></i><br>Search</a>\r\n    <a href=\"\" onclick=\"return false;\"><i class=\"fa fa-list navbar__icon\"></i><br>My Booking</a>\r\n    <!-- <a><i class=\"fa fa-fw fa-bookmark navbar__icon\"></i><br>Bookmark</a>  -->\r\n    <a><i class=\"fa fa-fw fa-user navbar__icon\"></i><br>Account</a>\r\n</div>"

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

/***/ "./src/app/templates/room-item/room-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/templates/room-item/room-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".find-hotel-card {\r\n    margin: 1rem;\r\n}\r\n\r\n.item-heading {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.item-footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.item-content {\r\n    display: flex;\r\n    color: rgba(0, 0, 0, .54);\r\n}\r\n\r\n.text-color {\r\n    color: orange;\r\n}\r\n\r\n.find-hotel-card .mat-card-image {\r\n    height: 175px;\r\n}\r\n\r\n/* Carousel */\r\n\r\n.carousel-inner {\r\n    overflow: hidden;\r\n}\r\n\r\n.carousel-inner .carousel-item img {\r\n    width: 100%;\r\n    display: inline-block;\r\n    height: 175px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.carousel-indicators li {\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* End carousel */"

/***/ }),

/***/ "./src/app/templates/room-item/room-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/templates/room-item/room-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"find-hotel-card\">\n    <!-- <img mat-card-image src=\"./assets/images/room33.jpg\" alt=\"hotel\"> -->\n\n    <div [id]=\"roomItem.roomID\" class=\"carousel slide\" data-ride=\"carousel\" mat-card-image>\n        <!-- Indicators -->\n        <ul class=\"carousel-indicators\">\n            <li [attr.data-target]=\"'#' + roomItem.roomID\" data-slide-to=\"0\" class=\"active\"></li>\n            <li [attr.data-target]=\"'#' + roomItem.roomID\" data-slide-to=\"1\"></li>\n            <li [attr.data-target]=\"'#' + roomItem.roomID\" data-slide-to=\"2\"></li>\n        </ul>\n\n        <!-- The slideshow -->\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n                <img src=\"./assets/images/room33.jpg\" alt=\"hotel\">\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"./assets/images/room.jpg\" alt=\"hotel\">\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"./assets/images/room33.jpg\" alt=\"hotel\">\n            </div>\n        </div>\n\n        <!-- Left and right controls -->\n        <a class=\"carousel-control-prev\" [attr.href]=\"'#' + roomItem.roomID\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" [attr.href]=\"'#' + roomItem.roomID\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n        </a>\n    </div>\n\n    <mat-card-content>\n        <h6 class=\"item-heading\">\n            {{roomItem.roomType}}\n        </h6>\n        <ng-container *ngFor=\"let item of roomItem.roomTypeDescription\">\n            <mat-card-subtitle>{{item}}</mat-card-subtitle>\n        </ng-container>\n        <hr>\n        <div class=\"item-content\">\n            <i class=\"material-icons\">restaurant</i>\n            <p>&nbsp;&nbsp;Breakfast not included</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col item-content text-color\">\n                <i class=\"material-icons\">wifi</i>\n                <p>&nbsp;&nbsp;Free wifi</p>\n            </div>\n            <div class=\"col text-right\">\n                <p class=\"text-danger\">&nbsp;&nbsp;2 room(s) left !</p>\n            </div>\n        </div>\n    </mat-card-content>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col\">\n            <p class=\"price text-color\">$ {{roomItem.roomPrice}}</p>\n        </div>\n        <div class=\"col text-right\">\n            <button class=\"btn-color\" mat-raised-button color=\"primary\" (click)=\"goToPage('HOTELDETAIL')\">Choose</button>\n        </div>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/templates/room-item/room-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/templates/room-item/room-item.component.ts ***!
  \************************************************************/
/*! exports provided: RoomItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomItemComponent", function() { return RoomItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/system.constants */ "./src/app/utilities/system.constants.ts");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomItemComponent = /** @class */ (function () {
    function RoomItemComponent(utility, router) {
        this.utility = utility;
        this.router = router;
        this.chooseHotel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // super(utility, router);
    }
    RoomItemComponent.prototype.ngOnInit = function () {
    };
    RoomItemComponent.prototype.pushPage = function (pageCode, stackStatus) {
        if (stackStatus === void 0) { stackStatus = null; }
        try {
            console.log('Push page: ', pageCode);
            var myself = this;
            myself.utility.pushStackPage(pageCode, stackStatus);
            myself.router.navigate(['/' + pageCode]);
        }
        catch (error) {
            // Nothing
        }
    };
    RoomItemComponent.prototype.goToPage = function (pageCode) {
        try {
            var targetPage = src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"][pageCode];
            console.log(targetPage);
            if (targetPage) {
                this.pushPage(targetPage, {
                    params: {},
                    pageCode: src_app_utilities_system_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_CODE"].HOME
                });
            }
        }
        catch (error) {
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomItemComponent.prototype, "roomItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RoomItemComponent.prototype, "chooseHotel", void 0);
    RoomItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-item',
            template: __webpack_require__(/*! ./room-item.component.html */ "./src/app/templates/room-item/room-item.component.html"),
            styles: [__webpack_require__(/*! ./room-item.component.css */ "./src/app/templates/room-item/room-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoomItemComponent);
    return RoomItemComponent;
}());



/***/ }),

/***/ "./src/app/utilities/system.constants.ts":
/*!***********************************************!*\
  !*** ./src/app/utilities/system.constants.ts ***!
  \***********************************************/
/*! exports provided: PAGE_CODE, IMAGE, POPUP_CONFIRM, POPUP_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_CODE", function() { return PAGE_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE", function() { return IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_CONFIRM", function() { return POPUP_CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_INFO", function() { return POPUP_INFO; });
var PAGE_CODE;
(function (PAGE_CODE) {
    PAGE_CODE["DEFAULT"] = "LOGIN";
    PAGE_CODE["SIGNUP"] = "SIGNUP";
    PAGE_CODE["HOME"] = "HOME";
    PAGE_CODE["FINDEDHOTELLIST"] = "FINDEDHOTELLIST";
    PAGE_CODE["HOTELDETAIL"] = "HOTELDETAIL";
    PAGE_CODE["ROOMLIST"] = "ROOMLIST";
    PAGE_CODE["FILLINDETAILS"] = "FILLINDETAILS";
})(PAGE_CODE || (PAGE_CODE = {}));
var IMAGE;
(function (IMAGE) {
    IMAGE["LOGINLOADING"] = "assets/images/0000_background_login.png";
})(IMAGE || (IMAGE = {}));
var POPUP_CONFIRM;
(function (POPUP_CONFIRM) {
    POPUP_CONFIRM["YES"] = "0";
    POPUP_CONFIRM["NO"] = "1";
})(POPUP_CONFIRM || (POPUP_CONFIRM = {}));
var POPUP_INFO;
(function (POPUP_INFO) {
    POPUP_INFO["OK"] = "0";
})(POPUP_INFO || (POPUP_INFO = {}));


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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBZsk1fGrQHsiBIeptDRe5Kknlid1aUOVo",
        authDomain: "hotel-booking-p2201.firebaseapp.com",
        databaseURL: "https://hotel-booking-p2201.firebaseio.com",
        projectId: "hotel-booking-p2201",
        storageBucket: "",
        messagingSenderId: "876516847848",
        appId: "1:876516847848:web:4c3058fd10a4d18a"
    },
    urlApiFirebase: "https://hotel-booking-p2201.firebaseio.com/"
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

module.exports = __webpack_require__(/*! E:\1INTERN PROJECT\HotelBooking\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map