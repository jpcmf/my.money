import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api
      .get('/transactions')
      .then((response: { data: any }) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dev site</td>
            <td className="deposit">R$12.0000</td>
            <td>Freela</td>
            <td>03/02/2021</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td className="withdraw">- R$120</td>
            <td>Home</td>
            <td>12/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
