/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Cart from '../Cart';
import { Container } from './styles';

interface IModal {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

interface cart {
  item: string;
  price: number;
  quantity: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Modal(props: IModal, cart: cart) {
  return (
    <Container>
      <div className="overlay" />
      <div className="popUp">
        <div className="popUp--header">
          <h2>Revise seu pedido!</h2>
          <button type="button" onClick={props.onClick}>
            X
          </button>
        </div>
        {props.children}
        <div className="adicionais">
          <h4>Adicionais</h4>
          <h5>
            Selecione os ingredientes que você quer adicionar a mais no seu
            lanche
          </h5>
          <div className="ingrediente">
            <img
              src="https://i.postimg.cc/6Qr1FKRF/cheddar.png"
              width="100"
              alt="Cheddar"
            />
            <div className="details">
              <h5>Cheddar</h5>
              <p>10g</p>
            </div>
            <h4>R$ 1,00</h4>
            <input type="checkbox" />
          </div>
        </div>
        <div className="obs">
          <h4>Observações:</h4>
          <textarea
            name="observations"
            id="obs"
            placeholder="Adicione uma observação ao seu pedido"
          />
        </div>
        <Cart item={cart.item} price={cart.price} quantity={cart.quantity} />
        <div className="buttons">
          <button type="button" className="cancelar">
            Cancelar
          </button>
          <button type="submit" className="finalizar">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Modal;
