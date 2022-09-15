/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container } from './styles';

interface Props {
  item: string;
  price: number;
  quantity: number;
}

function Cart(props: Props) {
  return (
    <Container>
      <ul>
        <li>
          <p>{props.quantity}</p>
          <p>{props.item}</p>
          <p>{props.price}</p>
        </li>
      </ul>
      <section className="total">
        Total do pedido:
        <span>{props.price * props.quantity}</span>
      </section>
    </Container>
  );
}

export default Cart;
