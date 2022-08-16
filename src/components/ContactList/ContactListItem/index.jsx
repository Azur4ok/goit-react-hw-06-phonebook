import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './ContactListItem.module.css';
import { removeContact } from 'redux/slices/contacts';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onClickDelete = () => {
    if (window.confirm('Are you sure to delete this contact')) {
      dispatch(removeContact(contact.id));
    }
  };

  return (
    <li className={styles.list}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button className={styles.button} onClick={onClickDelete}>
        delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
