import { fromJS } from 'immutable';
import modalExampleReducer from '../reducer';

describe('modalExampleReducer', () => {
  it('returns the initial state', () => {
    expect(modalExampleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
