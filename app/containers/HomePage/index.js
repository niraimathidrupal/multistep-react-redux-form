/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

const Section = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

const CenteredSection = styled(Section)`
  text-align: center;
`;


/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <CenteredSection>
      <div>
         <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h3>
          <a href="/">Click here</a> to add more employee details
        </h3>
      </div>
      </CenteredSection>
     
    );
  }
}
