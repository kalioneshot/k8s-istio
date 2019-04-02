import { Action } from '@ngrx/store';
import { Book } from 'src/app/models/book';

// Enum containing the definition for the Book actions types
export enum BookActionsEnum {
  GetBooks = '[Books] Get Books',
  GetBooksSuccess = '[Books] Get Books Success',
  GetBook = '[Book] Get Book',
  GetBookSuccess = '[Book] Get Book Success'
}

export class GetBooksAction implements Action {
  public readonly type = BookActionsEnum.GetBooks;
}

export class GetBooksSuccessAction implements Action {
  public readonly type = BookActionsEnum.GetBooksSuccess;
  constructor(public payload: Book[]) { }
}

export class GetBookAction implements Action {
  public readonly type = BookActionsEnum.GetBook;
  constructor(public payload: string) { }
}

export class GetBookSuccessAction implements Action {
  public readonly type = BookActionsEnum.GetBookSuccess;
  constructor(public payload: Book) { }
}

export type BookActions =
  GetBooksAction |
  GetBooksSuccessAction |
  GetBookAction |
  GetBookSuccessAction;
