var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<!-- <app-login-register></app-login-register> -->\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-register/login-register.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-register/login-register.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-3\">\r\n    <div class=\"row justify-content-sm-center\">\r\n        <div class=\"col-sm-10 col-md-6\">\r\n            <div class=\"card border-info\">\r\n                <div class=\"card-header\">Login</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 text-center\">\r\n                            <img src=\"https://placeimg.com/128/128/nature\">\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <form>\r\n                                <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Email\" required autofocus>\r\n                                <input type=\"password\" class=\"form-control mb-2\" placeholder=\"Password\" required>\r\n                                <button class=\"btn btn-lg btn-primary btn-block mb-1\" type=\"submit\">Login</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/login.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/login.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container pt-3\">\r\n    <div class=\"row justify-content-sm-center\">\r\n        <div class=\"col-sm-10 col-md-6\">\r\n            <div class=\"card border-info\">\r\n                <div class=\"card-header\">Login</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 text-center\">\r\n                            <img src=\"https://placeimg.com/128/128/nature\">\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <form>\r\n                                <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Email\" required autofocus>\r\n                                <input type=\"password\" class=\"form-control mb-2\" placeholder=\"Password\" required>\r\n                                <button class=\"btn btn-lg btn-primary btn-block mb-1\" type=\"submit\"\r\n                                    (click)=\"auth.login()\">Login</button>\r\n                                <button class=\"btn btn-lg btn-primary btn-block mb-1\" (click)=\"gsignIn()\">Login with\r\n                                    Google</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n<mat-tab-group>\r\n    <mat-tab label=\"Login\">\r\n        <h1>Login</h1>\r\n        <form>\r\n            <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Email\" required autofocus>\r\n            <input type=\"password\" class=\"form-control mb-2\" placeholder=\"Password\" required>\r\n            <button class=\"btn btn-lg btn-primary btn-block mb-1\" type=\"submit\" (click)=\"auth.login()\">Login</button>\r\n            <button class=\"btn btn-lg btn-primary btn-block mb-1\" (click)=\"gsignIn()\">Login with\r\n                Google</button>\r\n        </form>\r\n    </mat-tab>\r\n    <mat-tab label=\"Register\">\r\n        <h1>Some more tab content</h1>\r\n        <p>...</p>\r\n    </mat-tab>\r\n</mat-tab-group>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <div *ngIf=\"auth.user$ | async as user; else login\">\r\n        <a mat-list-item (click)=\"goHome()\">Home</a>\r\n        <a mat-list-item (click)=\"goDashboard()\">Dashboard</a>\r\n        <a mat-list-item (click)=\"openNewQuestionDialog()\">New Question</a>\r\n        <hr>\r\n        <a mat-list-item (click)=\"auth.signOut()\">Sign Out</a>\r\n      </div>\r\n      <ng-template #login>\r\n        <a mat-list-item (click)=\"openLoginDialog()\">Login</a>\r\n      </ng-template>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <span class=\"gap\">Open Forum</span>\r\n      <span class=\"filler\"></span>\r\n      <div *ngIf=\" auth.user$ | async as user; else name\">\r\n        <span style=\"margin: auto;\">\r\n          {{user.displayName}}\r\n          <i class=\"material-icons \" style=\"margin: auto;\">account_circle</i>\r\n        </span>\r\n      </div>\r\n      <ng-template #name></ng-template>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n\r\n    <div *ngIf=\"auth.dashOpen && auth.user$; else home\">\r\n      <app-user-dash></app-user-dash>\r\n    </div>\r\n    <ng-template #home>\r\n      <app-trending></app-trending>\r\n    </ng-template>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/new-question.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/new-question.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>New Question</h2>\r\n<form [formGroup]=\"this.form\" class=\"normal-form\">\r\n    <!-- <input type=\"hidden\" formControlName=\"$key\"> -->\r\n    <mat-form-field style=\"width: 60%\">\r\n        <input formControlName=\"title\" [(ngModel)]=\"title\" matInput placeholder=\"Question Title\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field style=\"width: 90%;\">\r\n        <textarea formControlName=\"body\" [(ngModel)]=\"body\" matInput placeholder=\"Question Body\"></textarea>\r\n    </mat-form-field>\r\n    <br>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\">Post</button>\r\n    <br>\r\n\r\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trending/error.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/trending/error.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.user$ | async; else login\">\r\n    <h1 style=\"color: red;\"> Oops Something went wrong try again later</h1>\r\n</ng-container>\r\n\r\n<ng-template #login>\r\n    <h1 style=\"color: red;\">You must login to vote/post</h1>\r\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trending/trending.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/trending/trending.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n    <mat-accordion class=\"example-headers-align\">\r\n        <mat-expansion-panel\r\n            *ngFor=\"let question of answerService.questions$ | async as questions; let i = index; last as isLast; first as isFirst\"\r\n            [expanded]=\"step === i\" (opened)=\"setStep(i)\" hideToggle>\r\n            <mat-expansion-panel-header class=\"right-aligned-header\" [ngStyle]=\"{'background-color':'lightgrey'}\">\r\n                <mat-panel-title>\r\n                    <strong>{{question.title}}</strong>\r\n\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    <span>{{question.author}}</span>\r\n\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <hr>\r\n            <p>{{question.body}}</p>\r\n            <hr>\r\n            <mat-action-row>\r\n\r\n                <ng-container *ngIf=\"didntPost(question); else alreadyPosted\">\r\n                    <h4 style=\"margin: 2%;\">Answer </h4>\r\n                    <form [formGroup]=\"this.form\" class=\"normal-form\" style=\"width: 100%\">\r\n                        <mat-form-field style=\"width: 90%\">\r\n                            <input formControlName=\"answer\" [(ngModel)]=\"answer\" matInput placeholder=\"Answer\">\r\n                        </mat-form-field>\r\n                        <br>\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"postAnswer(question)\"\r\n                            style=\"margin: 0; width: 20%;\">Post</button>\r\n                    </form>\r\n                </ng-container>\r\n                <ng-template #alreadyPosted>\r\n                    <p>You already posted an answer</p>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"isFirst && !isLast\">\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"isLast && !isFirst\">\r\n                    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!isFirst && !isLast\">\r\n                    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                </ng-container>\r\n\r\n\r\n            </mat-action-row>\r\n            <mat-list role=\"list\">\r\n                <mat-list-item role=\"listitem\" *ngFor=\"let answer of question.answers\">\r\n                    <mat-divider></mat-divider>\r\n                    <h3 matLine>{{answer.answer}}</h3>\r\n                    <p matLine>\r\n                        Posted by: {{answer.author}}\r\n                    </p>\r\n                    <p matLine>\r\n                        <ng-container *ngIf=\"voteDown(answer) && !voteUp(answer)\">\r\n                            <button mat-button style=\"margin: 2px; float:right\" (click)=\"downvote(answer)\">\r\n                                {{answer.downvote}}\r\n                                <mat-icon mat-list-icon [ngStyle]=\"{'color':'orange'}\">arrow_downward</mat-icon>\r\n                            </button>\r\n                            <button mat-button style=\"margin: 2px; float: right;\" (click)=\"upvote(answer)\">\r\n                                {{answer.upvote}}\r\n                                <mat-icon mat-list-icon>\r\n                                    arrow_upward</mat-icon>\r\n                                <ng-template #noVote>\r\n                                    <mat-icon mat-list-icon>arrow_upward</mat-icon>\r\n                                </ng-template>\r\n                            </button>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"voteUp(answer) && !voteDown(answer)\">\r\n                            <button mat-button style=\"margin: 2px; float:right\" (click)=\"downvote(answer)\">\r\n                                {{answer.downvote}}\r\n                                <mat-icon mat-list-icon>arrow_downward</mat-icon>\r\n                            </button>\r\n                            <button mat-button style=\"margin: 2px; float: right;\" (click)=\"upvote(answer)\">\r\n                                {{answer.upvote}}\r\n                                <mat-icon mat-list-icon [ngStyle]=\"{'color':'orange'}\">\r\n                                    arrow_upward</mat-icon>\r\n\r\n                            </button>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"!voteUp(answer) && !voteDown(answer)\">\r\n                            <button mat-button style=\"margin: 2px; float:right\" (click)=\"downvote(answer)\">\r\n                                {{answer.downvote}}\r\n                                <mat-icon mat-list-icon>arrow_downward</mat-icon>\r\n                            </button>\r\n                            <button mat-button style=\"margin: 2px; float: right;\" (click)=\"upvote(answer)\">\r\n                                {{answer.upvote}}\r\n                                <mat-icon mat-list-icon>\r\n                                    arrow_upward</mat-icon>\r\n\r\n                            </button>\r\n                        </ng-container>\r\n\r\n                    </p>\r\n                </mat-list-item>\r\n            </mat-list>\r\n        </mat-expansion-panel>\r\n    </mat-accordion>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/edit-profile.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/edit-profile.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"auth.user$ | async as user\">\r\n    <!-- <form [formGroup]=\"this.form\" class=\"normal-form\" style=\"width: 100%\">\r\n        <mat-form-field style=\"width: 50%\">\r\n            <input formControlName=\"displayName\" [(ngModel)]=\"displayName\" matInput placeholder=\"Username\"\r\n                value=\"{{user.displayName}}\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field style=\"width: 50%\">\r\n            <input formControlName=\"firstName\" [(ngModel)]=\"firstName\" matInput placeholder=\"First Name\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field style=\"width: 50%\">\r\n            <input formControlName=\"title\" [(ngModel)]=\"title\" matInput placeholder=\"Question Title\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field style=\"width: 50%\">\r\n            <input formControlName=\"title\" [(ngModel)]=\"title\" matInput placeholder=\"Question Title\">\r\n        </mat-form-field>\r\n        <br>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"postAnswer(question)\"\r\n            style=\"margin: 0; width: 20%;\">Post</button>\r\n    </form> -->\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/edit.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/edit.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <pre>\r\n        {{fromPage | json}}\r\n</pre> -->\r\n<h2>Edit Question</h2>\r\n<form [formGroup]=\"this.form\" class=\"normal-form\">\r\n    <!-- <input type=\"hidden\" formControlName=\"$key\"> -->\r\n    <mat-form-field style=\"width: 60%\">\r\n        <input formControlName=\"title\" [(ngModel)]=\"title\" matInput placeholder=\"Question Title\"\r\n            value=\"{{fromPage.title}}\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field style=\"width: 90%;\">\r\n        <textarea formControlName=\"body\" [(ngModel)]=\"body\" matInput placeholder=\"Question Body\"\r\n            value=\"{{fromPage.body}}\"></textarea>\r\n    </mat-form-field>\r\n    <br>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\">Submit</button>\r\n    <br>\r\n\r\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/user-dash.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/user-dash.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"auth.user$ | async as user\">\r\n    <mat-grid-list style=\"background: white;\" cols=\"9\" rowHeight=\"1.5:1\">\r\n        <mat-grid-tile colspan=\"1\">\r\n            <h1>{{user.displayName}}</h1>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile></mat-grid-tile>\r\n        <mat-grid-tile></mat-grid-tile>\r\n        <mat-grid-tile></mat-grid-tile>\r\n        <mat-grid-tile></mat-grid-tile>\r\n        <mat-grid-tile></mat-grid-tile>\r\n        <mat-grid-tile></mat-grid-tile>\r\n        <mat-grid-tile colspan=\"2\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"openEditProfile(dash.user$)\">Edit Profile</button>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n</div>\r\n<mat-list role=\"list\">\r\n    <mat-list-item role=\"listitem\" *ngFor=\"let question of dash.questions$ | async\">\r\n        <button mat-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon mat-list-icon>reorder</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"openEditDialog(question)\">Edit</button>\r\n            <button mat-menu-item (click)=\"deleteQuestion(question.id)\">Delete</button>\r\n            <button mat-menu-item (click)=\"viewMore(question)\">More</button>\r\n        </mat-menu>\r\n\r\n        <mat-icon mat-list-icon>question_answer</mat-icon>\r\n        <h4 mat-line>{{question.title}}</h4>\r\n        <p mat-line>{{question.body}}</p>\r\n    </mat-list-item>\r\n</mat-list>\r\n\r\n<ng-template #main>\r\n    <app-trending></app-trending>\r\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-dash/user-dash.component */ "./src/app/components/user-dash/user-dash.component.ts");
            /* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
            var routes = [
                { path: 'user-dash', component: _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_3__["UserDashComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".right-aligned-header > .mat-content {\r\n  justify-content: space-between;\r\n}\r\n\r\n.mat-content > mat-panel-title,\r\n.mat-content > mat-panel-description {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LWFsaWduZWQtaGVhZGVyID4gLm1hdC1jb250ZW50IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tYXQtY29udGVudCA+IG1hdC1wYW5lbC10aXRsZSxcclxuLm1hdC1jb250ZW50ID4gbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'open-forum';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
            /* harmony import */ var _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login-register/login-register.component */ "./src/app/components/login-register/login-register.component.ts");
            /* harmony import */ var _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-dash/user-dash.component */ "./src/app/components/user-dash/user-dash.component.ts");
            /* harmony import */ var _components_trending_trending_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/trending/trending.component */ "./src/app/components/trending/trending.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            //Components
            //Material
            //Firebase
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegisterComponent"],
                        _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_8__["UserDashComponent"],
                        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NewQuestionDialog"],
                        _components_trending_trending_component__WEBPACK_IMPORTED_MODULE_9__["TrendingComponent"],
                        _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_8__["EditDialog"],
                        _components_trending_trending_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                        _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_8__["EditProfile"],
                        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["LoginDialog"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].firebaseConfig),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestoreModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__["AngularFireAuthModule"],
                        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__["AngularFireStorageModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__["TextFieldModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"]
                    ],
                    providers: [
                        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"], useValue: {} },
                        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"], useValue: {} }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    entryComponents: [_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NewQuestionDialog"], _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_8__["EditDialog"], _components_trending_trending_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_8__["EditProfile"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["LoginDialog"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/login-register/login-register.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/login-register/login-register.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEVBQTBFO0FBQzVFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/login-register/login-register.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/login-register/login-register.component.ts ***!
          \***********************************************************************/
        /*! exports provided: LoginRegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function () { return LoginRegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            var LoginRegisterComponent = /** @class */ (function () {
                function LoginRegisterComponent(auth) {
                    this.auth = auth;
                }
                LoginRegisterComponent.prototype.ngOnInit = function () {
                };
                return LoginRegisterComponent;
            }());
            LoginRegisterComponent.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            LoginRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-register/login-register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-register.component.css */ "./src/app/components/login-register/login-register.component.css")).default]
                })
            ], LoginRegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/nav/nav.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/components/nav/nav.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.filler {\n  flex: 1 1 auto;\n}\n\n.gap {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5maWxsZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5nYXAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/nav/nav.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/components/nav/nav.component.ts ***!
          \*************************************************/
        /*! exports provided: NavComponent, LoginDialog, NewQuestionDialog */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialog", function () { return LoginDialog; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuestionDialog", function () { return NewQuestionDialog; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/question.service */ "./src/app/services/question.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var NavComponent = /** @class */ (function () {
                function NavComponent(breakpointObserver, auth, questionService, dialog) {
                    this.breakpointObserver = breakpointObserver;
                    this.auth = auth;
                    this.questionService = questionService;
                    this.dialog = dialog;
                    this.questionListUser = [];
                    this.userData = {
                        uid: "",
                        email: "",
                        displayName: ""
                    };
                    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                    if (this.auth.user$) {
                        this.userData = this.auth.user;
                        // this.auth.user$.subscribe(user => {
                        //   this.userData.uid = user.uid;
                        //   this.userData.email = user.email;
                        //   this.userData.displayName = user.displayName;
                        // })
                    }
                }
                NavComponent.prototype.ngOnInit = function () {
                };
                NavComponent.prototype.openNewQuestionDialog = function () {
                    var dialogRef = this.dialog.open(NewQuestionDialog, { width: "50%" });
                };
                NavComponent.prototype.goHome = function () {
                    this.auth.dashOpen = false;
                    this.auth.loginOpen = false;
                };
                NavComponent.prototype.goDashboard = function () {
                    this.auth.dashOpen = true;
                    this.auth.loginOpen = false;
                    console.log(this.auth.dashOpen);
                };
                NavComponent.prototype.openLoginDialog = function () {
                    var dialogRef = this.dialog.open(LoginDialog, { width: "50%" });
                };
                return NavComponent;
            }());
            NavComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")).default]
                })
            ], NavComponent);
            var LoginDialog = /** @class */ (function () {
                function LoginDialog(auth, dialogRef) {
                    this.auth = auth;
                    this.dialogRef = dialogRef;
                }
                LoginDialog.prototype.ngOnInit = function () { };
                LoginDialog.prototype.gsignIn = function () {
                    this.auth.googleSignin();
                    this.dialogRef.close();
                };
                return LoginDialog;
            }());
            LoginDialog.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }
            ]; };
            LoginDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/login.html")).default
                })
            ], LoginDialog);
            var NewQuestionDialog = /** @class */ (function () {
                function NewQuestionDialog(dialogRef, auth, questionService) {
                    this.dialogRef = dialogRef;
                    this.auth = auth;
                    this.questionService = questionService;
                    this.userData = {
                        uid: "",
                        email: "",
                        displayName: ""
                    };
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                        body: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                    });
                }
                NewQuestionDialog.prototype.ngOnInit = function () {
                    var _this = this;
                    this.auth.user$.subscribe(function (user) {
                        _this.userData.displayName = user.displayName;
                        _this.userData.uid = user.uid;
                        _this.userData.email = user.email;
                    });
                };
                NewQuestionDialog.prototype.initializeFormGroup = function () {
                    this.form.setValue({
                        title: '',
                        body: '',
                    });
                };
                NewQuestionDialog.prototype.setQuestionData = function () {
                    this.newQuestion = this.questionService.newQuestionTemplate(this.newQuestion);
                    this.newQuestion.author = this.userData.displayName;
                    this.newQuestion.userId = this.userData.uid;
                    this.newQuestion.time = String(Date.now());
                    this.newQuestion.title = this.form.controls.title.value;
                    this.newQuestion.body = this.form.controls.body.value;
                };
                NewQuestionDialog.prototype.onSubmit = function () {
                    this.setQuestionData();
                    this.questionService.create_NewQuestion(this.newQuestion);
                    this.dialogRef.close();
                };
                return NewQuestionDialog;
            }());
            NewQuestionDialog.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"] }
            ]; };
            NewQuestionDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'new-question',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-question.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/new-question.html")).default
                })
            ], NewQuestionDialog);
            /***/ 
        }),
        /***/ "./src/app/components/trending/trending.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/trending/trending.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlbmRpbmcvdHJlbmRpbmcuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/trending/trending.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/trending/trending.component.ts ***!
          \***********************************************************/
        /*! exports provided: TrendingComponent, ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function () { return TrendingComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_trending_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/trending.service */ "./src/app/services/trending.service.ts");
            /* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dashboard.service */ "./src/app/services/dashboard.service.ts");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/answer.service */ "./src/app/services/answer.service.ts");
            var TrendingComponent = /** @class */ (function () {
                function TrendingComponent(trending, dash, auth, answerService, dialog) {
                    this.trending = trending;
                    this.dash = dash;
                    this.auth = auth;
                    this.answerService = answerService;
                    this.dialog = dialog;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                        answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                    });
                    this.step = 0;
                    if (auth.user$) {
                        this.userId = auth.user.uid;
                        this.displayName = auth.user.displayName;
                        console.log(this.userId);
                    }
                    // this.user$ = auth.getUserData().subscribe(user => {
                    //   this.userId = user.uid;
                    //   this.displayName = user.displayName;
                    //   console.log(this.displayName)
                    // })
                }
                TrendingComponent.prototype.ngOnInit = function () {
                    // console.log(this.questions$);
                };
                TrendingComponent.prototype.postAnswer = function (question) {
                    if (this.form.controls.answer.touched && !this.form.controls.answer.pristine) {
                        this.newAnswer = this.answerService.newAnswerTemplate(question);
                        this.newAnswer.answer = this.form.value.answer;
                        this.newAnswer.author = this.displayName;
                        this.newAnswer.upvotedUsers = [];
                        this.newAnswer.downvotedUsers = [];
                        this.trending.loginError = false;
                        this.answerService.create_NewAnswer(this.newAnswer);
                    }
                    else if (!this.auth.signedIn) {
                        this.trending.loginError = true;
                        console.log("sneaky test");
                        var dialogRef = this.dialog.open(ErrorComponent, { width: "20%" });
                    }
                    else {
                        var dialogRef = this.dialog.open(ErrorComponent, { width: "20%" });
                    }
                };
                TrendingComponent.prototype.upvote = function (answer) {
                    var _this = this;
                    var upAnswer = this.answerService.voteAnswerTemplate(answer);
                    var containsUp = answer.upvotedUsers.some(function (user) { return user === _this.userId; });
                    var containsDown = answer.downvotedUsers.some(function (user) { return user === _this.userId; });
                    if (this.auth.signedIn) {
                        console.log("sneakier test");
                        if (!containsUp && !containsDown && (upAnswer.score <= 100 && upAnswer.score >= -100)) {
                            answer.upvotedUsers.push(this.userId);
                            upAnswer.upvote += 1;
                            upAnswer.score = (upAnswer.upvote - upAnswer.downvote);
                            this.answerService.edit_answer(upAnswer);
                        }
                        else if (!containsUp && containsDown && (upAnswer.score <= 100 && upAnswer.score >= -100)) {
                            var i = answer.downvotedUsers.indexOf(this.userId);
                            answer.downvotedUsers.splice(i, 1);
                            answer.upvotedUsers.push(this.userId);
                            upAnswer.upvote += 1;
                            upAnswer.downvote -= 1;
                            upAnswer.score = (upAnswer.upvote - upAnswer.downvote);
                            this.answerService.edit_answer(upAnswer);
                        }
                        else
                            console.log("already voted up");
                    }
                    else {
                        var dialogRef = this.dialog.open(ErrorComponent, { width: "50%" });
                    }
                };
                TrendingComponent.prototype.downvote = function (answer) {
                    var _this = this;
                    var downAnswer = this.answerService.voteAnswerTemplate(answer);
                    var containsUp = answer.upvotedUsers.some(function (user) { return user === _this.userId; });
                    var containsDown = answer.downvotedUsers.some(function (user) { return user === _this.userId; });
                    if (this.auth.signedIn) {
                        if (!containsUp && !containsDown && (downAnswer.score <= 100 && downAnswer.score >= -100)) {
                            answer.downvotedUsers.push(this.userId);
                            downAnswer.downvote += 1;
                            downAnswer.score = (downAnswer.upvote - downAnswer.downvote);
                            this.answerService.edit_answer(downAnswer);
                        }
                        else if (containsUp && !containsDown && (downAnswer.score <= 100 && downAnswer.score >= -100)) {
                            var i = answer.upvotedUsers.indexOf(this.userId);
                            answer.upvotedUsers.splice(i, 1);
                            answer.downvotedUsers.push(this.userId);
                            downAnswer.upvote -= 1;
                            downAnswer.downvote += 1;
                            downAnswer.score = (downAnswer.upvote - downAnswer.downvote);
                            this.answerService.edit_answer(downAnswer);
                        }
                        else
                            console.log("already voted down");
                    }
                    else {
                        var dialogRef = this.dialog.open(ErrorComponent, { width: "50%" });
                    }
                };
                TrendingComponent.prototype.setStep = function (index) {
                    this.step = index;
                };
                TrendingComponent.prototype.nextStep = function () {
                    this.step++;
                };
                TrendingComponent.prototype.prevStep = function () {
                    this.step--;
                };
                TrendingComponent.prototype.didntPost = function (question) {
                    var _this = this;
                    var found = question.answers.some(function (answer) { return answer.author === _this.displayName; });
                    if (!found)
                        return true;
                    else
                        return false;
                };
                TrendingComponent.prototype.voteUp = function (answer) {
                    var _this = this;
                    var found = answer.upvotedUsers.some(function (uid) { return uid === _this.userId; });
                    if (found)
                        return true;
                    else
                        return false;
                };
                TrendingComponent.prototype.voteDown = function (answer) {
                    var _this = this;
                    var found = answer.downvotedUsers.some(function (uid) { return uid === _this.userId; });
                    if (found)
                        return true;
                    else
                        return false;
                };
                return TrendingComponent;
            }());
            TrendingComponent.ctorParameters = function () { return [
                { type: src_app_services_trending_service__WEBPACK_IMPORTED_MODULE_2__["TrendingService"] },
                { type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] },
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_7__["AnswerService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            TrendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trending',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trending.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trending/trending.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trending.component.css */ "./src/app/components/trending/trending.component.css")).default]
                })
            ], TrendingComponent);
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent(auth) {
                    this.auth = auth;
                }
                return ErrorComponent;
            }());
            ErrorComponent.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trending/error.html")).default
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user-dash/user-dash.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/user-dash/user-dash.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1kYXNoL3VzZXItZGFzaC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/user-dash/user-dash.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/user-dash/user-dash.component.ts ***!
          \*************************************************************/
        /*! exports provided: UserDashComponent, EditProfile, EditDialog */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashComponent", function () { return UserDashComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfile", function () { return EditProfile; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialog", function () { return EditDialog; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dashboard.service */ "./src/app/services/dashboard.service.ts");
            /* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/question.service */ "./src/app/services/question.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var UserDashComponent = /** @class */ (function () {
                function UserDashComponent(auth, dash, questionService, dialog, data) {
                    this.auth = auth;
                    this.dash = dash;
                    this.questionService = questionService;
                    this.dialog = dialog;
                    this.data = data;
                    this.user = {
                        uid: "",
                        email: "",
                        displayName: ""
                    };
                }
                UserDashComponent.prototype.ngOnInit = function () {
                    this.questions = this.dash.getQuestionsList(this.auth.user);
                };
                UserDashComponent.prototype.deleteQuestion = function (questionId) {
                    console.log(questionId);
                    this.dash.delete_question(questionId);
                };
                UserDashComponent.prototype.openEditDialog = function (question) {
                    var _this = this;
                    var dialogRef = this.dialog.open(EditDialog, {
                        width: "90%",
                        data: { questionData: question }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed', result);
                        _this.dialogValue = result.data;
                    });
                };
                UserDashComponent.prototype.openEditProfile = function () {
                    var dialogRef = this.dialog.open(EditProfile, {
                        width: "70%",
                    });
                };
                return UserDashComponent;
            }());
            UserDashComponent.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] },
                { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
            ]; };
            UserDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-dash',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-dash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/user-dash.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-dash.component.css */ "./src/app/components/user-dash/user-dash.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
            ], UserDashComponent);
            var EditProfile = /** @class */ (function () {
                function EditProfile(auth) {
                    this.auth = auth;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                        displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                        dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                    });
                }
                EditProfile.prototype.ngOnInit = function () { };
                return EditProfile;
            }());
            EditProfile.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            EditProfile = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'edit-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/edit-profile.html")).default
                })
            ], EditProfile);
            var EditDialog = /** @class */ (function () {
                function EditDialog(dialogRef, data, dash) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.dash = dash;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                        body: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                    });
                    this.questionId = data.questionData.id;
                    this.fromPage = {
                        uid: data.questionData.uid,
                        title: data.questionData.title,
                        body: data.questionData.body,
                        qid: data.questionData.qid,
                        author: data.questionData.author,
                        time: data.questionData.time,
                        userId: data.questionData.userId,
                        answers: data.questionData.answers
                    };
                    console.log(this.fromPage);
                }
                EditDialog.prototype.ngOnInit = function () { };
                EditDialog.prototype.setQuestionData = function () {
                    console.log(this.form);
                    if (this.form.controls.title.touched && !this.form.controls.title.pristine) {
                        this.fromPage.title = this.form.value.title;
                    }
                    if (this.form.controls.body.touched && !this.form.controls.body.pristine) {
                        this.fromPage.body = this.form.value.body;
                    }
                };
                EditDialog.prototype.onSubmit = function () {
                    this.setQuestionData();
                    console.log(this.fromPage);
                    this.dash.edit_question(this.questionId, this.fromPage);
                    this.dialogRef.close();
                };
                return EditDialog;
            }());
            EditDialog.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] }
            ]; };
            EditDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'edit-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-dash/edit.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
            ], EditDialog);
            /***/ 
        }),
        /***/ "./src/app/services/answer.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/answer.service.ts ***!
          \********************************************/
        /*! exports provided: AnswerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function () { return AnswerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _trending_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trending.service */ "./src/app/services/trending.service.ts");
            /* harmony import */ var _collectionJoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collectionJoin */ "./src/app/services/collectionJoin.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AnswerService = /** @class */ (function () {
                function AnswerService(db, trending) {
                    // this.getAnswersList();
                    this.db = db;
                    this.trending = trending;
                    this.questions$ = this.db
                        .collection('questions')
                        .valueChanges({ idField: 'id' })
                        .pipe(Object(_collectionJoin__WEBPACK_IMPORTED_MODULE_4__["leftJoin"])(this.db, 'qid', 'answers', 100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
                }
                AnswerService.prototype.create_NewAnswer = function (record) {
                    return this.db.collection("answers").doc(record.aid).set(record);
                };
                AnswerService.prototype.edit_answer = function (record) {
                    return this.db.collection("answers").doc(record.aid).update(record);
                };
                AnswerService.prototype.delete_answer = function (record) {
                    return this.db.collection("answers").doc(record.id).delete();
                };
                AnswerService.prototype.newAnswerTemplate = function (question) {
                    var data = {
                        aid: this.db.createId(),
                        qid: question.qid,
                        answer: '',
                        author: '',
                        upvote: 0,
                        downvote: 0,
                        upvotedUsers: [],
                        downvotedUsers: [],
                        score: 0
                    };
                    return data;
                };
                AnswerService.prototype.voteAnswerTemplate = function (answer) {
                    var data = {
                        aid: answer.aid,
                        qid: answer.qid,
                        answer: answer.answer,
                        author: answer.author,
                        upvote: answer.upvote,
                        downvote: answer.downvote,
                        upvotedUsers: answer.upvotedUsers,
                        downvotedUsers: answer.downvotedUsers,
                        score: answer.score
                    };
                    return data;
                };
                return AnswerService;
            }());
            AnswerService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
                { type: _trending_service__WEBPACK_IMPORTED_MODULE_3__["TrendingService"] }
            ]; };
            AnswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AnswerService);
            /***/ 
        }),
        /***/ "./src/app/services/auth.guard.ts": 
        /*!****************************************!*\
          !*** ./src/app/services/auth.guard.ts ***!
          \****************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var _this = this;
                    return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (loggedIn) {
                        if (!loggedIn) {
                            console.log('access denied');
                            _this.router.navigate(['/login']);
                        }
                    }));
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthService = /** @class */ (function () {
                function AuthService(afAuth, afs, router) {
                    var _this = this;
                    this.afAuth = afAuth;
                    this.afs = afs;
                    this.router = router;
                    this.dashOpen = false;
                    this.loginOpen = false;
                    this.signedIn = false;
                    this.user = {
                        uid: "",
                        email: "",
                        displayName: ""
                    };
                    this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
                        if (user) {
                            _this.signedIn = true;
                            _this.user$.subscribe(function (user) {
                                _this.user.displayName = user.displayName;
                                _this.user.uid = user.uid;
                                _this.user.email = user.email;
                            });
                            return _this.afs.doc("users/" + user.uid).valueChanges();
                        }
                        else {
                            _this.signedIn = false;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
                        }
                    }));
                }
                AuthService.prototype.sendUserData = function (user) {
                    return this.user;
                };
                AuthService.prototype.login = function (email, password) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                                case 1:
                                    result = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthService.prototype.register = function (email, password) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                                case 1:
                                    result = _a.sent();
                                    this.sendEmailVerification();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthService.prototype.sendEmailVerification = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.afAuth.auth.currentUser.sendEmailVerification()];
                                case 1:
                                    _a.sent();
                                    this.router.navigate(['admin/verify-email']);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthService.prototype.sendPasswordResetEmail = function (passwordResetEmail) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                AuthService.prototype.googleSignin = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var provider, credential;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                                    return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                                case 1:
                                    credential = _a.sent();
                                    return [2 /*return*/, this.updateUserData(credential.user)];
                            }
                        });
                    });
                };
                AuthService.prototype.signOut = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                                case 1:
                                    _a.sent();
                                    this.dashOpen = false;
                                    this.user$ = null;
                                    return [2 /*return*/, this.router.navigate(['/'])];
                            }
                        });
                    });
                };
                AuthService.prototype.updateUserData = function (user) {
                    //sets user data to firestore on login
                    var userRef = this.afs.doc("users/" + user.uid);
                    var data = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    };
                    return userRef.set(data, { merge: true });
                };
                AuthService.prototype.getUserData = function () {
                    return this.afAuth.authState;
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/collectionJoin.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/collectionJoin.ts ***!
          \********************************************/
        /*! exports provided: leftJoin */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftJoin", function () { return leftJoin; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var leftJoin = function (afs, field, collection, limit) {
                if (limit === void 0) { limit = 100; }
                return function (source) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
                    // Operator state
                    var collectionData;
                    // Track total num of joined doc reads
                    var totalJoins = 0;
                    return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (data) {
                        var e_1, _a;
                        // Clear mapping on each emitted val ;
                        // Save the parent data state
                        collectionData = data;
                        var reads$ = [];
                        var _loop_1 = function (doc) {
                            // Push doc read to Array
                            if (doc[field]) {
                                // Perform query on join key, with optional limit
                                var q = function (ref) { return ref.where(field, '==', doc[field]).where("score", ">=", limit * -1).orderBy("score", "desc").limit(limit); };
                                reads$.push(afs.collection(collection, q).valueChanges());
                            }
                            else {
                                reads$.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]));
                            }
                        };
                        try {
                            for (var collectionData_1 = __values(collectionData), collectionData_1_1 = collectionData_1.next(); !collectionData_1_1.done; collectionData_1_1 = collectionData_1.next()) {
                                var doc = collectionData_1_1.value;
                                _loop_1(doc);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (collectionData_1_1 && !collectionData_1_1.done && (_a = collectionData_1.return)) _a.call(collectionData_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(reads$);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (joins) {
                        return collectionData.map(function (v, i) {
                            var _a;
                            totalJoins += joins[i].length;
                            return Object.assign({}, v, (_a = {}, _a[collection] = joins[i] || null, _a));
                        });
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (final) {
                        console.log("Queried " + final.length + ", Joined " + totalJoins + " docs");
                        totalJoins = 0;
                    }));
                }); };
            };
            /***/ 
        }),
        /***/ "./src/app/services/dashboard.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/dashboard.service.ts ***!
          \***********************************************/
        /*! exports provided: DashboardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function () { return DashboardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
            var DashboardService = /** @class */ (function () {
                function DashboardService(db, afAuth, auth) {
                    this.db = db;
                    this.afAuth = afAuth;
                    this.auth = auth;
                    this.questionsRef = null;
                    this.cUser = {
                        uid: "",
                        displayName: "",
                        email: ""
                    };
                    console.log(this.auth.user$);
                    if (this.auth.user$) {
                        this.questions$ = this.getQuestionsList(this.auth.user);
                        // this.auth.user$.subscribe(user => {
                        // this.cUser.uid = user.uid;
                        // this.cUser.email = user.email;
                        // this.cUser.displayName = user.displayName;
                        // console.log(this.auth.user)
                        // this.questions$ = this.getQuestionsList(this.auth.user)
                        // })
                    }
                }
                DashboardService.prototype.getQuestionsList = function (user) {
                    // console.log(this.userId)
                    // if (!this.userId) return;
                    this.questionsRef = this.db.collection("questions", function (ref) { return ref.where('userId', '==', user.uid); });
                    this.questions$ = this.questionsRef.valueChanges({ idField: 'id' });
                    this.questions$.subscribe(function (questions) {
                        console.log(questions);
                    });
                    return this.questions$;
                };
                DashboardService.prototype.createQuestion = function (question) {
                    this.db.collection("questions").add(question);
                };
                DashboardService.prototype.delete_question = function (record_id) {
                    this.db.doc('questions/' + record_id).delete();
                };
                DashboardService.prototype.edit_question = function (record_id, question) {
                    this.questionsRef.doc(record_id).update(question);
                };
                return DashboardService;
            }());
            DashboardService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DashboardService);
            /***/ 
        }),
        /***/ "./src/app/services/question.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/question.service.ts ***!
          \**********************************************/
        /*! exports provided: QuestionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function () { return QuestionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/services/dashboard.service.ts");
            var QuestionService = /** @class */ (function () {
                function QuestionService(db, auth, dash) {
                    this.db = db;
                    this.auth = auth;
                    this.dash = dash;
                    this.qRef = this.dash.questionsRef;
                    this.user = this.auth.user$;
                }
                QuestionService.prototype.addQuestion = function (fbQuestion) {
                    this.question.push({
                        title: fbQuestion.title,
                        body: fbQuestion.body,
                        author: fbQuestion.author,
                        time: fbQuestion.time,
                        userId: fbQuestion.userId,
                    });
                };
                QuestionService.prototype.create_NewQuestion = function (record) {
                    return this.db.collection("questions").doc(record.qid).set(record);
                };
                QuestionService.prototype.newQuestionTemplate = function (data) {
                    data = {
                        uid: "",
                        title: "",
                        body: "",
                        qid: this.db.createId(),
                        author: "",
                        time: "",
                        userId: "",
                        answers: []
                    };
                    return data;
                };
                return QuestionService;
            }());
            QuestionService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] }
            ]; };
            QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], QuestionService);
            /***/ 
        }),
        /***/ "./src/app/services/trending.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/trending.service.ts ***!
          \**********************************************/
        /*! exports provided: TrendingService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingService", function () { return TrendingService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var TrendingService = /** @class */ (function () {
                function TrendingService(db) {
                    this.db = db;
                    this.questionsRef = null;
                    this.answerRef = null;
                    this.loginError = false;
                    this.cUser = {
                        uid: "",
                        displayName: "",
                        email: ""
                    };
                }
                TrendingService.prototype.getQuestionsList = function () {
                    this.questionsRef = this.db.collection("questions");
                    this.questions$ = this.questionsRef.valueChanges({ idField: 'id' });
                    return this.questions$;
                };
                TrendingService.prototype.edit_question = function (record_id, question) {
                    this.questionsRef.doc(record_id).update(question);
                };
                return TrendingService;
            }());
            TrendingService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            TrendingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TrendingService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebaseConfig: {
                    apiKey: "AIzaSyAa2AEo621Ur_nMMyg-uJDOwewRzgQLVnk",
                    authDomain: "forum-app-1ee4f.firebaseapp.com",
                    databaseURL: "https://forum-app-1ee4f.firebaseio.com",
                    projectId: "forum-app-1ee4f",
                    storageBucket: "forum-app-1ee4f.appspot.com",
                    messagingSenderId: "960259427459",
                    appId: "1:960259427459:web:b73971aea7c74e39461fb6",
                    measurementId: "G-C8DWWFN639"
                }
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\open-forum\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map