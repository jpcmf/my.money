import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, ButtonTypeWrapper, ButtonRadio } from './styles';

import TransactionDataService from '../../services/firebase.service';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleSetTypeDeposit() {
    setType('deposit');
  }

  function handleSetTypeWithDraw() {
    setType('withdraw');
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    const data = { title, amount, category, type };

    await TransactionDataService.create(data)
      .then(() => {
        console.log('ok, created.');
      })
      .catch((err) => {
        console.log(err);
      });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <ButtonTypeWrapper>
          <ButtonRadio
            type="button"
            onClick={handleSetTypeDeposit}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="income" />
            <span>Incoming</span>
          </ButtonRadio>
          <ButtonRadio
            type="button"
            onClick={handleSetTypeWithDraw}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </ButtonRadio>
        </ButtonTypeWrapper>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}
