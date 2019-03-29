import { initialUserState, UserState } from '../states/user.state';
import { UserActions, UserActionsEnum } from '../actions/user.action';
import { userSelector } from '../selectors/user.selector';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

// Let’s discuss the implementation:
// 1. The declaration of the reducer receive the state and, in this case, the user actions and returns an IUserState.
// 2. Using a switch statement we generate cases for each possible action type.
// 3. Each case returns a new object that is the result of merging the old state and the new value.
// 4. All reducers have a default result that just returns the state without any changes.
export const userReducer = (state = initialUserState, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionsEnum.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case UserActionsEnum.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        case UserActionsEnum.GetUserByNameSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case UserActionsEnum.CreateUserSuccess: {
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        }
        case UserActionsEnum.UpdateUserSuccess: {
            return {
                ...state,
                users: [...state.users.slice(), action.payload]
            };
        }
        case UserActionsEnum.CREATE_FAILURE: {
            return {
                ...state,
                message: action.payload
            };
        }
        default:
            return state;
    }
};
