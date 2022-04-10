import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const WidthWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
