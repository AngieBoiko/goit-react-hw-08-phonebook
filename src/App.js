import React, { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import Spinner from 'components/Loader';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import PublicRoute from 'components/PublicRoute';
import routes from 'utils/routes';
import { fetchCurrentUser } from 'redux/Auth/usersAPI';
import authSelectors from 'redux/Auth/authSelectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <Container>
      <AppBar />
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
      <ToastContainer />
    </Container>
  );
}
