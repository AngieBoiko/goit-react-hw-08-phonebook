import React from 'react';
import Contacts from 'components/Contacts';
import Form from 'components/Form';
import Filter from 'components/Filter';

export default function PrivateContactsView() {
  return (
    <div>
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
}
