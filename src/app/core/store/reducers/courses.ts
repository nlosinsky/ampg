import { Action } from '@ngrx/store';
import { CourseItem } from '../../entities';
import { ADD_COURSES } from '../actions';

export class State {
  constructor(
			public courses: CourseItem[],
			public coursesCount: number
	) {}
}

export const initialState: State =  {
  courses: [],
  coursesCount: 0
};

export function reducer(state: State = initialState, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case ADD_COURSES:
      return payload;
    default:
      return state;
  }
}
