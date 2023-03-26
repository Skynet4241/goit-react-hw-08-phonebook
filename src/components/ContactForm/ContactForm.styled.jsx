import styled from 'styled-components';

export const ContactsForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  gap: 30px;
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
  width: 180px;
  height: 56px;
  background: #fa3c45;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  border: none;
  margin-bottom: 20px;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
`;
