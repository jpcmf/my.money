import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background-color: var(--input-bg);
    border-radius: var(--border);
    border: solid 1px var(--input-border);
    font-size: 1rem;
    font-weight: 400;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    background-color: var(--green);
    border-radius: var(--border);
    border: 0;
    color: var(--white);
    font-size: 1rem;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ButtonTypeWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem 0;

  button {
    align-items: center;
    background-color: var(--input-bg);
    border-radius: var(--border);
    border: solid 1px var(--input-border);
    display: flex;
    height: 4rem;
    justify-content: center;

    &:hover {
      border-color: ${darken(0.2, '#d7d7d7')};
    }

    img {
      margin-right: 1rem;
    }

    span {
      color: var(--text-title);
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
