/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container } from './styles';
import { Theme } from '../../components/Theme';

export function Kitchen() {
  const pedidosPreparando = [{
    preparando: '148 - Amanda',
    description: 'Combo Lady Gaga',
    }, {
    preparando: '149 - Luiz',
    description: 'Açaí',
    }, {
    preparando: '150 - Mariana',
    description: 'Combo Gisele Bündchen',
    }]
  const pedidosProntos = [{
    pronto: '147 - Morgana',
    description: 'Combo Luisa Mell',
    }]
  return (
    <Theme>
      <Container className="retirada main">
        <aside>
          <h2 className="preparando"> Preparando: </h2>
            <ul>
            {pedidosPreparando.map((cliente, index) => (
              <li>
                <h3 className="pedidosPreparando"> {cliente.preparando}
                <div className="descPedidosPreparando"> {cliente.description} </div>
                </h3>
              </li>
            ))}
           </ul>
          <div className="observacoes">
          <h4>Observações do próximo pedido: 148</h4>
          <textarea
            name="observations"
            id="obs"
            placeholder="Por favor, retire a alface."
          />
        </div>
        </aside>     
        <aside>
            <h2 className="pronto"> Pronto: </h2>
            <ul>
              {pedidosProntos.map((cliente, index) => (
                <li>
                  <h3 className="pedidosPronto"> {cliente.pronto} 
                  <div className="descPedidosPronto"> {cliente.description} </div>
                  </h3>
                </li>
              ))}
            </ul>
          </aside>
      </Container>
    </Theme>
  )
}

  export default Kitchen;

