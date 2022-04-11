import styled from 'styled-components';
import { Diamond } from 'assets/images';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -60px;
  position: relative;

  &::before {
    content: url(${Diamond});
    display: block;
    position: absolute;
    right: 100px;
    bottom: 0;
    opacity: 0.16;
    transform: scale(8) rotate(-35deg);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding-right: 60px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  color: white;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fontFamilies.primaryFont};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 170%;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 15px 30px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
