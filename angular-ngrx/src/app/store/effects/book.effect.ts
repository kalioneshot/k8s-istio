import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, tap, catchError, mapTo, debounceTime } from 'rxjs/operators';
import { AppState } from '../states/app.state';
import { BookService } from '../../services/book.service';
import { GetBookAction, BookActionsEnum, GetBookSuccessAction, GetBooksAction, GetBooksSuccessAction } from '../actions/book.action';
import { booksSelector } from '../selectors/book.selector';
import { Book } from 'src/app/models/book';

@Injectable()
export class BookEffect {

    @Effect()
    getBook$: Observable<Action> = this.actions$.pipe(
        ofType<GetBookAction>(BookActionsEnum.GetBook),
        map(action => action.payload),
        tap(isbn => console.log( `[EFFECT] GetBook : ${isbn}`)),
        withLatestFrom(this.store$.pipe(select(booksSelector))),
        switchMap(([isbn, books]) => {
            const selectedUser = books.filter(book => book.isbn === isbn)[0];
            return of(new GetBookSuccessAction(selectedUser));
        }),
    );

    @Effect()
    getBooks$: Observable<Action> = this.actions$.pipe(
        ofType<GetBooksAction>(BookActionsEnum.GetBooks),
        tap(() => console.log('[EFFECT] GetBooks')),
        switchMap(() => this.bookService$.getBooks()),
        switchMap((books: Book[]) => of(new GetBooksSuccessAction(books)))
    );

    constructor(
        private bookService$: BookService,
        private actions$: Actions,
        private store$: Store<AppState>,
        private router$: Router,
    ) { }
}

