/**
 *
 * UserCourses
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Link, Route } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserCourses from './selectors';
import reducer from './reducer';
import saga from './saga';
import { ModalExample } from '../ModalExample';
/* eslint-disable react/prefer-stateless-function */
export class UserCourses extends React.PureComponent {
  render() {
    return (
     <div>
       <ul>
         <li>
           <Link to= {{
             pathname: "/user"
           }}>
            User
           </Link>
         </li>
        <li>
          <Link to={{
            pathname: "/courses"
          }}>
            Courses
          </Link>     
         <ModalExample />
        </li>
       </ul>
     </div>
     
    );
  }
}

UserCourses.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userCourses: makeSelectUserCourses(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'userCourses', reducer });
const withSaga = injectSaga({ key: 'userCourses', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(UserCourses);
