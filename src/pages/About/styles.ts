import styled, { keyframes } from 'styled-components';

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

export const Text = styled.p`
  font-size: 3rem;
  text-align: center;

  margin-bottom: 1rem;
`;
