/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { combineForms } from 'react-redux-form/lib/immutable';
import { fromJS } from 'immutable';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    ...injectedReducers,    
    memberInfoForm: combineForms({
      member: fromJS({
        memberInfo: fromJS({
          fname: '',
          lname: '',
          email: '',
          address1: '',
          address2: '',
          city:'',
          state:'',
          zipcode: ''
        }),
        jobInfo: fromJS({
          company:'',
          designation: '',
          role: '',
          exp: '',
          skills: ''
        }) 
      })
    }, 'memberInfoForm'),

    forms: combineForms({
      subscribe: fromJS({
        email: '',
      })
     }, 'forms')
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
