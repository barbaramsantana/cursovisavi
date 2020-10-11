import styled from 'styled-components';

import backgroundImage from './../../assets/background.svg';

export const Container = styled.div``;

export const Header = styled.header`
  height: 8rem;
  width: 100vw;

  display: flex;
  align-items: center;

  background: var(--color-header-background);
  color: var(--color-header-text);
`;

export const HeaderText = styled.a`
float: left;
color: white;
text-align: center;
padding: 12px;
text-decoration: none;
font-size: 18px;
line-height: 25px;
border-radius: 4px;
`;

export const Background = styled.div`
  height: 4.9rem;
  width: 100vw;

  background: url(${backgroundImage}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Content = styled.div`
  min-height: calc(90vh - 10rem);
  width: 90vw;

  position: absolute;
  top: 10rem;
  left: calc(5vw);

  padding: 2rem;

  border-radius: 0.5rem;

  background: var(--color-content-background);
  color: var(--color-content-text);
`;
