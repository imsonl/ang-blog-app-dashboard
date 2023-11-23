"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var PostService = /** @class */ (function () {
    function PostService(afs, toastrservice, storage) {
        this.afs = afs;
        this.toastrservice = toastrservice;
        this.storage = storage;
    }
    PostService.prototype.UploadImage = function (selectedimage) {
        var filepath = 'postIMG/${Datetime.now()}';
    };
    PostService.prototype.saveData = function (data) {
        var _this = this;
        //this query is saving data into Angular Firestore
        this.afs.collection('Categories').add(data).then(function (docref) {
            _this.toastrservice.success('Data insert Successfully!');
        })["catch"](function (err) {
            console.log(err);
        });
    };
    PostService.prototype.loadData = function () {
        return this.afs.collection('Categories').snapshotChanges().pipe(operators_1.map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        }));
        // 4:18:04
    };
    PostService.prototype.UpdateData = function (Id, EditData) {
        var _this = this;
        this.afs.collection('Categories').doc(Id).update(EditData).then(function (docRef) {
            _this.toastrservice.success('Data Updated Successfully!');
        });
    };
    PostService.prototype.DeleteData = function (Id) {
        var _this = this;
        this.afs.collection('Categories').doc(Id)["delete"]().then(function (docRef) {
            _this.toastrservice.success("Data deleted Successfully!");
        });
    };
    PostService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
