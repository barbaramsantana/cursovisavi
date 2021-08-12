import styled from 'styled-components';

interface IItemImageProps {
  opacity: number;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10fr 8fr;
`;
export const ContainerMapLegend = styled.div`
background-color: #F5F5F5;
`;
export const PathSE = styled.path`
  width="1000px";
  height="1000px";
  fill: green;

  path:hover{
    fill: red;
  }
`;
export const ContainerMap = styled.div`
  display: flex;
  margin-left: 1rem;
  justify-content: center;

  fill: #11183D;
`;
export const ContainerGraph = styled.div`
display: grid;
grid-template-colum: 1fr;
`;

export const ContainerTooltip = styled.div`
text-align: right;
margin-right: 2rem;
`;
export const ContainerTooltipCity = styled.h1``;
export const ContainerTooltipConfirmeds = styled.h2``;

export const ContainerLegend = styled.div`
  width: 1rem;
  height: 5rem;
  margin-left: 1rem;
 

  display: grid;
  grid-template-columns: 0fr;
`;

export const Item = styled.div``;
export const NameCity = styled.div`
  font-size: 3.5rem;
  text-align: center;
  color: red; 
  margin-botton: -2rem;
`;

export const ItemImage = styled.div<IItemImageProps>`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 100rem;

  background-color: #11183d;
  opacity: ${props => props.opacity};
  justify-content: center;
`;

export const ItemText = styled.div`
font-size: 1rem;
`;
export const Observacao = styled.p`
  font-size: 3rem;
  text-align: center;
  color:red;

  margin-bottom: 1rem;
`;
