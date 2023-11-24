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
var forms_1 = require("@angular/forms");
var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(categoryService, Fb) {
        this.categoryService = categoryService;
        this.Fb = Fb;
        this.permalink = '';
        this.imgSrc = "./assets/Placeholder-img.png";
        this.categories = [];
        this.postForm = this.Fb.group({
            title: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            permalink: ['', forms_1.Validators.required],
            excerpt: ['', [forms_1.Validators.required, forms_1.Validators.minLength(50)]],
            category: ['', forms_1.Validators.required],
            postImg: ['', forms_1.Validators.required],
            contet: ['', forms_1.Validators.required]
        });
    }
    NewPostComponent.prototype.ngOnInIt = function () {
        var _this = this;
        this.categoryService.loadData().subscribe(function (val) {
            console.log(val);
            _this.categories = val;
            //5:28
        });
    };
    Object.defineProperty(NewPostComponent.prototype, "fc", {
        get: function () {
            return this.postForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    NewPostComponent.prototype.onTitleChanged = function ($event) {
        // console.log($event.target.value);
        var title = $event.target.value;
        this.permalink = title.replace(/\s/g, '-');
    };
    NewPostComponent.prototype.showPreview = function ($event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            _this.imgSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL($event === null || $event === void 0 ? void 0 : $event.target.files[0]);
        this.selectedImage = $event === null || $event === void 0 ? void 0 : $event.target.files[0];
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
