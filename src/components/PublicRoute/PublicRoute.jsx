import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authSelectors from 'redux/Auth';

export default function PublicRoute(
  children,
  restricted = false,
  redirectTo = '/',
  ...props
) {
  const isLoggedIn = authSelectors.isLoggedIn;
  return (
    <Route {...props}>
      {isLoggedIn && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
