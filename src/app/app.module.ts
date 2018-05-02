import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { TrackerSettingsComponent } from './components/tracker-settings/tracker-settings.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuardService }  from './services/auth-guard.service';
import { AuthService }      from './services/auth.service';
import { AppService }      from './services/app.service';
import { TrackerService }      from './services/tracker.service';
import { UserService }      from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TrackerSettingsComponent,
    SettingsComponent,
    SignInComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AppService,
    TrackerService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
