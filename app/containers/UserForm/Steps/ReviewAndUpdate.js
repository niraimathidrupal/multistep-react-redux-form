import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Button from '../../../components/Button/Button';

import Redirect from 'react-router-dom';
class ReviewAndUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false
      }
    }
  
    
    setRedirect = () => {
      window.location.assign('/thank-you');
    }
    render() {
      const items = this.props.staticText;
     
        return(
        <Grid>
          <Row>
            <Col md={8} mdPush={2}>
              <h3>Review And Update Your Information</h3>
              <Row className="memberinfo">
              <Col md={6}>        
                <h4>Employee Personal Information</h4>
                <p>First Name: {items.memberInfo.fname}</p>
                <p>Last Name: {items.memberInfo.lname}</p>
                <p>Email: {items.memberInfo.email}</p>
                <p>Address:</p>
                <p>{items.memberInfo.address1}</p>
                <p>{items.memberInfo.address2}</p>
                <p>{items.memberInfo.city}</p>
                <p>{items.memberInfo.state}</p>
                <p>{items.memberInfo.zipcode}</p>
                <Button buttonFunc={this.props.onPersonalEdit}>Edit</Button>
              </Col>
              <Col md={4} mdPush={2}>        
                <h4>Employee Job Details</h4>
                <p>Company name: {items.jobInfo.company}</p>
                <p>Designation: {items.jobInfo.designation}</p>
                <p>Role: {items.jobInfo.role}</p>
                <p>Experience: {items.jobInfo.exp}</p>
                <p>Skills: {items.jobInfo.skills}</p>
                <Button buttonFunc={this.props.onJobProfileEdit}>Edit</Button>
              </Col>
              </Row>
              <Row>
                <p></p>
              </Row>
              <Row>        
                   
              <Col className="button"> 
                <Button buttonFunc={this.props.onPreviousClick}>Previous</Button>&nbsp; &nbsp; &nbsp; &nbsp;              
                <Button buttonFunc={this.setRedirect}>Checkout</Button>
              </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
       );    
    }
  }

  export default  (ReviewAndUpdate);