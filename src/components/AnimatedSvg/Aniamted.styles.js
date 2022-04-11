import styled, { keyframes } from 'styled-components';

const scaleMarker = keyframes`
    from {
        transform: translate(-190px, -150px);
    }

    to {
        transform: translate(-190px,-155px);
    }
`;

export const SvgImage = styled.svg`
  transform: scale(0.8);
  .overflow {
    overflow: auto;
  }
  .marker {
    animation: ${scaleMarker} 2.5s ease-in-out infinite alternate;
  }
`;
