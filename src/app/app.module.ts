import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    UserAddressComponent,
    UserContactComponent,
    UserRegisterComponent,
    UpdateUserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
