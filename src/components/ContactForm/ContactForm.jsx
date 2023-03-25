import { ContactsForm, ContactFormBtn } from './ContactForm.styled';
import { useState } from 'react';
import { TextField } from '@mui/material';
import {
  useAddContactsMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';
import { ThreeDots } from 'react-loader-spinner';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();

  const handleFormSubmit = e => {
    e.preventDefault();

    if (data.some(item => item.name === name)) {
      alert(`${name} is already is contacts`);
      setName('');
      setPhone('');
      return;
    }

    addContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <>
      <ContactsForm onSubmit={handleFormSubmit}>
        <TextField
          onChange={e => setName(e.target.value)}
          type="text"
          id="outlined-basic"
          name="name"
          value={name}
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          variant="outlined"
        />
        <TextField
          type="tel"
          id="outlined-basic"
          name="number"
          label="Number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          variant="outlined"
          onChange={e => setPhone(e.target.value)}
        />

        <ContactFormBtn>
          {isLoading ? (
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          ) : (
            <>Add contact</>
          )}
        </ContactFormBtn>
      </ContactsForm>
    </>
  );
};
