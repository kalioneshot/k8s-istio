
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { initialBookState, BookState } from '../states/book.state';
import { BookActionsEnum, BookActions } from '../actions/book.action';

// Let’s discuss the implementation:
// 1. The declaration of the reducer receive the state and, in this case, the user actions and returns an BookState.
// 2. Using a switch statement we generate cases for each possible action type.
// 3. Each case returns a new object that is the result of merging the old state and the new value.
// 4. All reducers have a default result that just returns the state without any changes.
export const bookReducer = (state = initialBookState, action: BookActions): BookState => {
  switch (action.type) {
    case BookActionsEnum.GetBooksSuccess: {
      return {
        ...state,
        books: action.payload
      };
    }
    case BookActionsEnum.GetBookSuccess: {
      return {
        ...state,
        selectedBook: action.payload
      };
    }
    default:
      return state;
  }
};
