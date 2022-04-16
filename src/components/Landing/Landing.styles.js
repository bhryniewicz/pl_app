import styled from 'styled-components';
import { Diamond } from 'assets/images';

export const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::before {
    content: url(${Diamond});
    position: absolute;
    right: 100px;
    bottom: -50px;
    opacity: 0.08;
    transform: scale(8) rotate(-35deg);
    pointer-events: none;

    @media ${({ theme }) => theme.breakpoints.mobile} {
      right: 0;
      bottom: 150px;
      transform: rotate(-35deg) scale(5.5);
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding-right: 60px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 100%;
    padding-right: 0;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  color: white;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  word-spacing: 2px;
  margin-bottom: 30px;

  span {
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fontFamilies.primaryFont};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 170%;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 15px 30px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 10px 0;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  z-index: 500;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.orange};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
  }
`;
