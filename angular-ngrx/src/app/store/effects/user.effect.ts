import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, tap, catchError, mapTo, debounceTime } from 'rxjs/operators';
import { AppState } from '../states/app.state';
// tslint:disable-next-line:max-line-length
import { GetUsersSuccessAction, UserActionsEnum, GetUserSuccessAction, GetUserAction, GetUsersAction, CreateUserAction, CreateUserSuccessAction, CreateFailureAction, GetUserByNameAction, GetUserByNameSuccessAction, UpdateUserAction, UpdateUserSuccessAction, UpdateFailureAction } from '../actions/user.action';
import { UserService } from '../../services/user.service';
import { userListSelector } from '../selectors/user.selector';
import { User } from 'src/app/models/user';

@Injectable()
export class UserEffect {

    @Effect()
    getUser$: Observable<Action> = this.actions$.pipe(
        ofType<GetUserAction>(UserActionsEnum.GetUser),
        map(action => action.payload),
        tap(id => console.log( `[EFFECT] GetUser : ${id}`)),
        withLatestFrom(this.store$.pipe(select(userListSelector))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === id)[0];
            return of(new GetUserSuccessAction(selectedUser));
        }),
    );

    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType<GetUsersAction>(UserActionsEnum.GetUsers),
        tap(() => console.log('[EFFECT] GetUsers')),
        switchMap(() => this.userService$.getUsers()),
        switchMap((users: User[]) => of(new GetUsersSuccessAction(users)))
    );

    @Effect({ dispatch: false })
    createUser$: Observable<Action> = this.actions$.pipe(
        ofType<CreateUserAction>(UserActionsEnum.CreateUser),
        tap(() => console.log('[EFFECT] CreateUser')),
        map(action => action.payload),
        switchMap((user: User) =>
            this.userService$.createUser(user).pipe(
                map(res => new CreateUserSuccessAction(res)),
                tap(() => { this.router$.navigate(['/users']); }),
                // This catch must be coded here to ensure this effect is non-blocking for the futur call.
                catchError((error) => of(new CreateFailureAction(error)))
            )
        )
    );

    @Effect({ dispatch: false })
    updateUser$: Observable<Action> = this.actions$.pipe(
        ofType<UpdateUserAction>(UserActionsEnum.UpdateUser),
        tap(() => console.log('[EFFECT] UpdateUser')),
        map(action => action.payload),
        switchMap((user: User) =>
            this.userService$.updateUser(user).pipe(
                map(res => new UpdateUserSuccessAction(res)),
                // This catch must be coded here to ensure this effect is non-blocking for the futur call.
                catchError((error) => of(new UpdateFailureAction(error))),
                tap(() => { this.router$.navigate(['/users']); }),
            )
        )
    );

    @Effect()
    searchUserByName$: Observable<Action> = this.actions$.pipe(
        ofType<GetUserByNameAction>(UserActionsEnum.GetUserByName),
        debounceTime(500),
        map(action => action.payload),
        switchMap(nameCriteria => this.userService$.getUsersByName(nameCriteria)),
        switchMap((users: User[]) => of(new GetUserByNameSuccessAction(users)))
    );

    constructor(
        private userService$: UserService,
        private actions$: Actions,
        private store$: Store<AppState>,
        private router$: Router,
    ) { }
}

