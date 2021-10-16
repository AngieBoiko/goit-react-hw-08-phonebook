import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/usersAPI';
import authSelectors from 'redux/Auth';
import Button from '@material-ui/core/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogoutClick = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);
  return (
    <div>
      <span>{`You are welcome, ${name}!`}</span>
      <Button type="button" onClick={onLogoutClick}>
        Logout
      </Button>
    </div>
  );
}
