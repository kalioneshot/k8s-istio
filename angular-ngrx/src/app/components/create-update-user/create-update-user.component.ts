import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { CreateUserAction, GetUserAction, UpdateUserAction } from 'src/app/store/actions/user.action';
import { userSelector } from 'src/app/store/selectors/user.selector';
import { TypeAction } from 'src/app/models/event/actionEventEmitter';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.scss']
})
export class CreateUpdateUserComponent implements OnInit {

  // From container.
  @Input()
  userToModify: User;

  // Model
  model: User;
  buttonInfo: string;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    // Initialize model.
    this.model = new User('', '', '', '');
    if (this.getActionForm() === TypeAction.CREATE) {
      this.buttonInfo = 'CREATE';
    } else {
      this.model = this.userToModify;
      this.buttonInfo = 'EDIT';
    }
  }

  onSubmit() {
    const user = new User(this.model.id, this.model.name, this.model.email, this.model.phone);

    // Dispatch create user action
    if (this.getActionForm() === TypeAction.CREATE) {
      this.store.dispatch(new CreateUserAction(user));
    // Dispatch update user action
    } else {
      this.store.dispatch(new UpdateUserAction(user));
    }

  }

  getActionForm(): TypeAction {
    return this.userToModify ? TypeAction.EDIT : TypeAction.CREATE;
  }
}
