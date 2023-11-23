import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module'; 

 import { FormsModule } from '@angular/forms';

 import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
 import { AngularFireModule } from '@angular/fire/compat';
 import { AngularFirestore } from '@angular/fire/compat/firestore';
 import{ AngularFireStorageModule } from '@angular/fire/compat/storage';

import { environment } from 'src/environments/environment.prod.development';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';


import { ToastrModule } from 'ngx-toastr';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubscriptionFormComponent,
    DashboardComponent,
    CategoriesComponent,
    AllPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaeconfig),
    AngularFirestoreModule,
    FormsModule,
    ToastrModule.forRoot(), 
    BrowserAnimationsModule,
    AngularFireStorageModule
    //    AngularFireModule.initialiszeApp(environment.firebaeconfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
