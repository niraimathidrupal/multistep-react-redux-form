import { fromJS } from 'immutable';
import userFormReducer from '../reducer';

describe('userFormReducer', () => {
  it('returns the initial state', () => {
    expect(userFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
