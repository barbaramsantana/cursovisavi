import styled from 'styled-components';

interface IItemImageProps {
  opacity: number;
}

export const Container = styled.div``;

export const ContainerMap = styled.div`
  display: flex;

  path:hover {
    fill: black;
  }
`;

export const ContainerTooltip = styled.div``;
export const ContainerTooltipCity = styled.h1``;
export const ContainerTooltipConfirmeds = styled.h2``;

export const ContainerLegend = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div``;

export const ItemImage = styled.div<IItemImageProps>`
  width: 1rem;
  height: 1rem;

  border-radius: 50%;

  background-color: #11183d;
  opacity: ${props => props.opacity};
  justify-content: center;
`;

export const ItemText = styled.div``;
