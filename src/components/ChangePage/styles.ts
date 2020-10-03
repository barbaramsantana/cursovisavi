import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.div`
  height: calc(90vh - 10rem);
  width: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 10rem;

  &.before {
    left: 1rem;
  }

  &.next {
    right: 0rem;
  }

  &.disabled {
    pointer-events: none;
  }

  svg {
    height: 5rem;
    width: 5rem;

    color: var(--color-content-button-before-after-enabled);

    cursor: pointer;
  }

  &.disabled svg {
    color: var(--color-content-button-before-after-disabled);
    cursor: initial;
  }
`;
