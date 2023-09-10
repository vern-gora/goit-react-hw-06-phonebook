import styled from 'styled-components';

export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Lable = styled.label`
  display: flex;
  justify-content: center;
  color: aliceblue;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  margin-left: 10px;
  border: 1px solid aliceblue;
  border-radius: 20px;
  background-color: transparent;
  outline: none;
  color: aliceblue;
  letter-spacing: 0.04em;
`;

export const Button = styled.button`
  background-color: transparent;
  border: solid 1px aliceblue;
  border-radius: 20px;
  color: aliceblue;
  padding: 8px 32px;
  cursor: pointer;
  font-weight: 600;
  max-width: 160px;
  display: flex;
  justify-content: center;
`;
