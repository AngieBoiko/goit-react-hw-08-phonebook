import React from 'react';
import { Redirect, Route } from 'react-router';
import authSelectors from 'redux/Auth';

export default function PrivateRoute(children, redirectTo = '/', ...props) {
  const isLoggedin = authSelectors.isLoggedin;
  return (
    <Route {...props}>
      {isLoggedin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
