import React from 'react';
import MemberInfo from './MemberInfo';
import MemberJobInfo from './MemberJobInfo';
import ReviewAndUpdate from './ReviewAndUpdate';

class Steps extends React.Component {
    constructor() {
        super();
        this.state = {
          step: 1,
    
          fname: "",
          lname: "",
          email: "",
          pass: "",
          confirmpass: "",
          company: "",
          designation: "",
          role: "",
          redirectToNewPage: false
        };
        this.goToNext = this.goToNext.bind(this);
        this.goToPrevious = this.goToPrevious.bind(this);
        this.goToPersonal = this.goToPersonal.bind(this);
        this.goToJobInfo = this.goToJobInfo.bind(this);
      }
    
      goToNext() {
        const { step } = this.state;
        this.setState({ step: step + 1 });
      }
      goToPrevious() {
        const { step } = this.state;
        this.setState({ step: step - 1 });        
      }
      goToPersonal() {
        const { step } = this.state;
        this.setState({ step: step-2 });  
      }
      goToJobInfo() {
        const { step } = this.state;
        this.setState({ step: step-1 });  
      }
      handleChange(field) {        
        return evt => this.setState({ [field]: evt.target.value, touched: evt.target.value === null || evt.target.value === undefined || evt.target.value === ''? true: false});
      }
    render() {
     
      const maxLength = (len) => (len);
      const isNumber = (val) => !isNaN(Number(val));
        switch (this.state.step) {
          case 1:
            return (
              <MemberInfo
                key="personal"
                //onSubmit={this.goToNext}
                fnamemodel= ".memberInfo.fname"
                lnamemodel=  ".memberInfo.lname"
                emailmodel= ".memberInfo.email"
                passmodel=".memberinfo.pass"
                confirmpassmodel=".memberinfo.confirmpass"
                fname= {this.state.fname}
                lname= {this.state.lname}
                email= {this.state.email}
                pass={this.state.pass}
                confirmpass={this.state.confirmpass}
                onChangeFname= {this.handleChange("fname").bind(this)}
                onChangeLname= {this.handleChange("lname").bind(this)}
                onChangeEmail= {this.handleChange("email").bind(this)}
                onChangePass = {this.handleChange("pass").bind(this)}
                onChangeConfirmPass= {this.handleChange("confirmpass").bind(this)}
                onNextClick = {this.goToNext}
                // isRequired={required}
               // passwordMatch = { maxLength(15)}
                  />
            );
            case 2:
            return (
              <MemberJobInfo
                key="shipping"
                onSubmit={this.goToNext}
                companymodel= ".jobInfo.company"
                designationmodel = ".jobInfo.designation"
                rolemodel=".jobInfo.role"
                company= {this.state.company}
                designation={this.state.designation}
                role= {this.state.role}
                onChangeCompany= {this.handleChange("company").bind(this)}
                onChangeDesignation = {this.handleChange("designation").bind(this)}
                onChangeRole = {this.handleChange("role").bind(this)}
                onPreviousClick = {this.goToPrevious}
                onNextClick = {this.goToNext}
              />
            );
          case 3:
            return (
              <ReviewAndUpdate
                key="billing"
                onSubmit={this.goToNext}
                staticText = {this.props.review}
                onPersonalEdit={this.goToPersonal}
                onJobProfileEdit ={this.goToJobInfo}
                onPreviousClick = {this.goToPrevious}              
              />
            );
            
            default: return null;
        }
        
      }
}




export default Steps;
