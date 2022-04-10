import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fontStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fontFamilies.primaryFont};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const NavEl = styled.h4`
  text-transform: uppercase;
  padding: 0 35px;

  ${fontStyles}
`;

export const Image = styled.img`
  padding: 0 30px;
  transform: scale(0.7);
`;

export const NavButton = styled.button`
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  padding: 10px 20px;
  border-radius: 25px;

  ${fontStyles}
`;
