import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Registration from 'components/Registration';
import Contacts from './components/Contacts';
import Form from './components/Form';
import Filter from './components/Filter';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={Registration} />
      </Switch>
    </BrowserRouter>
    // <div>
    //   <h1>Phonebook</h1>
    //   <Form />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <Contacts />
    // </div>
  );
}
