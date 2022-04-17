import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RateWrapper = styled.div`
  width: 28%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 40px 30px;
  border-radius: 30px;
  border-bottom: 2px solid
    ${({ procentage, theme }) => {
      if (procentage === 0) {
        return theme.colors.white;
      } else if (procentage < 0) {
        return theme.colors.orange;
      } else {
        return theme.colors.green;
      }
    }};
`;

export const Ticker = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: flex;
  justify-content: space-between;
  span {
    padding-left: 20px;
  }
`;

export const TodayPrice = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
`;

export const Proc = styled.span`
  color: ${({ procentage, theme }) => {
    if (procentage === 0) {
      return theme.colors.white;
    } else if (procentage < 0) {
      return theme.colors.orange;
    } else {
      return theme.colors.green;
    }
  }};
`;
