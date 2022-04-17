import styled, { keyframes } from 'styled-components';

const scaleMarker = keyframes`
    from {
        transform: translate(-190px, -150px);
    }

    to {
        transform: translate(-190px,-155px);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 0.4;
    }
`;

export const SvgImage = styled.svg`
  transform: scale(0.8);
  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: none;
  }

  .overflow {
    overflow: auto;
  }
  .marker {
    animation: ${scaleMarker} 2.5s ease-in-out infinite alternate;
  }

  .fade {
    animation: ${fadeIn} 3s ease-in-out infinite alternate;
  }
`;
