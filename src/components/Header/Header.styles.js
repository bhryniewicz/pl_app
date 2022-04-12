import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  z-index: 100;
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
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  }
`;

export const Image = styled.img`
  padding: 0 10px;
  transform: scale(0.5);
`;

export const NavButton = styled.button`
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  padding: 10px 20px;
  border-radius: 25px;

  ${fontStyles}
`;
