import React from 'react';
import { Redirect, Route } from 'react-router';
import { isLoggedin } from 'redux/routesSelectors';

export default function PrivateRoute(children, redirectTo = '/', ...props) {
  return (
    <Route {...props}>
      {isLoggedin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
