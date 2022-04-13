import styled from 'styled-components';
import { Diamond } from 'assets/images';

export const Wrapper = styled.div`
  height: 50vh;
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  z-index: 1000;
  grid-gap: 0 50px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px 30px;
  height: 300px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  z-index: 100;
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '0${(props) => props.idx}';
    display: block;
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    opacity: 0.1;
    color: white;
    font-size: 350px;
  }

  &::after {
    content: url(${Diamond});
    transform: scale(0.15);
    display: block;
    position: absolute;
    top: -10px;
  }
`;
