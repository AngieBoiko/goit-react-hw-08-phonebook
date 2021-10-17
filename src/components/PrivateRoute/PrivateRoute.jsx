import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth';
import routes from 'utils/routes';

export default function PrivateRoute(
  children,
  redirectTo = routes.homePage,
  ...props
) {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
