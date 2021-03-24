import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      line-height: 1.5rem;
      padding: 0 2rem 0.75rem 2rem;
      text-align: left;
    }

    td {
      background-color: var(--shape);
      border-radius: var(--border);
      border: 0;
      color: var(--text-body);
      padding: 1.2rem 2rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
