import React, { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import routes from 'utils/routes';
import AppBar from 'components/AppBar';
import { fetchCurrentUser } from 'redux/Auth/usersAPI';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import authSelectors from 'redux/Auth/authSelectors';
import Spinner from 'components/Loader';

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
  const isFetchingUser = useSelector(authSelectors.isFetchingUser);

  return isFetchingUser ? (
    <Spinner />
  ) : (
    <>
      <div>
        <AppBar />
      </div>

      <Switch>
        <Suspense fallback={<Spinner />}>
          <PublicRoute exact path={routes.homePage}>
            <HomePage />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.registration}
            redirectTo={routes.privateContacts}
            restricted
          >
            <Registration />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.login}
            redirectTo={routes.privateContacts}
            restricted
          >
            <LogIn />
          </PublicRoute>
          <PrivateRoute path={routes.privateContacts} redirectTo={routes.login}>
            <PrivateContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </>
  );
}
