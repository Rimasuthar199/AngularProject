import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { RouteGuardServiceService } from './service/route-guard-service.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: UserRegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardServiceService] },
  { path: 'list', component: ListComponent, canActivate: [RouteGuardServiceService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardServiceService] },
  { path: 'address', component: UserAddressComponent, canActivate: [RouteGuardServiceService] },
  { path: 'contact', component: UserContactComponent, canActivate: [RouteGuardServiceService] },
  { path: 'update', component: UpdateUserComponent, canActivate: [RouteGuardServiceService] },
  { path: 'search', component: SearchComponent, canActivate: [RouteGuardServiceService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
