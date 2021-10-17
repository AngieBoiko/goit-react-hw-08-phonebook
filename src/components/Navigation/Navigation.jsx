import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <nav>
      <NavLink to={routes.homePage} exact>
        Main
      </NavLink>
      {isLoggedIn && (
        <NavLink to={routes.privateContacts} exact>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
