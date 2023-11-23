"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewPostComponent = void 0;
var core_1 = require("@angular/core");
var NewPostComponent = /** @class */ (function () {
    function NewPostComponent() {
    }
    NewPostComponent.prototype.ngOnInIt = function () {
    };
    NewPostComponent.prototype.onTitleChanged = function ($event) {
        // console.log($event.target.value);
        var title = $event.target.value;
        var permalink = title.replace(/\s/g, '-');
    };
    NewPostComponent = __decorate([
        core_1.Component({
            selector: 'app-new-post',
            templateUrl: './new-post.component.html',
            styleUrls: ['./new-post.component.css']
        })
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;
