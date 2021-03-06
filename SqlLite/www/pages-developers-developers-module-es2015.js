(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-developers-developers-module"],{

/***/ "+ZRP":
/*!***************************************************************!*\
  !*** ./src/app/pages/developers/developers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DevelopersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersPageRoutingModule", function() { return DevelopersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _developers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developers.page */ "rumO");




const routes = [
    {
        path: '',
        component: _developers_page__WEBPACK_IMPORTED_MODULE_3__["DevelopersPage"]
    }
];
let DevelopersPageRoutingModule = class DevelopersPageRoutingModule {
};
DevelopersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DevelopersPageRoutingModule);



/***/ }),

/***/ "Lwl4":
/*!*******************************************************!*\
  !*** ./src/app/pages/developers/developers.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZlbG9wZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "N4d5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers/developers.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Marcas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment [(ngModel)]=\"selectedView\">\n    <ion-segment-button value=\"devs\">\n      <ion-label>Marca</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"products\">\n      <ion-label>Modelo</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"selectedView\">\n    <div *ngSwitchCase=\"'devs'\">\n      <ion-item>\n        <ion-label position=\"stacked\">Ingrese la Marca</ion-label>\n        <ion-input [(ngModel)]=\"developer.name\" placeholder=\"Developer Name\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"addDeveloper()\">Añadir</ion-button>\n      <ion-list>\n        <ion-item button *ngFor=\"let dev of developers\" [routerLink]=\"['/', 'developer', dev.id]\">\n          <ion-label>\n            <h2>{{ dev.name }}</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'products'\">\n      <ion-item>\n        <ion-label position=\"stacked\">Modelo</ion-label>\n        <ion-input [(ngModel)]=\"product.name\" placeholder=\"Name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Color</ion-label>\n        <ion-input [(ngModel)]=\"product.color\" placeholder=\"Color\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Costo</ion-label>\n        <ion-input [(ngModel)]=\"product.costo\" placeholder=\"Costo\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Año</ion-label>\n        <ion-input [(ngModel)]=\"product.anio\" placeholder=\"Anio\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Marca</ion-label>\n        <ion-select [(ngModel)]=\"product.marcaId\">\n          <ion-select-option *ngFor=\"let dev of developers\" [value]=\"dev.id\">{{ dev.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"addProduct()\">Añadir Modelo</ion-button>\n      <ion-list>\n        <ion-item *ngFor=\"let prod of products | async\">\n          <ion-label>\n            <h2>{{ prod.name }}</h2>\n            <p> {{ prod.costo }}</p>\n            <p> {{ prod.color }}</p>\n            <p> {{ prod.anio }}</p>\n            <p>Fabricado por: {{ prod.marca }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "ZsP5":
/*!*******************************************************!*\
  !*** ./src/app/pages/developers/developers.module.ts ***!
  \*******************************************************/
/*! exports provided: DevelopersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersPageModule", function() { return DevelopersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _developers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./developers-routing.module */ "+ZRP");
/* harmony import */ var _developers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developers.page */ "rumO");







let DevelopersPageModule = class DevelopersPageModule {
};
DevelopersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _developers_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevelopersPageRoutingModule"]
        ],
        declarations: [_developers_page__WEBPACK_IMPORTED_MODULE_6__["DevelopersPage"]]
    })
], DevelopersPageModule);



/***/ }),

/***/ "rumO":
/*!*****************************************************!*\
  !*** ./src/app/pages/developers/developers.page.ts ***!
  \*****************************************************/
/*! exports provided: DevelopersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersPage", function() { return DevelopersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_developers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./developers.page.html */ "N4d5");
/* harmony import */ var _developers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./developers.page.scss */ "Lwl4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "ZJFI");





let DevelopersPage = class DevelopersPage {
    constructor(db) {
        this.db = db;
        this.developers = [];
        this.developer = {};
        this.product = {};
        this.selectedView = 'devs';
    }
    ngOnInit() {
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.db.getDevs().subscribe(devs => {
                    this.developers = devs;
                });
                this.products = this.db.getProducts();
            }
        });
    }
    addDeveloper() {
        this.db.addDeveloper(this.developer['name'])
            .then(_ => {
            this.developer = {};
        });
    }
    addProduct() {
        this.db.addProduct(this.product['name'], this.product['color'], this.product['costo'], this.product['anio'], this.product['marcaId'])
            .then(_ => {
            this.product = {};
        });
    }
};
DevelopersPage.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
DevelopersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-developers',
        template: _raw_loader_developers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_developers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DevelopersPage);



/***/ })

}]);
//# sourceMappingURL=pages-developers-developers-module-es2015.js.map