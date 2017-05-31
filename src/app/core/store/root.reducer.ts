import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';

import * as coursesReducer from './reducers/courses';

export class AppState {
  constructor(
			public courses: coursesReducer.State
	) {}
}

const reducers = {
  courses: coursesReducer.reducer
};

const reducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);

export function rootReducer(state: any, action: any): AppState {
  return reducer(state, action);
}
