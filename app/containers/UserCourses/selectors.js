import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userCourses state domain
 */

const selectUserCoursesDomain = state =>
  state.get('userCourses', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserCourses
 */

const makeSelectUserCourses = () =>
  createSelector(selectUserCoursesDomain, substate => substate.toJS());

export default makeSelectUserCourses;
export { selectUserCoursesDomain };
