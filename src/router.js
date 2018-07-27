// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './App';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Teachers from './components/Teachers';
import Admin from './components/Admin';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={SignIn} />
      <Route path="signout" component={SignOut} />
      <Route path="teachers" component={Teachers} />
      <Route path="admin" component={Admin} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
