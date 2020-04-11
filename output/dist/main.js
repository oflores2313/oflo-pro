(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav mat-tab-nav-bar>\n  <!-- <img src=\"../assets/oflo.jpeg\"> -->\n  <!-- <h3 class=\"name\">Oscar Flores</h3> -->\n  <div name=\"nav-links\">\n      <a mat-tab-link\n    *ngFor=\"let link of navLinks\"\n    [routerLink]=\"link.link\"\n    routerLinkActive #rla=\"routerLinkActive\"\n    [active]=\"rla.isActive\"\n    class=\"nav-url\"\n    >\n    {{ link.label }}\n    </a>\n\n  </div>\n</nav>\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <core-nav></core-nav> -->\n\n\n<!-- \n<nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\">Angular Router</a>\n      <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"experience\">Experience</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"portfolio\">Portfolio</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"contact\">Contact</a></li>\n\n      </ul>\n  </div>\n</nav> -->\n\n\n<router-outlet></router-outlet>\n<footer class=\"footer\">\n  <div class=\"social-media\">\n    <i class=\"fa fa-linkedin fa-2x linked\" (click)=\"openLinkedIn()\"></i>\n    <a class=\"email\" href=\"mailto:oflores2313@gmail.com\"><i class=\"fa fa-envelope fa-2x\"></i></a>\n  </div>\n\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav/nav.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav/nav.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <img class=\"logo\" width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/contact/contact.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/contact/contact.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row contact\">\n<mat-card class=\"about-me\" color=\"primary\">\n  <mat-card-header>\n    <mat-card-title>\n      ABOUT ME\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p>\n      My name is Oscar Flores and I'm a Full Stack Engineer.  I have experience in both front-end & back-end technologies. Over the past few years, I've been working with the Angular Framework (front-end) and PHP (back-end).  Recently, I have begun working with React, React Native (app development), and Vue as well as getting up to speed with Docker. \n    </p>\n    <p>\n      While I enjoy coding, my passion is playing baseball.  I have been playing baseball since I was 4 years old. Other hobbies include, every other sport, spending time with my wife and 2 kids (Rocky, golden retriever / german shepard mix,  and Loki, siberian husky ).  I say they are my kids since they require the same attention just without the speaking part. \n    </p>\n    <p>\n      Last but not least.. GO WHITE SOX!\n\n\n    </p>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"contact-me\" color=\"primary\">\n  <mat-card-header>\n      <mat-card-title>\n         GET IN TOUCH\n      </mat-card-title>\n  </mat-card-header>\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"contactMe(contactForm.value)\">\n    <mat-card-content>\n      <div class=\"contact-form\">\n        <p>\n            I’m always looking to collaborate with new people. \n            If you have project idea in mind or would like to connect, please don’t hesitate to get in touch. \n            PLease fill out the form below.  I look forward to hearing from you!\n        </p>\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Name\" formControlName=\"name\" id=\"name\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Message\" formControlName=\"message\" id=\"message\"></textarea>\n        </mat-form-field>\n        \n        <mat-form-field>\n          <mat-select placeholder=\"Type\" formControlName=\"messageType\" id=\"messageType\">\n            <mat-option value=\"general\">General</mat-option>\n            <mat-option value=\"subscribe\">Subscribe</mat-option>\n            <mat-option value=\"employment\">Employment Opportunities</mat-option>\n          </mat-select>\n        </mat-form-field>\n        \n        <button mat-raised-button >Send</button>\n      </div>\n\n    </mat-card-content>\n  </form>\n</mat-card>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/experience/experience.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/experience/experience.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"experience\">\n  <mat-card class=\"resume\">\n    <mat-card-header>\n      Oscar Flores's Resume\n      <button\n        class=\"download\"\n        mat-raised-button\n        onclick=\"window.open('https://github.com/oflores2313/resume/raw/master/flores-oscar-resume-2020%20(1).pdf')\"\n      >\n        Download\n      </button>\n    </mat-card-header>\n\n    <mat-card-content>\n      <iframe\n        src=\"https://docs.google.com/gview?url=https://github.com/oflores2313/resume/raw/master/flores-oscar-resume-2020%20(1).pdf &embedded=true\"\n        \n        frameborder=\"0\"\n      ></iframe>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\n    <span class=\"name logo\" style=\"font-size: 150px;\"> OF </span>\n    <span class=\"name\"> Oscar Flores </span>\n    <span class=\"name title\"> Full Stack Engineer </span>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/portfolio/portfolio.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/portfolio/portfolio.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let project of projects\">\n  <div class=\"card top\">\n  \n      <mat-card>\n        <div class=\"tech-image\"></div>\n        <span class=\"project-name\">{{ project.name }}</span>\n        \n        <p class=\"project-description\">{{ project.description }}</p>\n        <div class=\"project-tech\">\n          <mat-chip-list aria-label=\"Tech Stack\">\n            <mat-chip *ngFor=\"let tech of project.technology\">{{\n              tech\n            }}</mat-chip>\n            \n          </mat-chip-list>\n          <button mat-raised-button (click)=openGitHub(project.id)>Open Github</button>\n        </div>\n      </mat-card>\n\n  </div>\n</ng-container>\n\n<div class=\"winter-is-coming\">\n  <div class=\"snow snow--near\"></div>\n  <div class=\"snow snow--near snow--alt\"></div>\n\n  <div class=\"snow snow--mid\"></div>\n  <div class=\"snow snow--mid snow--alt\"></div>\n\n  <div class=\"snow snow--far\"></div>\n  <div class=\"snow snow--far snow--alt\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _feature_modules_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-modules/contact/contact.component */ "./src/app/feature-modules/contact/contact.component.ts");
/* harmony import */ var _feature_modules_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-modules/experience/experience.component */ "./src/app/feature-modules/experience/experience.component.ts");
/* harmony import */ var _feature_modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature-modules/home/home.component */ "./src/app/feature-modules/home/home.component.ts");
/* harmony import */ var _feature_modules_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature-modules/portfolio/portfolio.component */ "./src/app/feature-modules/portfolio/portfolio.component.ts");







var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _feature_modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'experience',
        component: _feature_modules_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]
    },
    {
        path: 'contact',
        component: _feature_modules_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: 'portfolio',
        component: _feature_modules_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .mat-tab-nav-bar{\n    text-align: center;\n    */\n/* .nav-url{\n    display: block;\n}  */\nbody > app-root > nav {\n  background-color: lightgrey;\n  border-bottom: 0px;\n}\n.name {\n  font-family: monospace;\n  padding-top: 10px;\n  padding-left: 10px;\n}\n.social-media {\n  position: relative;\n  text-align: center;\n  margin-top: 6rem;\n}\n.social-media > .fa-2x {\n  margin-right: 10px;\n}\n.social-media > .tweet {\n  color: lightblue;\n}\n.social-media > .linked {\n  background: lightgray;\n  color: white;\n  border-radius: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  cursor: pointer;\n}\n.social-media > .email {\n  color: lightgray;\n}\n@media (max-width: 600px){\n  body > app-root > nav > div.mat-tab-link-container > div > div > div > a.mat-tab-link {\n    font-size: 0.5rem;\n  }\n};\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUs7QUFDTDs7SUFFSTtBQUVKO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYXQtdGFiLW5hdi1iYXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICovXG4vKiAubmF2LXVybHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0gICovXG5cbmJvZHkgPiBhcHAtcm9vdCA+IG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuLm5hbWUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uc29jaWFsLW1lZGlhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG4uc29jaWFsLW1lZGlhID4gLmZhLTJ4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNvY2lhbC1tZWRpYSA+IC50d2VldCB7XG4gIGNvbG9yOiBsaWdodGJsdWU7XG59XG4uc29jaWFsLW1lZGlhID4gLmxpbmtlZCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zb2NpYWwtbWVkaWEgPiAuZW1haWwge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgYm9keSA+IGFwcC1yb290ID4gbmF2ID4gZGl2Lm1hdC10YWItbGluay1jb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYgPiBhLm1hdC10YWItbGluayB7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gIH1cbn07XG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'oflo-pro-docker';
        this.activeLinkIndex = -1;
        this.navLinks = [
            {
                label: 'Home',
                link: './home',
                index: 0
            },
            {
                label: 'Experience',
                link: './experience',
                index: 1
            },
            {
                label: 'Portfolio',
                link: './portfolio',
                index: 2
            },
            {
                label: 'Contact',
                link: './contact',
                index: 3
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks.find(function (tab) { return tab.link === '.' + _this.router.url; }));
        });
    };
    AppComponent.prototype.openLinkedIn = function () {
        window.open('https://www.linkedin.com/in/oscar-flores-64b34270', '_blank');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _feature_modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature-modules/home/home.module */ "./src/app/feature-modules/home/home.module.ts");
/* harmony import */ var _feature_modules_experience_experience_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature-modules/experience/experience.module */ "./src/app/feature-modules/experience/experience.module.ts");
/* harmony import */ var _feature_modules_contact_contact_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature-modules/contact/contact.module */ "./src/app/feature-modules/contact/contact.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _feature_modules_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature-modules/portfolio/portfolio.module */ "./src/app/feature-modules/portfolio/portfolio.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _feature_modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                _feature_modules_experience_experience_module__WEBPACK_IMPORTED_MODULE_8__["ExperienceModule"],
                _feature_modules_contact_contact_module__WEBPACK_IMPORTED_MODULE_9__["ContactModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _feature_modules_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__["PortfolioModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
            ],
            exports: [
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/core/nav/nav.component.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/nav/nav.component.css":
/*!********************************************!*\
  !*** ./src/app/core/nav/nav.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/core/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'core-nav',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav/nav.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nav.component.css */ "./src/app/core/nav/nav.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/feature-modules/contact/contact.component.css":
/*!***************************************************************!*\
  !*** ./src/app/feature-modules/contact/contact.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact {\n  margin-left: 5em;\n  margin-right: 5em;\n}\n.contact > .mat-card {\n  width: 53em;\n  font-family: monospace;\n}\n.about-me {\n  /* max-width: 50%; */\n  margin-top: 5em;\n  /* margin-left: 25%; */\n  border-radius: 25px;\n  margin-right: 2em;\n}\n.contact-me {\n  /* max-width: 50%; */\n  margin-top: 5em;\n  /* margin-left: 25%; */\n  border-radius: 25px;\n}\n.contact-form {\n  display: flex;\n  flex-direction: column;\n}\n.contact-form > * {\n  width: 100%;\n}\n.contact-form form {\n  margin-bottom: 20px;\n}\n.contact-form form > * {\n  margin: 5px 0;\n}\n.contact-form .mat-radio-button {\n  margin: 0 12px;\n}\n.contact-form button {\n  outline-color: white;\n  border-radius: 25px;\n  margin: auto;\n  display: block;\n  width: 50%;\n}\n@media (max-width: 600px){\n    .contact {\n        margin-right: 0.5rem;\n        margin-left: 0.5rem;\n    }\n    .about-me {\n        /* max-width: 50%; */\n        margin-top: 5em;\n        /* margin-left: 25%; */\n        border-radius: 25px;\n        margin-right: 0;\n      }\n      .contact-me {\n          margin-top: 2rem;\n      }\n};\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtRQUNwQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixlQUFlO01BQ2pCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7QUFDTiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDVlbTtcbiAgbWFyZ2luLXJpZ2h0OiA1ZW07XG59XG4uY29udGFjdCA+IC5tYXQtY2FyZCB7XG4gIHdpZHRoOiA1M2VtO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuLmFib3V0LW1lIHtcbiAgLyogbWF4LXdpZHRoOiA1MCU7ICovXG4gIG1hcmdpbi10b3A6IDVlbTtcbiAgLyogbWFyZ2luLWxlZnQ6IDI1JTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG4uY29udGFjdC1tZSB7XG4gIC8qIG1heC13aWR0aDogNTAlOyAqL1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIC8qIG1hcmdpbi1sZWZ0OiAyNSU7ICovXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFjdC1mb3JtID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0gPiAqIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmNvbnRhY3QtZm9ybSAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuXG4uY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gIG91dGxpbmUtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5jb250YWN0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuICAgIC5hYm91dC1tZSB7XG4gICAgICAgIC8qIG1heC13aWR0aDogNTAlOyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAyNSU7ICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cbiAgICAgIC5jb250YWN0LW1lIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxufTtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/feature-modules/contact/contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/feature-modules/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.service */ "./src/app/feature-modules/contact/contact.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            messageType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    ContactComponent.prototype.contactMe = function (contactFormData) {
        console.log('test: ', contactFormData);
        this.contactService.submitContactMessage(contactFormData).subscribe();
    };
    ContactComponent.ctorParameters = function () { return [
        { type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }
    ]; };
    ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/contact/contact.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.css */ "./src/app/feature-modules/contact/contact.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/feature-modules/contact/contact.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/feature-modules/contact/contact.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/feature-modules/contact/contact.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact.service */ "./src/app/feature-modules/contact/contact.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");












var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [
                _contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/feature-modules/contact/contact.service.ts":
/*!************************************************************!*\
  !*** ./src/app/feature-modules/contact/contact.service.ts ***!
  \************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.contactApiURL = 'https://8n5vwvvmk2.execute-api.us-east-1.amazonaws.com/oflo-pro-contact-us';
    }
    ContactService.prototype.submitContactMessage = function (message) {
        return this.http.post(this.contactApiURL, message);
    };
    ContactService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/feature-modules/experience/experience.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/feature-modules/experience/experience.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".experience {\n  margin: auto;\n  margin-top: 2em;\n}\nbody > app-root > app-experience > div > mat-card {\n  height: 50em;\n}\n.experience > .resume > mat-card > mat-card-header {\n  font-size: 18px;\n  font-style: oblique;\n}\n.experience > .resume {\n  width: 75em;\n  height: 90em;\n  display: block;\n  position: relative;\n  font-family: monospace;\n  margin-left: auto;\n  margin-right: auto;\n}\n.download {\n  margin-left: 45em;\n  margin-bottom: 10px;\n  outline-color: white;\n}\niframe {\n  width: 100%;\n  height: 78em;\n}\n@media(max-width: 600px){\n  .experience {\n    margin-left: 0;\n    margin-right: 0;\n    height: 35rem;\n  }\n  .experience > .resume {\n    width: 100%;\n    height: 100%;\n    margin-right: 0;\n    margin-left: 0;\n    \n  }\n  .download {\n    margin-left: 2rem;\n  }\n  iframe {\n    width: 100%;\n    height: 30rem!important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYzs7RUFFaEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbmJvZHkgPiBhcHAtcm9vdCA+IGFwcC1leHBlcmllbmNlID4gZGl2ID4gbWF0LWNhcmQge1xuICBoZWlnaHQ6IDUwZW07XG59XG4uZXhwZXJpZW5jZSA+IC5yZXN1bWUgPiBtYXQtY2FyZCA+IG1hdC1jYXJkLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cbi5leHBlcmllbmNlID4gLnJlc3VtZSB7XG4gIHdpZHRoOiA3NWVtO1xuICBoZWlnaHQ6IDkwZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZG93bmxvYWQge1xuICBtYXJnaW4tbGVmdDogNDVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3V0bGluZS1jb2xvcjogd2hpdGU7XG59XG5pZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3OGVtO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XG4gIC5leHBlcmllbmNlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzNXJlbTtcbiAgfVxuICAuZXhwZXJpZW5jZSA+IC5yZXN1bWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgXG4gIH1cbiAgLmRvd25sb2FkIHtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgfVxuICBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzByZW0haW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/feature-modules/experience/experience.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/feature-modules/experience/experience.component.ts ***!
  \********************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent.prototype.downloadResume = function () {
    };
    ExperienceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/experience/experience.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./experience.component.css */ "./src/app/feature-modules/experience/experience.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/feature-modules/experience/experience.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feature-modules/experience/experience.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience.component */ "./src/app/feature-modules/experience/experience.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");






var ExperienceModule = /** @class */ (function () {
    function ExperienceModule() {
    }
    ExperienceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ]
        })
    ], ExperienceModule);
    return ExperienceModule;
}());



/***/ }),

/***/ "./src/app/feature-modules/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/feature-modules/home/home.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  margin-top: 10px;\n}\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  margin-top: 10px;\n}\n.name {\n  font-family: \"Gugi\", cursive;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 80px;\n}\n.title {\n    font-family: 'Changa', sans-serif;\n    font-size: 40px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiR3VnaVwiLCBjdXJzaXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDgwcHg7XG59XG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2hhbmdhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDQwcHg7XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/feature-modules/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/feature-modules/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/feature-modules/home/home.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/feature-modules/home/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/feature-modules/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/feature-modules/home/home.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/feature-modules/portfolio/portfolio.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/feature-modules/portfolio/portfolio.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.card {\n  width: 80%;\n  margin: auto;\n  height: 13rem;\n  margin-bottom: 2rem;\n}\n\ndiv.top {\n  top: 5rem;\n}\n\n.tech-image {\n  border: 1px solid black;\n  position: absolute;\n  width: 13rem;\n  height: 11rem;\n}\n\n.project-name {\n  font-size: 20px;\n  margin-left: 15rem;\n}\n\n.project-description {\n  margin-left: 15rem;\n}\n\n.project-tech {\n  margin-left: 15rem !important;\n}\n\nbutton {\n  margin-top: 1rem;\n}\n\ndiv.portfolio {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n  height: 40%;\n  width: 40%;\n  background-color: white;\n  border-radius: 25%;\n  text-align: center;\n  padding-top: 10%;\n  box-shadow: 0px 0px 4px silver;\n}\n\nspan {\n  font-family: \"Gugi\", cursive;\n  font-size: 50px;\n}\n\n.snow, .winter-is-coming {\n  z-index: 100;\n  pointer-events: none;\n}\n\n.winter-is-coming {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n\n.snow {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-animation: falling linear infinite both;\n          animation: falling linear infinite both;\n  transform: translate3D(0, -100%, 0);\n}\n\n.snow--near {\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-large-075d267ecbc42e3564c8ed43516dd557.png\");\n  background-size: contain;\n}\n\n.snow--near + .snow--alt {\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n}\n\n.snow--mid {\n  -webkit-animation-duration: 20s;\n          animation-duration: 20s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-medium-0b8a5e0732315b68e1f54185be7a1ad9.png\");\n  background-size: contain;\n}\n\n.snow--mid + .snow--alt {\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n\n.snow--far {\n  -webkit-animation-duration: 30s;\n          animation-duration: 30s;\n  background-image: url(\"https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-small-1ecd03b1fce08c24e064ff8c0a72c519.png\");\n  background-size: contain;\n}\n\n.snow--far + .snow--alt {\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n}\n\n@-webkit-keyframes falling {\n  0% {\n    transform: translate3D(-7.5%, -100%, 0);\n  }\n  100% {\n    transform: translate3D(7.5%, 100%, 0);\n  }\n}\n\n@keyframes falling {\n  0% {\n    transform: translate3D(-7.5%, -100%, 0);\n  }\n  100% {\n    transform: translate3D(7.5%, 100%, 0);\n  }\n}\n\n@media (max-width: 600px) {\n  .tech-image {\n    display: none;\n  }\n\n  .project-name {\n    margin-left: 0;\n    font-size: 1rem;\n  }\n\n  .project-description {\n    margin-left: 0;\n    font-size: 0.8rem;\n  }\n\n  .mat-chip-list {\n    display: none !important;\n  }\n\n  .project-tech {\n    margin-left: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vZmxvcmVzL0RldmVsb3BtZW50L29mbG8tcHJvL3NyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsNkJBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDTUY7O0FESkE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUNPRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxtQ0FBQTtBQ0RGOztBREdFO0VBQ0UsK0JBaENNO1VBZ0NOLHVCQWhDTTtFQWlDTix5SEFBQTtFQUNBLHdCQUFBO0FDREo7O0FER0k7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDRE47O0FES0U7RUFDRSwrQkF6Q0s7VUF5Q0wsdUJBekNLO0VBMENMLDBIQUFBO0VBQ0Esd0JBQUE7QUNISjs7QURLSTtFQUNFLDRCQUFBO1VBQUEsb0JBQUE7QUNITjs7QURPRTtFQUNFLCtCQWxESztVQWtETCx1QkFsREs7RUFtREwseUhBQUE7RUFDQSx3QkFBQTtBQ0xKOztBRE9JO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0xOOztBRFVBO0VBQ0U7SUFDRSx1Q0FBQTtFQ1BGO0VEVUE7SUFDRSxxQ0FBQTtFQ1JGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLHVDQUFBO0VDUEY7RURVQTtJQUNFLHFDQUFBO0VDUkY7QUFDRjs7QURXQTtFQUNFO0lBQ0UsYUFBQTtFQ1RGOztFRFdBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUNSRjs7RURVQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtFQ1BGOztFRFNBO0lBQ0Usd0JBQUE7RUNORjs7RURRQTtJQUNFLHlCQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbmRpdi50b3Age1xuICB0b3A6IDVyZW07XG59XG4udGVjaC1pbWFnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxM3JlbTtcbiAgaGVpZ2h0OiAxMXJlbTtcbn1cbi5wcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXJlbTtcbn1cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xufVxuXG4ucHJvamVjdC10ZWNoIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtICFpbXBvcnRhbnQ7XG59XG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuZGl2LnBvcnRmb2xpbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCBzaWx2ZXI7XG59XG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiR3VnaVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbiRzLS1uZWFyOiAxMHM7XG4kcy0tbWlkOiAoJHMtLW5lYXIgKiAyKTtcbiRzLS1mYXI6ICgkcy0tbmVhciAqIDMpO1xuXG4kZWFzZS0tb3V0LXF1YWQ6IGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcblxuJW9uLXRvcCB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi53aW50ZXItaXMtY29taW5nIHtcbiAgQGV4dGVuZCAlb24tdG9wO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc25vdyB7XG4gIEBleHRlbmQgJW9uLXRvcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogZmFsbGluZyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMTAwJSwgMCk7XG5cbiAgJi0tbmVhciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkcy0tbmVhcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2RsNnJ0M213Y2p6eGcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL3Nub3cvc25vdy1sYXJnZS0wNzVkMjY3ZWNiYzQyZTM1NjRjOGVkNDM1MTZkZDU1Ny5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXG4gICAgJiArIC5zbm93LS1hbHQge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAoJHMtLW5lYXIgLyAyKTtcbiAgICB9XG4gIH1cblxuICAmLS1taWQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHMtLW1pZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2RsNnJ0M213Y2p6eGcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL3Nub3cvc25vdy1tZWRpdW0tMGI4YTVlMDczMjMxNWI2OGUxZjU0MTg1YmU3YTFhZDkucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAgICYgKyAuc25vdy0tYWx0IHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogKCRzLS1taWQgLyAyKTtcbiAgICB9XG4gIH1cblxuICAmLS1mYXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHMtLWZhcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2RsNnJ0M213Y2p6eGcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL3Nub3cvc25vdy1zbWFsbC0xZWNkMDNiMWZjZTA4YzI0ZTA2NGZmOGMwYTcyYzUxOS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXG4gICAgJiArIC5zbm93LS1hbHQge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAoJHMtLWZhciAvIDIpO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhbGxpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNy41JSwgLTEwMCUsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCg3LjUlLCAxMDAlLCAwKTtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XG4gIC50ZWNoLWltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9qZWN0LW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLm1hdC1jaGlwLWxpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9qZWN0LXRlY2gge1xuICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcbiAgfVxuICAuYnV0dG9uIHtcbiAgICBcbiAgfVxufVxuIiwiZGl2LmNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbmRpdi50b3Age1xuICB0b3A6IDVyZW07XG59XG5cbi50ZWNoLWltYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzcmVtO1xuICBoZWlnaHQ6IDExcmVtO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVyZW07XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xufVxuXG4ucHJvamVjdC10ZWNoIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmRpdi5wb3J0Zm9saW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggc2lsdmVyO1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiR3VnaVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5zbm93LCAud2ludGVyLWlzLWNvbWluZyB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi53aW50ZXItaXMtY29taW5nIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNub3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBmYWxsaW5nIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0xMDAlLCAwKTtcbn1cbi5zbm93LS1uZWFyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZGw2cnQzbXdjanp4Zy5jbG91ZGZyb250Lm5ldC9hc3NldHMvc25vdy9zbm93LWxhcmdlLTA3NWQyNjdlY2JjNDJlMzU2NGM4ZWQ0MzUxNmRkNTU3LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnNub3ctLW5lYXIgKyAuc25vdy0tYWx0IHtcbiAgYW5pbWF0aW9uLWRlbGF5OiA1cztcbn1cbi5zbm93LS1taWQge1xuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9kbDZydDNtd2NqenhnLmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9zbm93L3Nub3ctbWVkaXVtLTBiOGE1ZTA3MzIzMTViNjhlMWY1NDE4NWJlN2ExYWQ5LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnNub3ctLW1pZCArIC5zbm93LS1hbHQge1xuICBhbmltYXRpb24tZGVsYXk6IDEwcztcbn1cbi5zbm93LS1mYXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDMwcztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9kbDZydDNtd2NqenhnLmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9zbm93L3Nub3ctc21hbGwtMWVjZDAzYjFmY2UwOGMyNGUwNjRmZjhjMGE3MmM1MTkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4uc25vdy0tZmFyICsgLnNub3ctLWFsdCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhbGxpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNy41JSwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoNy41JSwgMTAwJSwgMCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGVjaC1pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcm9qZWN0LW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4gIC5tYXQtY2hpcC1saXN0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJvamVjdC10ZWNoIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/feature-modules/portfolio/portfolio.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/feature-modules/portfolio/portfolio.component.ts ***!
  \******************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.projects = [
            {
                id: 1,
                name: 'Students Complete App ',
                description: 'This is a dockerized application that contains both the Students API and the Students Front End Application in the same directory',
                technology: ['Angular', 'Docker', 'NodeJs'],
                image: '/',
                url: 'https://github.com/oflores2313/students-gradebook-dockerized'
            },
            {
                id: 2,
                name: 'Students API',
                description: 'This NodeJS app contains the students api that is used in the student gradebook front end app.',
                technology: ['NodeJs'],
                image: '/',
                url: 'https://github.com/oflores2313/students-class-api'
            },
            {
                id: 3,
                name: 'Students Front End',
                description: 'This web app will show a table of users (students) that will contain name, grade average and a details button. Upon details button click, the route changes and shows the complete user(student) information.',
                technology: ['Angular'],
                image: '/',
                url: 'https://github.com/oflores2313/students-angular'
            },
            {
                id: 4,
                name: 'User List Training',
                description: 'This CRUD web application was created while training up on the VueJS Framework.',
                technology: ['VueJS', 'Bootstrap'],
                image: '/',
                url: 'https://github.com/oflores2313/user-list-vue-training'
            },
            {
                id: 5,
                name: 'React Movies',
                description: 'This CRUD web application was created while training up on the React Framework.',
                technology: ['React', 'Bootstrap'],
                image: '/',
                url: 'https://github.com/oflores2313/react-movies'
            },
            {
                id: 6,
                name: 'Final Countdown',
                description: 'This Angular developed application was created when leaving my previous company.  It was a countdown that took the end date as a parameter which then calculated the countdown.',
                technology: ['Angular', 'Bootstrap'],
                image: '/',
                url: 'https://github.com/oflores2313/final-countdown'
            }
        ];
    };
    PortfolioComponent.prototype.openGitHub = function (id) {
        if (id) {
            this.projects.map(function (data) {
                if (data.id === id) {
                    window.open(data.url, '_blank');
                }
            });
        }
    };
    PortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-modules/portfolio/portfolio.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/feature-modules/portfolio/portfolio.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/feature-modules/portfolio/portfolio.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature-modules/portfolio/portfolio.module.ts ***!
  \***************************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/feature-modules/portfolio/portfolio.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");







var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            exports: [_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]]
        })
    ], PortfolioModule);
    return PortfolioModule;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oflores/Development/oflo-pro/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map