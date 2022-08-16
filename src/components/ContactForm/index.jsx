import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from 'redux/slices/contacts';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    name: '',
    number: '',
  });

  const onAddContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    !contacts?.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? dispatch(addContact(newContact))
      : alert(`${name} is already in contacts.`);
  };

  const resetState = () => setData({ name: '', number: '' });

  const handleClick = () => {
    if (!data.name && !data.number) {
      return alert('Invalid name or number');
    }
    onAddContact(data);
    resetState();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <h4>Name</h4>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={data.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h4>Number</h4>
      <input
        onChange={handleChange}
        type="tel"
        name="number"
        value={data.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.btn} onClick={handleClick}>
        Add contact
      </button>
    </div>
  );
};
