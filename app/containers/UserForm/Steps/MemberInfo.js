import React from "react";
import Button from '../../../components/Button/Button';
import ControlCustom from '../../../components/Control/Control';
import { Row, Col } from 'react-bootstrap';
import { Field, Errors } from 'react-redux-form/lib/immutable';

  class MemberInfo extends React.Component{
    render(){
     
      const requiredInput = this.props.isRequired;
       return (<Row>
         <Col md={6} mdPush={3}>
        <h3>Employee Personal Information</h3>   
      
        <div className="field">
          <label>First name</label>
          <ControlCustom
            modelname = {this.props.fnamemodel}
            placeholder="First Name"
            modelvalue={this.props.fname}
            onChangeModel={this.props.onChangeFname}           
            validators={{
              required: val => val && val.length > 0,
            }}
            messages={{
              required : 'First name is required'
            }}
          />               
        </div>
        <div className="field">
          <p></p>
          <label>Last name</label>
          <ControlCustom
            modelname = {this.props.lnamemodel}
            placeholder="Last Name"
            modelvalue={this.props.lname}
            onChangeModel={this.props.onChangeLname}
            validators={{
              required: val => val && val.length > 0,
            }}
            messages={{
              required : 'Last name is required'
            }}
          />
        </div>
        <div className="field">
          <p></p>
          <label>Email</label>          
          <ControlCustom
            modelname = {this.props.emailmodel}
            placeholder="Email Address"
            modelvalue={this.props.email}
            onChangeModel={this.props.onChangeEmail}
            validators={{
              required: val => val && val.length > 0
            }}      
            messages={{
              required : 'Email is required'
            }}
          />
        </div>    
          <div className="field">
            <p></p>
            <label>Contact Address</label>                      
          </div>   
          <div>
            <p></p>
            <Row>
            <Col md={6}>
              <ControlCustom 
                modelname={this.props.addressmodel1}
                placeholder="Address line1"
                modelvalue={this.props.address1}
                onChangeModel={this.props.onChangeAddress1}
              />
            </Col>
            <Col md={6}>
              <ControlCustom 
                modelname={this.props.addressmodel2}
                placeholder="Address line2"
                modelvalue={this.props.address2}
                onChangeModel={this.props.onChangeAddress2}
              />
            </Col>
            </Row>&nbsp; &nbsp;
                        
            <Row>
            <Col md={3}>
              <ControlCustom 
                modelname={this.props.citymodel}
                placeholder="City"
                modelvalue={this.props.city}
                onChangeModel={this.props.onChangeCity}
              />
            </Col>
            <Col md={3}>
              <ControlCustom 
                modelname={this.props.statemodel}
                placeholder="State"
                modelvalue={this.props.stateval}
                onChangeModel={this.props.onChangeStateVal}
              />
            </Col>
            <Col md={5}>
              <ControlCustom 
                modelname={this.props.zipcodemodel}
                placeholder="Zipcode"
                modelvalue={this.props.zipcode}
                onChangeModel={this.props.onChangeZipCode}
              /> 
            </Col>
            </Row> &nbsp; &nbsp;     
          </div> 
        <div className="button">
          <Button buttonFunc={this.props.onNextClick}>Next</Button>
        </div>
        </Col>
        </Row>
        );
    }
}


export default MemberInfo;