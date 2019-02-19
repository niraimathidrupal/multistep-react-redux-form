import React from 'react'
import { ControlLabel, FormControl, FormGroup, Row, Col } from 'react-bootstrap'
import getValidationState from './getValidationState'

export default props => {
  const { input, type, meta, label } = props

  return (
    <FormGroup inline>
      {/* validationState={getValidationState(meta)} */}
      <Row>
      <Col md="2">
      <ControlLabel>{label}</ControlLabel></Col>
      <Col md="6"><FormControl type={type} {...input} /></Col>
        </Row>
      
      {/* {meta.touched && meta.error} */}
      <FormControl.Feedback />
    </FormGroup>
  )
}
