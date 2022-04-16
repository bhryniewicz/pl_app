import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 40px;
  display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
  justify-content: ${({ mobile }) => (mobile ? 'space-between' : 'center')};
  align-items: center;
  height: 10vh;
  z-index: 100;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
    margin-bottom: 200px;
  }
`;

const fontStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fontFamilies.primaryFont};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const NavEl = styled.h4`
  position: relative;
  text-transform: uppercase;
  margin: 0 40px;
  width: min-content;
  z-index: 50;

  ${fontStyles}

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 180%;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    opacity: 0;
    padding: 10px 20px;
    border-radius: 30px;
    z-index: 40;
  }

  &:hover::before {
    opacity: 0.2;
  }
`;

export const Image = styled.img`
  padding: 0 10px;
  transform: ${({ mobile }) => (mobile ? 'scale(0.25)' : 'scale(0.5)')};
`;

export const NavButton = styled.button`
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  transition: all 0.3s ease-in-out;
  ${fontStyles}

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

//mobile

export const MenuWrapper = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
