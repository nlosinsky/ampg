import { combineReducers, ActionReducer, Action } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';

import * as coursesReducer from './reducers/courses';
import * as authReducer from './reducers/auth';

export class AppState {
  constructor(
			public courses: coursesReducer.State,
			public auth: authReducer.State
	) {}
}

const reducers = {
  courses: coursesReducer.reducer,
  auth: authReducer.reducer
};

const reducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);

export function rootReducer(state: AppState, action: Action): AppState {
  return reducer(state, action);
}
