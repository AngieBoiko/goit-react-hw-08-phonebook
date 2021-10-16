import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from 'components/Login';
import PrivateContactsView from './components/PrivateContactsView';
import PrivateRoute from 'components/PrivateRoute';
import Registration from 'components/Registration';
import routes from 'utils/routes';
import HomePage from 'components/HomePage';
import AppBar from 'components/AppBar';
import PublicRoute from 'components/PublicRoute/PublicRoute';

export default function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Switch>
        {/* <PublicRoute path={routes.homePage} exact>
          <HomePage />
        </PublicRoute> */}
        <Route exact path={routes.registration} component={Registration} />
        {/* <PublicRoute path={routes.login} redirectTo={routes.privateContacts}>
          <Login />
        </PublicRoute> */}
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.login} component={LogIn} />
        {/* <PrivateRoute
          path={routes.privateContacts}
          exact
          redirectTo={routes.registration}
        >
          <PrivateContactsView />
        </PrivateRoute> */}
      </Switch>
    </BrowserRouter>
  );
}
