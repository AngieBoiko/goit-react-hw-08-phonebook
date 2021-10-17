import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/usersAPI';
import authSelectors from 'redux/Auth';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogoutClick = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);
  return (
    <div className={styles.menu_container}>
      <span className={styles.menu_text}>
        You are welcome, <span className={styles.user_name}>{`${name}`}</span>!
      </span>
      <Button
        type="button"
        onClick={onLogoutClick}
        color="primary"
        variant="contained"
        size="small"
      >
        Logout
      </Button>
    </div>
  );
}
