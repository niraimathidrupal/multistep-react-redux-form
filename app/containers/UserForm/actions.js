/*
 *
 * UserForm actions
 *
 */

import * as ACTION_TYPES from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }

export const memberinformationall = (memberinfo) => {
  return {
    type: ACTION_TYPES.MEMBER_INFO,
    memberinfo: memberinfo
  };
}
