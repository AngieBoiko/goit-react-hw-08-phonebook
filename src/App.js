import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import routes from 'utils/routes';
import AppBar from 'components/AppBar';
import { fetchCurrentUser } from 'redux/Auth/usersAPI';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const LogIn = lazy(() => import('components/LogIn'));
const Registration = lazy(() => import('components/Registration'));
const HomePage = lazy(() => import('components/HomePage'));
const PrivateContactsView = lazy(() =>
  import('components/PrivateContactsView'),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          {/* <PublicRoute exact path={routes.homePage}>
            <HomePage />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.login}
            redirectTo={routes.privateContacts}
          >
            <LogIn />
          </PublicRoute> */}
          <PrivateRoute path={routes.privateContacts} redirectTo={routes.login}>
            <PrivateContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}
