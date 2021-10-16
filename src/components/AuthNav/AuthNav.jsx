import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';

export default function AuthNav() {
  return (
    <div>
      <NavLink to={routes.registration}>Registration</NavLink>
      <NavLink to={routes.login}>Login</NavLink>
    </div>
  );
}
