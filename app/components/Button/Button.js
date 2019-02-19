import Button from 'react-bootstrap/lib/Button';
import React from 'react';
class ButtonComp extends React.Component {
    render() {
        return(
            <Button color="primary" type="button" 
            onClick={this.props.buttonFunc} onSubmit={this.props.submitfunc}>
             {this.props.children}
            </Button>
        );
    }
}

export default ButtonComp;
       