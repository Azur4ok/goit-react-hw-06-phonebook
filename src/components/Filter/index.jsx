import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/contacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};
