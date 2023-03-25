import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Filter } from 'components/Filter/Filter';
import { ContactsTitle, Heading, SectionWrap } from './Contacts.styled';

export const Contacts = () => {
  return (
    <>
      <SectionWrap>
        <Heading>Phonebook</Heading>
        <ContactForm />
      </SectionWrap>
      <SectionWrap>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </SectionWrap>
    </>
  );
};
