import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Filter } from 'components/Filter/Filter';

import {
  Block,
  ContactsListBlock,
  ContactsTitle,
  Heading,
  SectionWrap,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <>
      <Block>
        <SectionWrap>
          <Heading>Contact Form</Heading>
          <ContactForm />
        </SectionWrap>
        <ContactsListBlock>
          <ContactsTitle>Contacts</ContactsTitle>
          <SectionWrap>
            <Filter />
            <ContactList />
          </SectionWrap>
        </ContactsListBlock>
      </Block>
    </>
  );
};
