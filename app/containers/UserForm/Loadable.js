/**
 *
 * Asynchronously loads the component for UserForm
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
