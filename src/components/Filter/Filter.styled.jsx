import styled from 'styled-components';

export const FilterField = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  row-gap: 10px;
`;

export const FilterInput = styled.input`
  width: 100%;
  max-width: 350px;
  height: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding: 12px 12px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:focus {
    border-color: #2196f3;
  }
`;
export const FilterLabel = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.67;
  letter-spacing: 0.01em;
  color: #212020;
  display: block;
`;
