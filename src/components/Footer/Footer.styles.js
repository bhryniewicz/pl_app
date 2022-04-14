import styled, { css } from 'styled-components';
import { Wave } from 'assets/images';

export const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  margin-top: 180px;
  background-color: ${({ theme }) => theme.colors.orange};
  margin-top: 180px;
  position: relative;

  &::before {
    content: url(${Wave});
    top: -250px;
    display: block;
    position: absolute;
    width: 100%;
  }
`;

export const WidthWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(2, 270px) 70px 1fr;
  grid-template-rows: 1fr 120px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4/5;
  grid-row: 1/3;
`;

export const Socials = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  grid-column: 1/3;
  grid-row: 2/3;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const styles = css`
  color: ${({ theme }) => theme.colors.primaryBackground};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ isList }) => (isList ? '20px' : '0')};
  ${styles};
`;

export const El = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding: 3px 0;

  ${styles}
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
