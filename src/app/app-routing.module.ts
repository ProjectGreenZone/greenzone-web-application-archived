import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MapComponent }   from './components/map/map.component';
import { SignInComponent }      from './components/sign-in/sign-in.component';
import { RegisterUserComponent }  from './components/register-user/register-user.component';

import { AuthGuardService }  from './services/auth-guard.service';

 
const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: MapComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: SignInComponent},
  { path: 'register', component: RegisterUserComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}