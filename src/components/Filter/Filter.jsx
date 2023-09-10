import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filter } from 'redux/store';

import { Lable, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterRedux = useSelector(getFilter);

  const onFilterChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filter(value));
  };
  return (
    <>
      <Lable style={{ width: 400 }}>
        Find contacts by name
        <Input type="text" value={filterRedux} onChange={onFilterChange} />
      </Lable>
    </>
  );
};

export default Filter;
