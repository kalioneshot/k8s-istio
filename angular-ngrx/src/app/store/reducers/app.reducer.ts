import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../states/app.state';
import { configReducer } from './config.reducer';
import { userReducer } from './user.reducer';

// Here is where we add all the reducers to an app action reducer map.
// We use the action reducer map for added type checking.
// Later we are going to provide this app reducers to the store module.
export const appReducers: ActionReducerMap<AppState, any> = {
  users: userReducer,
  config: configReducer
};
