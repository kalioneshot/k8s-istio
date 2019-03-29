import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appReducers } from './store/reducers/app.reducer';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { UsersContainerComponent } from './containers/users/users.component';
import { UserContainerComponent } from './containers/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './store/effects/user.effect';
import { ConfigEffect } from './store/effects/config.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UserService } from './services/user.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './data/app.data';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { CreateUpdateContainerComponent } from './containers/create-update-user/create-update-user.component';
import { CreateUpdateUserComponent } from './components/create-update-user/create-update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserContainerComponent,
    UserDetailsComponent,
    NavbarComponent,
    UsersSearchComponent,
    CreateUpdateContainerComponent,
    CreateUpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffect, ConfigEffect]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AppData)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
