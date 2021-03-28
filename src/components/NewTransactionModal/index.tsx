import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, ButtonTypeWrapper } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
          <button type="button">
            <img src={incomeImg} alt="income" />
            <span>Incoming</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </button>
        </ButtonTypeWrapper>
        <input type="text" placeholder="Category" />
        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}
