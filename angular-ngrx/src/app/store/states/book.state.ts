import { Book } from 'src/app/models/book';

// Interface with the book state structure
export interface BookState {
  books: Book[];
  selectedBook: Book;
}

// Initial book state that implements the recently created interface
export const initialBookState: BookState = {
  books: null,
  selectedBook: null
};
