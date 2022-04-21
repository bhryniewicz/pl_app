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

export const SingleCardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
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
  text-align: left;

  &::before {
    content: '0${(props) => props.id}';
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -35%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border: 15px solid ${({ theme }) => theme.colors.orange};
    border-radius: 50%;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  align-self: flex-start;
  margin-bottom: 10px;
`;
