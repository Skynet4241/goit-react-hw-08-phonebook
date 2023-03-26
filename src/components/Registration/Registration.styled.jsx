import styled from 'styled-components';

export const RegistrFormWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegistrFormTitle = styled.h2`
  display: block;
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
`;

export const RegistrForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormButton = styled.button`
  width: 128px;
  height: 56px;
  background: #fa3c45;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  border: none;
  margin-top: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
`;
