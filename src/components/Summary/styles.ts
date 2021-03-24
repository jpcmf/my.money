import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -6.75rem;

  div {
    background-color: var(--shape);
    border-radius: var(--border);
    color: var(--text-title);
    padding: 1.32rem 2rem;

    &:last-child {
      background-color: var(--green);
      color: var(--white);
    }

    header {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 0.87rem;
      font-size: 2rem;
      font-weight: normal;
    }
  }
`;
