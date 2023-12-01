"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoriesComponent = void 0;
var core_1 = require("@angular/core");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService) {
        this.categoryService = categoryService;
        this.formStatus = 'Add';
        this.categoryArray = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.loadData().subscribe(function (val) {
            console.log(val);
            _this.categoryArray = val;
        });
    };
    CategoriesComponent.prototype.onSubmit = function (formData) {
        var categoryData = {
            category: formData.value.category
        };
        if (this.formStatus == 'Add') {
            this.categoryService.saveData(categoryData);
            formData.reset();
        }
        else if (this.formStatus == 'Edit') {
            this.categoryService.UpdateData(this.CategoryId, categoryData);
            formData.reset();
            this.formStatus = 'Add';
        }
    };
    CategoriesComponent.prototype.OnEdit = function (Category, id) {
        console.log(Category);
        this.formCategory = Category;
        this.formStatus = 'Edit';
        this.CategoryId = id;
    };
    CategoriesComponent.prototype.OnDelete = function (id) {
        this.categoryService.DeleteData(id);
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.css']
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
