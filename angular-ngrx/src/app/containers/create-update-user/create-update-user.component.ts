import { Component, OnInit } from '@angular/core';
import { GetUserAction } from 'src/app/store/actions/user.action';
import { select, Store } from '@ngrx/store';
import { userSelector } from 'src/app/store/selectors/user.selector';
import { AppState } from 'src/app/store/states/app.state';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.scss']
})
export class CreateUpdateContainerComponent implements OnInit {

  userToModify$ = null;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    // Only this id parameter exist
    if (this.route.snapshot.params.id) {
      this.userToModify$ = this.store.pipe(select(userSelector));
      this.store.dispatch(new GetUserAction(this.route.snapshot.params.id));
    }
  }

}
