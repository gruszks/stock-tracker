import styled, { css } from 'styled-components/macro';

export const Form = styled.form`
  display: grid;
  width: 50%;
  grid-row-gap: 15px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const FieldWrapper = styled.div`
  display: grid;
  grid-row-gap: 10px;

  small {
    font-size: 12px;
  }
`;

export const Field = styled.input`
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 3px;
  font-size: 14px;
  padding: 10px 5px;
  outline: none;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: rgba(0, 153, 255, 1);
  border: none;
  border-radius: 2px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }

  &:disabled {
    background-color: #ccc;
  }
`;

export const SearchListWrapper = styled.div`
  position: relative;
`;

export const SearchList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid rgba(204, 204, 204, 1);
  background-color: #fff;
`;

export const SearchListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(204, 204, 204, 1);

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: #e9e9e9;
  }

  ${({ selected }) =>
    selected &&
    css`
      font-weight: bold;
    `}
`;

export const SuccessAlert = styled.div`
  color: #155724;
  background-color: #d4edda;
  padding: 20px 10px;
  margin-bottom: 15px;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;
