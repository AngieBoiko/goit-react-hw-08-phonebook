import React from 'react';
import { Redirect, Route } from 'react-router';
import authSelectors from 'redux/Auth';

export default function PublicRoute(
  children,
  restricted = false,
  redirectTo = '/',
  ...props
) {
  const isLoggedin = authSelectors.isLoggedin;
  return (
    <Route {...props}>
      {isLoggedin && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
