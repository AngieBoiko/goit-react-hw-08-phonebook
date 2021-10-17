import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/authSelectors';
import styles from './styles.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.navigation}>
        <li className={styles.list_item}>
          <NavLink to={routes.homePage} exact activeClassName={styles.active}>
            Main
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className={styles.list_item}>
            <NavLink
              to={routes.privateContacts}
              exact
              activeClassName={styles.active}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
