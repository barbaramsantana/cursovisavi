import styled, { keyframes } from 'styled-components';

type FlexProps = {
  opacidade?:
    | '0'
    | '0.1'
    | '0.2'
    | '0.3'
    | '0.4'
    | '0.5'
    | '0.6'
    | '0.7'
    | '0.8'
    | '0.9'
    | '1.0';
};

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  animation: ${appearFromRight} 1s;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;

  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
