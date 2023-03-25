import styled from 'styled-components';

export const ContactsForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const ContactFormLabel = styled.label`
  font-size: 16px;
  line-height: 1.67;
  letter-spacing: 0.01em;
  font-family: 'Times New Roman', Times, serif;
  color: #757575;
  display: block;
`;

export const ContactFormBtn = styled.button`
  font-size: 16px;
  font-weight: 600px;
  font-family: 'Times New Roman', Times, serif;
  height: 40px;
  max-width: 150px;
  padding: 0 20px;
  color: white;
  background-color: #2196f3;
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b5089;
  }
`;
