/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import UserForm from '../UserForm/index';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/thank-you" component={HomePage} />
        <Route exact path="/" component={UserForm} />
        <Route component={NotFoundPage} />        
      </Switch>
      <GlobalStyle />
    </div>
  );
}
