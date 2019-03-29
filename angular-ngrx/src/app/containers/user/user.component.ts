import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { AppState } from '../../store/states/app.state';
import { userSelector } from '../../store/selectors/user.selector';
import { GetUserAction } from '../../store/actions/user.action';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserContainerComponent implements OnInit {

  user$ = this.store.pipe(select(userSelector));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new GetUserAction(this.route.snapshot.params.id));
  }
}
