/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
import { Container } from './styles';
import { Theme } from '../../components/Theme';

export function Withdrawal() {
  return (
    <Theme>
      <Container className="retirada main">
        <section>
          <section className="preparando">
              <h2>Preparando:</h2>
              <h1>Amanda</h1>
              <h1>Luiz</h1>
              <h1>Mariana</h1>
          </section>
        </section>
          <section className="pedidoPronto">
              <h2>Pronto:</h2>
             <div className="done">
              <h1>Morgana</h1>
             </div> 
          </section>
      </Container>
    </Theme>
  );
}
