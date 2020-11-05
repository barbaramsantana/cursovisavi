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
export const Mapa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;   
`;
export const Container = styled.div`
  animation: ${appearFromRight} 1s;
`;
export const Legenda = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;
type FlexProps = {
  opacidade?: '0'|'0.1'|'0.2'|'0.3'|'0.4'|'0.5'|'0.6'|'0.7'|'0.8'|'0.9'|'1.0',
}
export const Topico = styled.div<FlexProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #11183D;
  opacity: ${props => props.opacidade};
  justify-content: center;  
`;
export const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;

  margin-bottom: 1rem;
`;
export const Observacao = styled.p`
  font-size: 3rem;
  text-align: center;
  color:red;

  margin-bottom: 1rem;
`;
