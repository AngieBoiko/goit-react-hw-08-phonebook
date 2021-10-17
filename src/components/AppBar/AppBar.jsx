import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import styles from './styles.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
