import styled from 'styled-components';
import { Blob } from 'assets/images';

export const Wrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  padding: 90px 0;
  position: relative;
  z-index: 10;
  margin-bottom: 60px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 90px 0 0;
  }

  &::before {
    display: none;
    content: url(${Blob});
    position: absolute;
    z-index: -1;
    width: 500px;
    transform: scale(1.5) rotate(-10deg);
    right: -20%;
    top: -5%;
  }

  &::after {
    display: none;
    content: url(${Blob});
    position: absolute;
    z-index: -1;
    width: 600px;
    transform: scale(1.5) rotateY(180deg);
    left: -25%;
    top: 15%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  text-transform: uppercase;
  word-spacing: 2px;
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const ChartBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  margin: 40px 0 20px;
  padding: 40px 0;
  border-radius: 30px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  font-family: ${({ theme }) => theme.fontFamilies.primaryFont};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  word-break: break-all;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 40px;
  }
`;
