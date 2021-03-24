import { Container, Content } from './styles';
import logoImg from '../../assets/mymoney.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="my.money" />
        <button>New transaction</button>
      </Content>
    </Container>
  );
}
