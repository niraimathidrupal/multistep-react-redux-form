import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the modalExample state domain
 */

const selectModalExampleDomain = state =>
  state.get('modalExample', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ModalExample
 */

const makeSelectModalExample = () =>
  createSelector(selectModalExampleDomain, substate => substate.toJS());

export default makeSelectModalExample;
export { selectModalExampleDomain };
