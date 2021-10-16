import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';

export default function Navigation() {
  return (
    <nav>
      <NavLink to={routes.homePage} exact>
        Main
      </NavLink>

      <NavLink to={routes.privateContacts} exact>
        Contacts
      </NavLink>
    </nav>
  );
}
