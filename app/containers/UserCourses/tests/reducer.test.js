import { fromJS } from 'immutable';
import userCoursesReducer from '../reducer';

describe('userCoursesReducer', () => {
  it('returns the initial state', () => {
    expect(userCoursesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
