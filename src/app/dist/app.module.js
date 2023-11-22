"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import { AppRoutingModule } from './app-routing.module';
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
var firestore_1 = require("@angular/fire/compat/firestore");
var compat_1 = require("@angular/fire/compat");
var environment_prod_development_1 = require("src/environments/environment.prod.development");
var app_component_1 = require("./app.component");
var header_component_1 = require("./layouts/header/header.component");
var footer_component_1 = require("./layouts/footer/footer.component");
var subscription_form_component_1 = require("./subscription-form/subscription-form.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var categories_component_1 = require("./categories/categories.component");
var ngx_toastr_1 = require("ngx-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                subscription_form_component_1.SubscriptionFormComponent,
                dashboard_component_1.DashboardComponent,
                categories_component_1.CategoriesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                compat_1.AngularFireModule.initializeApp(environment_prod_development_1.environment.firebaeconfig),
                firestore_1.AngularFirestoreModule,
                forms_1.FormsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                animations_1.BrowserAnimationsModule
                //    AngularFireModule.initialiszeApp(environment.firebaeconfig),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
