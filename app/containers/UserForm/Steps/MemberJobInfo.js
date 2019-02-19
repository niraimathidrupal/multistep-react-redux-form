import React from "react";
import Button from '../../../components/Button/Button';
import Control from '../../../components/Control/Control';

class MemberJobInfo extends React.Component {  
    render() {
      return (
        <div>
          <h3>Employee Job Details</h3>
          <div className="field">
            <p></p>
            <label>Company name</label>
            <Control
              modelname = {this.props.companymodel}
              placeholder="Company Name"
              modelvalue={this.props.company}
              onChangeModel={this.props.onChangeCompany}
            />
          </div>            
          <div className="field">
            <p></p>
            <label>Designation</label>
            <Control
              modelname = {this.props.designationmodel}
              placeholder="Designation"
              modelvalue={this.props.designation}
              onChangeModel={this.props.onChangeDesignation}
            />
          </div>
          <div className="field">
            <p></p>
            <label>Role</label>
            <Control
              modelname = {this.props.rolemodel}
              placeholder="Role"
              modelvalue={this.props.role}
              onChangeModel={this.props.onChangeRole}
            />
          </div>          
          <div className="button">
            <p></p>
            <Button buttonFunc={this.props.onPreviousClick}>Previous</Button>&nbsp; &nbsp; &nbsp; &nbsp;
            <Button buttonFunc={this.props.onNextClick}>Next</Button>
          </div>
      </div>
      );
    }
  }

  export default MemberJobInfo;