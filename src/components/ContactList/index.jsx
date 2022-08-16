import React from 'react';
import { useSelector } from 'react-redux';

import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const { filter } = useSelector(state => state.contacts);
  
  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};
