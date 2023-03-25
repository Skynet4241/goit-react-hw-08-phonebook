import styled from 'styled-components';

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border: 1px solid #eee;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Times New Roman', Times, serif;
`;

export const ContactsTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Times New Roman', Times, serif;
`;
