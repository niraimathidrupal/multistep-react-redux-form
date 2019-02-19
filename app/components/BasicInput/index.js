/**
 *
 * BasicInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Control, Errors } from 'react-redux-form/lib/immutable';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function BasicInput() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

BasicInput.propTypes = {};

export default BasicInput;
