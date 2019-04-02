import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { ActionEventEmitter, TypeAction } from 'src/app/models/event/actionEventEmitter';
import { booksSelector } from 'src/app/store/selectors/book.selector';
import { GetBooksAction } from 'src/app/store/actions/book.action';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksContainerComponent implements OnInit {

  books$ = this.store.pipe(select(booksSelector));

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetBooksAction());
  }

  getActionBook(action: ActionEventEmitter) {
    if (action.typeAction === TypeAction.DETAIL) {
      this.router.navigate(['book', action.data]);
    }
  }
}
