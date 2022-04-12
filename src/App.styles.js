import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const WidthWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
`;