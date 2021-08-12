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
export const ImageEmoji = styled.img`
  @media screen and (max-width: 780px) {
    height: 6rem;
    width: 6rem;
  }
  @media screen and (min-width: 781px) {
    height: 7rem;
    width: 7rem;
  }
  &:hover {
    filter:drop-shadow(0 0 10px #11183D);
  }
`;
export const ContainerBalon = styled.div`
  background: #BCC1D6;
  border-radius: 15px;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;

&:after {
  content: "";
  position: absolute;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #BCC1D6;
  bottom: -20px;
  left: 20%;
}
`;
