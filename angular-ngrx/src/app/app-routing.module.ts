import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksContainerComponent } from './containers/books/books.component';
import { BookContainerComponent } from './containers/book/book.component';

const routes: Routes = [
  { path: 'books', component: BooksContainerComponent },
  { path: 'book/:isbn', component: BookContainerComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
