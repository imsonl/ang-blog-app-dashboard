import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module'; 

 import { FormsModule } from '@angular/forms';
 import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
 import { AngularFireModule } from '@angular/fire/compat';
 import { AngularFirestore } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment.prod.development';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubscriptionFormComponent,
    DashboardComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   AngularFireModule.initializeApp(environment.firebaeconfig),
  
  AngularFirestoreModule,
 // AngularFirestore,
   FormsModule,
  
    //    AngularFireModule.initializeApp(environment.firebaeconfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
