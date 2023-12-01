"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var PostsService = /** @class */ (function () {
    function PostsService(storage, afs, toatr, router) {
        this.storage = storage;
        this.afs = afs;
        this.toatr = toatr;
        this.router = router;
    }
    PostsService.prototype.UploadImage = function (selectedImage, postData) {
        var _this = this;
        var filePath = 'postIMG/${Date.now()}';
        // const filePath = '${Datetime.now()}';
        console.log(filePath);
        this.storage.upload(filePath, selectedImage).then(function () {
            console.log('post image uploaded successfully');
            //this method returns an observable
            _this.storage.ref(filePath).getDownloadURL().subscribe(function (URL) {
                postData.postImgPath = URL;
                console.log(postData);
                _this.SaveData(postData);
            });
        });
    };
    PostsService.prototype.SaveData = function (postData) {
        var _this = this;
        this.afs.collection('posts').add(postData).then(function (docref) {
            _this.toatr.success('Data insert successfully!');
            _this.router.navigate(['/posts']);
        });
    };
    PostsService.prototype.loadData = function () {
        return this.afs.collection('posts').snapshotChanges().pipe(operators_1.map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        }));
        // 4:18:04
    };
    PostsService.prototype.loadOneData = function (id) {
        return this.afs.doc('posts/${id}').valueChanges();
    };
    PostsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
