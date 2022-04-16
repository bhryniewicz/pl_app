import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  z-index: 1000;
  padding: 40px 10%;
`;

export const ElWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const El = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  padding: 15px 0;
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
`;
