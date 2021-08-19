import styled, { keyframes } from 'styled-components';

import enterImage from '../../assets/enter.svg';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerTwitter = styled.div`
font-size: 1.5rem;
text-align: center;
`;

export const Container = styled.div`
  display: grid;

  animation: ${appearFromTop} 1s;

  @media screen and (max-width: 780px) {
    grid-template-rows: 10rem 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'textIndex'
      'imgIndex'
      'imgIndex'
      'dataIndex';
  }

  @media screen and (min-width: 781px) {
    grid-template-rows: 34rem 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'textIndex imgIndex'
      'dataIndex imgIndex';
  }
`;

export const Title = styled.h1`
  grid-area: textIndex;

  font-weight: 500;
  font-size: 3.5rem;
  text-align: center;
`;
export const MapaText = styled.div`
font-weight: 250;
font-size: 3.5rem;
text-align: center;
color: red;
`;
export const Observacao = styled.p`
  grid-area: ObsIndex;

  font-weight: 250;
  font-size: 3.5rem;
  text-align: center;
  color: red;
`;

export const ContainerImage = styled.div`
  grid-area: imgIndex;

  display: flex;
  justify-content: center;
  align-items: center;

  background: no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media screen and (max-width: 780px) {
    margin-top: 8rem;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 780px) {
    height: 26rem;
    width: 23rem;
  }
  @media screen and (min-width: 781px) {
    height: 39rem;
    width: 34.5rem;
  }
`;
type FlexProps = {
  tamanho: number,
}
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

export const ContainerButton = styled.div`
  grid-area: dataIndex;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 5rem;
    width: 24rem;
    align-self: center;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;

    font-weight: 700;
    font-size: 1.6rem;

    background: var(--color-content-button-background);
    color: var(--color-content-button-text);
    box-shadow: 5px 5px 5px #00000080;

    transition: background 0.3s;
    transition: box-shadow 0.3s ease-in-out;
    transition: transform 0.2s ease;
  }

  a:hover {
    background: var(--color-content-button-background-hover);
    box-shadow: 5px 5px 5px #00000040;
    transform: scale(1.2, 1.2);
  }

  @media screen and (max-width: 780px) {
    margin-top: 8rem;
  }
`;

export const ButtonIcon = styled.div`
  height: 3rem;
  width: 3rem;

  margin-left: 2rem;

  background: url(${enterImage}) no-repeat center center;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
`;
