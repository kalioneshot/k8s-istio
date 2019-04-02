import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appReducers } from './store/reducers/app.reducer';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffect } from './store/effects/config.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BookService } from './services/book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './data/app.data';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksContainerComponent } from './containers/books/books.component';
import { BooksComponent } from './components/books/books.component';
import { BookContainerComponent } from './containers/book/book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookEffect } from './store/effects/book.effect';

@NgModule({
  declarations: [
    AppComponent,
    BooksContainerComponent,
    BooksComponent,
    BookContainerComponent,
    BookDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BookEffect, ConfigEffect]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AppData)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
