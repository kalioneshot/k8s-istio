
import { createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { BookState } from '../states/book.state';

const bookStateSelection = (state: AppState) => state.books;

// Selectors are methods used for obtaining slices of store state.
// @ngrx/store provides a few helper functions for optimizing this selection.
export const booksSelector = createSelector(
  bookStateSelection,
  (state: BookState) => state.books
);

export const bookSelector = createSelector(
  bookStateSelection,
  (state: BookState) => state.selectedBook
);
