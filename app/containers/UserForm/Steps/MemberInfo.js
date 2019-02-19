import React from "react";
import Button from '../../../components/Button/Button';
import ControlCustom from '../../../components/Control/Control';
import { Row, Col } from 'react-bootstrap';
import { Field, Errors } from 'react-redux-form/lib/immutable';

  class MemberInfo extends React.Component{
    render(){
     
      const requiredInput =this.props.isRequired;
       return (<Row>
        <h3>Employee Personal Information</h3>   
      
        <div className="field">
          <label>First name</label>
          <ControlCustom
            modelname = {this.props.fnamemodel}
            placeholder="First Name"
            modelvalue={this.props.fname}
            onChangeModel={this.props.onChangeFname}           
            validators={ { requiredInput } }      
            validateOn ="blur"   
          />    
          <Errors
            model={this.props.fnamemodel}
            show={true}
            messages={{
              requiredInput : 'Please provide first name.'
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
            validators={ requiredInput } 
          />
          <Errors
            wrapper="span"
            show={true}
            model={this.props.lnamemodel}
            messages={{
              requiredInput : 'Please provide last name.'
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
            validators={ requiredInput }
          />
           <Errors
            wrapper="span"
            show={{ touched: true, focus: false }}
            model={this.props.emailmodel}
            messages={{
              isRequired : 'Please provide email address.'
            }}
            />
        </div>    
        <div className="field">
          <p></p>
          <label>Experience</label>
          <ControlCustom 
            modelname= {this.props.passmodel}
            placeholder="2 exp"
            modelvalue={this.props.pass}
            onChangeModel={this.props.onChangePass}
           // validators= { passwordMatch }
          />          
        </div>   
        <div>
          <p></p>
          <label>Doamin skills</label>
          <ControlCustom 
            modelname={this.props.confirmpassmodel}
            placeholder="c, c++, react js, drupal.."
            modelvalue={this.props.confirmpass}
            onChangeModel={this.props.onChangeConfirmPass}
           // validators={ passwordMatch }
          />
          
        </div> 
        <div className="button">
          <p></p>
          <Button buttonFunc={this.props.onNextClick}>Next</Button>
        </div>
        </Row>
        );
    }
}


export default MemberInfo;