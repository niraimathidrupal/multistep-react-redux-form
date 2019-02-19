/*
 * UserForm Messages
 *
 * This contains all the text for the UserForm container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.UserForm';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the UserForm container!',
  },
});
