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
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/header/header.component */ "./src/app/templates/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _templates_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] }
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-navbar-bottom></app-navbar-bottom>\n"

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
        this.title = 'HotelBooking';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _templates_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/hotel-item/hotel-item.component */ "./src/app/templates/hotel-item/hotel-item.component.ts");
/* harmony import */ var _templates_navbar_bottom_navbar_bottom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/navbar-bottom/navbar-bottom.component */ "./src/app/templates/navbar-bottom/navbar-bottom.component.ts");
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/header/header.component */ "./src/app/templates/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









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
                _templates_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#custom-search-input{\n    border: solid 1px #E4E4E4;\n    border-radius: 6px;\n    background-color: #fff;\n}\n\n#custom-search-input input{\n    border: 0;\n    box-shadow: none;\n}\n\n#custom-search-input button{\n    margin: 2px 0 0 0;\n    background: none;\n    box-shadow: none;\n    border: 0;\n    color: #666666;\n    padding: 0 8px 0 10px;\n}\n\n#custom-search-input button:hover{\n    border: 0;\n    box-shadow: none;\n    border-left: solid 1px #ccc;\n}\n\n#custom-search-input .glyphicon-search{\n    font-size: 23px;\n}\n\n.form{\n    padding: 0.5em 5%;\n}\n\n.card{\n    border-radius: 1em;\n}\n\n.info-text{\n    text-align: left;\n    width: 100%;\n}\n\nheader, form{\n    padding: 2em 5%;\n}\n\n.form-group{\n    margin-bottom: 20px;\n}\n\n.check-in{\n    margin-left: unset;\n}\n\n.item-duration{\n    max-width: 30%;\n}\n\nh2.heading{\n    font-size: 18px;\n    text-transform: uppercase;\n    font-weight: 300;\n    text-align: left;\n    color: #506982;\n    border-bottom: 1px solid #506982;\n    padding-bottom: 3px;\n    margin-bottom: 20px;\n}\n\n.find_hotel{\n    margin-top: 10%;\n    padding: 10px 0;\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.title__recent-searches{\n    padding: 1rem;\n}\n\n.item{\n    padding: 0 5px;\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home container mx-auto\">\n  <div class=\"card home__find-hotel\">\n    <form action=\"\" class=\"form\">\n      <!--  Details -->\n      <div class=\"form-group\">\n        <div class=\"grid\">\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <label><i class=\"fa fa-map-pin\"></i>&nbsp;&nbsp;Destination</label>\n              <div id=\"custom-search-input\">\n                <div class=\"input-group col-md-12\">\n                  <input type=\"text\" class=\"form-control input-lg\" placeholder=\"NewYork\" />\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-info btn-lg\" type=\"button\">\n                      <a href=\"#\"><i class=\"fa fa-search\"></i></a>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <div class=\"row check-in\">\n                <div class=\"col-8 col-md-6 item\">\n                  <label for=\"arrive\" class=\"label-date\"><i class=\"fa fa-calendar\"></i>&nbsp;&nbsp;Check-in date</label>\n                  <input type=\"date\" id=\"arrive\" class=\"floatLabel form-control\" name=\"arrive\" />\n                </div>\n                <div class=\"col-3 col-md-6 item item-duration\">\n                  <label for=\"depart\" class=\"label-date\">&nbsp;&nbsp;Duration</label>\n                  <input type=\"date\" id=\"depart\" class=\"floatLabel form-control\" name=\"depart\" />\n                </div>\n              </div>  \n            </div>\n          </div>\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <label><i class=\"fa fa-tags\"></i>&nbsp;&nbsp;Total guests & Rooms</label>\n              <div id=\"custom-search-input\">\n                <div class=\"input-group col-md-12\">\n                  <input type=\"text\" class=\"form-control input-lg\" placeholder=\"NewYork\" />\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-info btn-lg\" type=\"button\">\n                      <a href=\"#\"><i class=\"fa fa-sort\"></i></a>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-1-4 col-1-4-sm\">\n            <div class=\"controls\">\n              <button class=\"btn btn-primary find_hotel\">Find hotel</button>\n            </div>\n          </div>\n        </div>\n      </div> <!-- /.form-group -->\n    </form>\n  </div>\n  <div class=\"recent-searches\">\n    <h5 class=\"title__recent-searches\">Recent Researches</h5>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-6 col-md-6 item\">\n          <app-hotel-item></app-hotel-item>\n        </div>\n        <div class=\"col-6 col-md-6 item\">\n          <app-hotel-item></app-hotel-item>\n        </div>\n        <div class=\"col-6 col-md-6 item\">\n          <app-hotel-item></app-hotel-item>\n        </div>\n        <div class=\"col-6 col-md-6 item\">\n          <app-hotel-item></app-hotel-item>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/templates/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"header__image\">\n    <img src=\"../../../assets/images/tivkumb_0.jpg\" alt=\"\" class=\"\">\n  </div>\n</header>"

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

module.exports = ".card{\n    border: unset;\n}\n\n.card-body{\n    padding: 1.25rem 0;\n}\n\n.card-title{\n    margin-bottom: 0.5rem;\n}\n\n.item_image{\n    border-radius: calc(0.75rem - 0.5px);\n}\n\n/* checked star */\n\n.checked{\n    color: orange;\n}\n\n.unchecked{\n\n}\n\n.item__info{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: nowrap;\n    margin-bottom: 0.5rem; \n}\n\n.item__info .price{\n    color: orange;  \n    font-size: 15px;\n    margin: unset;\n}\n\n.item__info .fa-star{\n    font-size: 12px;\n}"

/***/ }),

/***/ "./src/app/templates/hotel-item/hotel-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/templates/hotel-item/hotel-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"card-img-top item_image\"\n    src=\"./../../../assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg\"\n    alt=\"Card image\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Charlotte Hotel</h5>\n    <div class=\"item__info\">\n      <div class=\"price__item\">\n        <p class=\"price\">200.000 USD</p>\n      </div>\n      <div class=\"item__rating\">\n        <span class=\"fa fa-star checked\"></span>\n        <span class=\"fa fa-star checked\"></span>\n        <span class=\"fa fa-star checked\"></span>\n        <span class=\"fa fa-star unchecked\"></span>\n        <span class=\"fa fa-star unchecked\"></span>\n      </div>\n    </div>\n    <p class=\"card-text\">Some example text.</p>\n  </div>\n</div>"

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

module.exports = ".navbar {\n    width: 100%;\n    background-color: #ffffff;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: unset;\n    overflow: hidden;\n    position: fixed;\n    bottom: 0;\n}\n\n.navbar a {\n    float: left;\n    padding: 12px;\n    color: rgb(83, 83, 83);\n    text-decoration: none;\n    font-size: 12px;\n    text-align: center;\n}\n\n.navbar__icon{\n    font-size: 20px;\n}\n\n.navbar a:hover {\n    \n}\n\n.active {\n\n}\n\n@media screen and (max-width: 500px) {\n.navbar a {\n    float: none;\n    display: block;\n    }\n}"

/***/ }),

/***/ "./src/app/templates/navbar-bottom/navbar-bottom.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/templates/navbar-bottom/navbar-bottom.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n    <a class=\"active\" href=\"#\"><i class=\"fa fa-fw fa-search navbar__icon\"></i><br>Search</a> \n    <a href=\"#\"><i class=\"fa fa-list navbar__icon\"></i><br>My Booking</a> \n    <a href=\"#\"><i class=\"fa fa-fw fa-bookmark navbar__icon\"></i><br>Bookmark</a> \n    <a href=\"#\"><i class=\"fa fa-fw fa-cog navbar__icon\"></i><br>Setting</a>\n    <a href=\"#\"><i class=\"fa fa-fw fa-user navbar__icon\"></i><br>Account</a>\n</div>"

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