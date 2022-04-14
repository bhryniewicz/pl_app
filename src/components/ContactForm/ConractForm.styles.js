import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4/5;
  grid-row: 1/3;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ isList }) => (isList ? '20px' : '0')};
  color: ${({ theme }) => theme.colors.primaryBackground};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
`;

export const Contact = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  height: 390px;
  border-radius: 30px;
  padding: 30px 40px;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.orange};
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  border-radius: 30px;
  background-color: transparent;
  margin: 10px 0;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px !important;
  margin: 10px 0;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  border-radius: 30px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  padding: 10px 35px;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border: 2px solid ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.orange};
  }

  &:focus {
    outline: none;
  }
`;
