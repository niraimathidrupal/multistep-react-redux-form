import React from "react";
import Button from '../../../components/Button/Button';
import ControlCustom from '../../../components/Control/Control';
import { Row, Col } from 'react-bootstrap';

class MemberJobInfo extends React.Component {  
    render() {
      return (
        <Row>
         <Col md={6} mdPush={3}>
          <h3>Employee Job Details</h3>
          <div className="field">
            <p></p>
            <label>Company name</label>
            <ControlCustom
              modelname = {this.props.companymodel}
              placeholder="Company Name"
              modelvalue={this.props.company}
              onChangeModel={this.props.onChangeCompany}
            />
          </div>            
          <div className="field">
            <p></p>
            <label>Designation</label>
            <ControlCustom
              modelname = {this.props.designationmodel}
              placeholder="Designation"
              modelvalue={this.props.designation}
              onChangeModel={this.props.onChangeDesignation}
            />
          </div>
          <div className="field">
            <p></p>
            <label>Role</label>
            <ControlCustom
              modelname = {this.props.rolemodel}
              placeholder="Role"
              modelvalue={this.props.role}
              onChangeModel={this.props.onChangeRole}
            />
          </div>   
          <div className="field">
            <p></p>
            <label>Experience</label>
            <ControlCustom 
              modelname= {this.props.expmodel}
              placeholder="2 exp"
              modelvalue={this.props.exp}
              onChangeModel={this.props.onChangeExp}
            />          
          </div>   
          <div>
            <p></p>
            <label>Doamin skills</label>
            <ControlCustom 
              modelname={this.props.skillsmodel}
              placeholder="c, c++, react js, drupal.."
              modelvalue={this.props.skills}
              onChangeModel={this.props.OnChangeSkills}
            />           
          </div>        
          <div className="button">
            <p></p>
            <Button buttonFunc={this.props.onPreviousClick}>Previous</Button>&nbsp; &nbsp; &nbsp; &nbsp;
            <Button buttonFunc={this.props.onNextClick}>Next</Button>
          </div>
      </Col>
      </Row>
      );
    }
  }

  export default MemberJobInfo;