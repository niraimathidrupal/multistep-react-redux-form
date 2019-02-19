/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';
import App from '../App/index';
export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'BoilerPlate Workaround Home Page'
  },

  maincontent: {
    id: `${scope}.message`,
    defaultMessage: 'User Details'
  }
});
