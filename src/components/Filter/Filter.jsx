import { FilterField, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { setFilter } from 'redux/filterContacts';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <FilterField>
        <FilterLabel htmlFor="filter">Find contacts by Name</FilterLabel>
        <TextField
          id="standard-search"
          label="Enter filter"
          type="text"
          variant="standard"
          onChange={changeFilter}
        />
      </FilterField>
    </>
  );
};
