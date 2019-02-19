/**
 *
 * UserForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Row } from 'react-bootstrap';
import { Form } from 'react-redux-form/lib/immutable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeMemberForm, makeSelectUserForm } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Steps from './Steps/Steps';

class UserForm extends React.Component {
  
  render() {
   const { memberForm } = this.props;
    //console.log(memberForm);   
    return(   
        <Grid>
          <Form model="memberInfoForm.member" 
          validators={{
            '': {
              required:(val)=> val && val.length>0,
              passwordsMatch: (vals) => vals.pass === vals.confirmpass,
            },
          }}>
            <Row>
              <Steps review={ memberForm }/>  
            </Row>     
          </Form>
        </Grid>
    );
  }  
}

const mapStateToProps = createStructuredSelector({
  userForm: makeSelectUserForm(),
  memberForm: makeMemberForm()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userForm', reducer });
const withSaga = injectSaga({ key: 'userForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserForm);
