import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding: 2rem 1rem 8.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: var(--blue-light);
    border-radius: 0.25rem;
    border: 0;
    color: var(--text-button);
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
