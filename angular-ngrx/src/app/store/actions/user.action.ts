import { Action } from '@ngrx/store';
import { User } from '../../models/user';

// Enum containing the definition for the User actions types
export enum UserActionsEnum {
    GetUsers = '[Users] Get Users',
    GetUsersSuccess = '[Users] Get Users Success',
    GetUser = '[User] Get User',
    GetUserByName = '[User] Get User by name',
    GetUserByNameSuccess = '[Users] Get User by name Success',
    GetUserSuccess = '[User] Get User Success',
    CreateUser = '[User] Create User',
    CreateUserSuccess = '[User] Create User Success',
    UpdateUser = '[User] Update User',
    UpdateUserSuccess = '[User] Update User Success',
    CREATE_FAILURE = '[User] Create Failure User',
    UPDATE_FAILURE = '[User] Update Failure User'
}

export class GetUsersAction implements Action {
    public readonly type = UserActionsEnum.GetUsers;
}

export class GetUsersSuccessAction implements Action {
    public readonly type = UserActionsEnum.GetUsersSuccess;
    // we set the type to one of the enums values and if you need a payload for the action you add it to the constructor of the class
    constructor(public payload: User[]) { }
}

export class GetUserAction implements Action {
    public readonly type = UserActionsEnum.GetUser;
    constructor(public payload: string) { }
}

export class GetUserSuccessAction implements Action {
    public readonly type = UserActionsEnum.GetUserSuccess;
    constructor(public payload: User) { }
}

export class CreateUserAction implements Action {
    public readonly type = UserActionsEnum.CreateUser;
    constructor(public payload: User) { }
}

export class CreateUserSuccessAction implements Action {
    public readonly type = UserActionsEnum.CreateUserSuccess;
    constructor(public payload: User) { }
}

export class UpdateFailureAction implements Action {
    readonly type = UserActionsEnum.UPDATE_FAILURE;
    constructor(public payload: any) { }
}

export class GetUserByNameAction implements Action {
    public readonly type = UserActionsEnum.GetUserByName;
    constructor(public payload: string) { }
}

export class GetUserByNameSuccessAction implements Action {
    public readonly type = UserActionsEnum.GetUserByNameSuccess;
    constructor(public payload: User[]) { }
}

export class CreateFailureAction implements Action {
    readonly type = UserActionsEnum.CREATE_FAILURE;
    constructor(public payload: string) { }
}


export class UpdateUserAction implements Action {
    public readonly type = UserActionsEnum.UpdateUser;
    constructor(public payload: User) { }
}

export class UpdateUserSuccessAction implements Action {
    public readonly type = UserActionsEnum.UpdateUserSuccess;
    constructor(public payload: User) { }
}

export type UserActions =
    GetUsersAction |
    GetUsersSuccessAction |
    GetUserAction |
    GetUserSuccessAction |
    GetUserByNameAction |
    GetUserByNameSuccessAction |
    CreateUserAction |
    CreateUserSuccessAction |
    UpdateUserAction |
    UpdateUserSuccessAction |
    CreateFailureAction |
    UpdateFailureAction;
