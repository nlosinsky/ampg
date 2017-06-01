import { Action } from '@ngrx/store';
import { User } from '../../entities';
import {
	AUTH_LOGIN_SUCCESS,
	AUTH_SET_USER_INFO,
	AUTH_SET_AUTHORIZED,
	AUTH_LOGIN_FAILURE,
	AUTH_SET_TOKEN
} from '../actions';

export class State {
  constructor(
			public user: User,
			public authorized: boolean,
			public token: string
	) {}
}

const initialState: State = {
  user: {
  	id: null,
    login: null,
    name: {
  		first: null,
      last: null
    }
  },
  authorized: false,
  token: ''
};

export function reducer(state: State = initialState, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, { user: payload, authorized: true });
    case AUTH_SET_USER_INFO:
      return Object.assign({}, state, { user: payload });
    case AUTH_SET_AUTHORIZED:
      return Object.assign({}, state, { authorized: payload });
    case AUTH_LOGIN_FAILURE:
      return Object.assign({}, initialState);
    case AUTH_SET_TOKEN:
      return Object.assign({}, state, { token: payload });
    default:
      return state;
  }
}
