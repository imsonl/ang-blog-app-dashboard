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
    function NewPostComponent(categoryService, Fb, postService, route) {
        var _this = this;
        this.categoryService = categoryService;
        this.Fb = Fb;
        this.postService = postService;
        this.route = route;
        this.permalink = '';
        this.imgSrc = "./assets/Placeholder-img.png";
        this.formStatus = 'Add';
        this.route.queryParamMap.subscribe(function (val) {
            _this.postService.loadOneData(val).subscribe(function (post) {
                console.log(post);
                // this.post = post;
                // this.postForm = this.Fb.group({
                //   title:[this.post.title, [Validators.required,Validators.minLength(10)]],
                //   permalink:[this.post.permalink,Validators.required],
                //   excerpt:[this.post.excerpt, [Validators.required,Validators.minLength(50)]],
                //   category:[this.post.category],
                //   postImg:[this.post.postImgPath],
                //   content:[this.post.content]
                // });
            });
        });
        this.postForm = this.Fb.group({
            title: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            permalink: ['', forms_1.Validators.required],
            excerpt: ['', [forms_1.Validators.required, forms_1.Validators.minLength(50)]],
            category: [''],
            postImg: [''],
            content: ['']
        });
        // this.categories = [];
    }
    NewPostComponent.prototype.ngOnInIt = function () {
        var _this = this;
        this.categoryService.loadData().subscribe(function (val) {
            console.log(val);
            _this.categories = val;
            //5:28//
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
    NewPostComponent.prototype.onSubmit = function () {
        console.log(this.postForm.value);
        var splited = this.postForm.value.category.split('-');
        console.log(splited);
        var postData = {
            title: this.postForm.value.title,
            permalink: this.postForm.value.permalink,
            category: {
                categoryId: splited[0],
                category: splited[1]
            },
            postImgPath: '',
            excerpt: this.postForm.value.excerpt,
            content: this.postForm.value.content,
            isFeatured: false,
            views: 0,
            status: 'New',
            CreatedAt: new Date()
        };
        this.postService.UploadImage(this.selectedImage, postData);
        this.postForm.reset();
        this.imgSrc = './assets/Placeholder-img.png';
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
