import React from 'react';
import { Redirect, Route } from 'react-router';
import { isLoggedin } from 'redux/routesSelectors';

export default function PublicRoute(
  children,
  restricted = false,
  redirectTo = '/',
  ...props
) {
  return (
    <Route {...props}>
      {isLoggedin && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
