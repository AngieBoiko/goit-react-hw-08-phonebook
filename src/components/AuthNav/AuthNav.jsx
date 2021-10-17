import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';
import styles from './styles.module.css';

export default function AuthNav() {
  return (
    <div className={styles.nav_container}>
      <ul className={styles.navigation}>
        <li className={styles.list_item}>
          <NavLink to={routes.registration} activeClassName={styles.active}>
            Registration
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink to={routes.login} activeClassName={styles.active}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
