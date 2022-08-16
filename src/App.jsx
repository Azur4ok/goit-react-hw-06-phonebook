import React from 'react';
import { useSelector } from 'react-redux';

import { ContactForm, Filter, ContactList } from './components';
import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector((state) => state.contacts.items)
  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList />
      ) : (
        <h2 className={styles.notification}>Contact list is empty</h2>
      )}
    </div>
  );
};
