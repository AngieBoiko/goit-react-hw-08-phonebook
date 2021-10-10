import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Registration from 'components/Registration';
import Login from 'components/Login';
import PrivateContactsView from './components/PrivateContactsView';
import { routes } from 'utils/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.registration} exact component={Registration} />
        <Route path={routes.login} exact component={Login} />
        <Route
          path={routes.privateContacts}
          exact
          component={PrivateContactsView}
        />
      </Switch>
    </BrowserRouter>
  );
}
