import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Registration from 'components/Registration';
import Login from 'components/Login';
import PrivateContactsView from './components/PrivateContactsView';
import PrivateRoute from 'components/PrivateRoute';
import { routes } from 'utils/routes';
import HomePage from 'components/HomePage/HomePage';
import PublicRoute from 'components/PublicRoute/PublicRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path={routes.homePage} exact>
          <HomePage />
        </PublicRoute>
        <Route path={routes.registration} component={Registration} />
        <Route path={routes.login} component={Login} />
        <PrivateRoute
          path={routes.privateContacts}
          exact
          redirectTo={routes.registration}
        >
          <PrivateContactsView />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
