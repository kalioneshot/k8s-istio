import { User } from 'src/app/models/user';

// Interface with the user state structure
export interface UserState {
    users: User[];
    selectedUser: User;
    message: string;
}

// Initial user state that implements the recently created interface
export const initialUserState: UserState = {
    users: null,
    selectedUser: null,
    message: null
};
