import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import {ProductService} from './product.service';
import { CustomerComponent } from './customer/customer.component';
import {HttpClientModule} from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { ActivityComponent } from './activity/activity.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PayrollComponent } from './payroll/payroll.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { LearningComponent } from './learning/learning.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    UserComponent,
    ProductComponent,
    CustomerComponent,
    BookComponent,
    ActivityComponent,
    PayrollComponent,
    HelpdeskComponent,
    LearningComponent,
    ProfileComponent,
    HomeComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
