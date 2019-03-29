
import { createSelector } from '@ngrx/store';
import { UserState } from '../states/user.state';
import { AppState } from '../states/app.state';

const userStateSelection = (state: AppState) => state.users;

// Selectors are methods used for obtaining slices of store state.
// @ngrx/store provides a few helper functions for optimizing this selection.
export const userListSelector = createSelector(
    userStateSelection,
    (state: UserState) => state.users
);

export const userSelector = createSelector(
    userStateSelection,
    (state: UserState) => state.selectedUser
);
