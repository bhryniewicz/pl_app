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

