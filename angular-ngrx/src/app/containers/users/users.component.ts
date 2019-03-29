
import { GetUsersAction } from './../../store/actions/user.action';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../store/states/app.state';
import { userListSelector } from '../../store/selectors/user.selector';
import { Router } from '@angular/router';
import { ActionEventEmitter, TypeAction } from 'src/app/models/event/actionEventEmitter';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersContainerComponent implements OnInit {
  users$ = this.store.pipe(select(userListSelector));

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetUsersAction());
  }

  getActionUser(action: ActionEventEmitter) {
    if (action.typeAction === TypeAction.DETAIL) {
      this.router.navigate(['user', action.data]);
    } else if (action.typeAction === TypeAction.EDIT) {
      this.router.navigate(['edit-user', action.data]);
    } else {

    }
  }
}
