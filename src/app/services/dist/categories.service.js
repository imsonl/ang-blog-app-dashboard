"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoriesService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var CategoriesService = /** @class */ (function () {
    function CategoriesService(afs, toastrservice) {
        this.afs = afs;
        this.toastrservice = toastrservice;
    }
    CategoriesService.prototype.saveData = function (data) {
        var _this = this;
        //this query is saving data into Angular Firestore
        this.afs.collection('Categories').add(data).then(function (docref) {
            _this.toastrservice.success('Data insert Successfully!');
        })["catch"](function (err) {
            console.log(err);
        });
    };
    CategoriesService.prototype.loadData = function () {
        return this.afs.collection('Categories').snapshotChanges().pipe(operators_1.map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        }));
        // 4:18:04
    };
    CategoriesService.prototype.UpdateData = function (Id, EditData) {
        var _this = this;
        this.afs.collection('Categories').doc(Id).update(EditData).then(function (docRef) {
            _this.toastrservice.success('Data Updated Successfully!');
        });
        // this.afs.doc('Categories/${Id}').update(EditData).then(docRef =>{
        //     this.toastrservice.success('Data Updated Successfully!');
        // })
    };
    CategoriesService.prototype.DeleteData = function (Id) {
        var _this = this;
        this.afs.collection('Categories').doc(Id)["delete"]().then(function (docRef) {
            _this.toastrservice.success("Data deleted Successfully!");
        });
        // this.afs.doc('Categories/#{Id}').delete().then(docRef => {
        //   this.toastrservice.success("Data deleted Successfully!");
        // })
    };
    CategoriesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CategoriesService);
    return CategoriesService;
}());
exports.CategoriesService = CategoriesService;
