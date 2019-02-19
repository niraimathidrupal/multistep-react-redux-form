import React from "react";
import { Control, Errors } from 'react-redux-form/lib/immutable';
import FormControl from 'react-bootstrap/lib/FormControl';

class ControlCustom extends React.Component {

    render() {
        return (
           
            <Control.text
                model = {this.props.modelname}
                type="text"
                placeholder= {this.props.placeholder}
                value={this.props.modelvalue}
                onChange={this.props.onChangeModel}
                component={FormControl}  
                validators={this.props.validators}              
                validateOn="onFocus"
            />
                
        );
    }
}

export default ControlCustom;