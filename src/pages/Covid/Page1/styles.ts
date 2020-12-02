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
export const Button = styled.a`

  flex: 1;

  display: flex;
  margin-left: 3rem;
  margin-bottom: 2rem;
  cursor: pointer;

  height: 5rem;
  width: 15rem;

  border-radius: 0.5rem;

  font-weight: 500;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;

  background: var(--color-content-button-background);
  color: var(--color-content-button-text);
  box-shadow: 5px 5px 5px #00000080;
`;

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
  a:hover{
    background: red;
  }
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
export const Observacao = styled.p`
  font-size: 3rem;
  text-align: center;
  color:red;

  margin-bottom: 1rem;
`;
export const ContentButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;