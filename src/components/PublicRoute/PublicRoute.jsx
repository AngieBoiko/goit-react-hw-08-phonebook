import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authSelectors from 'redux/Auth';
import routes from 'utils/routes';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = routes.homePage,
  ...props
}) {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
