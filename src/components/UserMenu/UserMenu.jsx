import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';

export default function UserMenu() {
  const onLogoutClick = useCallback(() => {}, []);
  return (
    <div>
      <p></p>
      <Button type="button" onClick={onLogoutClick}>
        Logout
      </Button>
    </div>
  );
}
