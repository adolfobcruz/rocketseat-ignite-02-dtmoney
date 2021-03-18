import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 400;

    background: var(--input-background);

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;

    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 600;

    color: var(--shape);
    background: var(--green);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;