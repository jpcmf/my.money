import { Container, Content } from './styles';
import logoImg from '../../assets/mymoney.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="my.money" />
        <button onClick={onOpenNewTransactionModal}>New transaction</button>
      </Content>
    </Container>
  );
}
