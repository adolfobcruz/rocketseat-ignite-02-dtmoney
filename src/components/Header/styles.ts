import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 10rem;

  button {
    height: 3rem;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;