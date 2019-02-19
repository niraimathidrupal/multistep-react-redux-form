import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userForm state domain
 */

const selectUserFormDomain = state => state.get('userForm', initialState);

//fetching store data 
const selectMemberFormDomain = state => state.get('memberInfoForm');

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserForm
 */

const makeMemberForm = () =>
  createSelector(selectMemberFormDomain, substate => substate.member.toJS());

const makeSelectUserForm = () =>
  createSelector(selectUserFormDomain, substate => substate.toJS());
 
export { makeMemberForm, makeSelectUserForm, selectUserFormDomain };
