import { useContext } from 'react';

import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { TransactionsContext } from '../../context/TransactionsContext';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
