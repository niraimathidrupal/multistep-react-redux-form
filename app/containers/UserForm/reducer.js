/*
 *
 * UserForm reducer
 *
 */

import { fromJS } from 'immutable';
import * as ACTION_TYPES from './constants';

export const initialState = fromJS({});

function userFormReducer(state = initialState, action) {

  switch (action.type) {
    case ACTION_TYPES.MEMBER_INFO:
    return [
      ...state,
      Object.assign({}, action.memberinfo)
    ];
    default:
    return state;
  }
}

export default userFormReducer;
