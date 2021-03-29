import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, ButtonTypeWrapper, ButtonRadio } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  function handleSetTypeDeposit() {
    setType('deposit');
  }

  function handleSetTypeWithDraw() {
    setType('withdraw');
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
      <Container>
        <h2>Add transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" />
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
        <input type="text" placeholder="Category" />
        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}
