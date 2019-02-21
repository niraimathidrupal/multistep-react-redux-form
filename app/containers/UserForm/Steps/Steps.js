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
          address1: "",
          address2: "",
          city: "",
          stateval: "",
          zipcode: "",
          company: "",
          designation: "",
          role: "",
          exp: "",
          skills: ""
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
      const required = (val) => val && val.maxLength > 0;
        switch (this.state.step) {
          case 1:
            return (
              <MemberInfo
                key="personal"
                //onSubmit={this.goToNext}
                fnamemodel= ".memberInfo.fname"
                lnamemodel=  ".memberInfo.lname"
                emailmodel= ".memberInfo.email"
                addressmodel1= ".memberInfo.address1"
                addressmodel2= ".memberInfo.address2"
                citymodel = ".memberInfo.city"
                statemodel = ".memberInfo.state"
                zipcodemodel = ".memberInfo.zipcode"
                fname= {this.state.fname}
                lname= {this.state.lname}
                email= {this.state.email}
                address1={this.state.address1}
                address2 = {this.state.address2}
                city = {this.state.city}
                stateval = {this.state.stateval}
                zipcode={this.state.zipcode}
                onChangeFname= {this.handleChange("fname").bind(this)}
                onChangeLname= {this.handleChange("lname").bind(this)}
                onChangeEmail= {this.handleChange("email").bind(this)}
                onChangeAddress1 = {this.handleChange("address1").bind(this)}
                onChangeAddress2 = {this.handleChange("address2").bind(this)}
                onChangeCity = {this.handleChange("city").bind(this)}
                onChangeStateVal = {this.handleChange("stateval").bind(this)}
                onChangeZipCode= {this.handleChange("zipcode").bind(this)}
                onNextClick = {this.goToNext}
                isRequired={required}
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
                expmodel=".jobInfo.exp"
                skillsmodel=".jobInfo.skills"
                company= {this.state.company}
                designation={this.state.designation}
                role= {this.state.role}
                exp =  {this.state.exp}
                skills = {this.state.skills}
                onChangeCompany= {this.handleChange("company").bind(this)}
                onChangeDesignation = {this.handleChange("designation").bind(this)}
                onChangeRole = {this.handleChange("role").bind(this)}
                onChangeExp = {this.handleChange("exp").bind(this)}
                OnChangeSkills = {this.handleChange("skills").bind(this)}
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
