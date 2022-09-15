/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import * as C from './App.styles';
import { Theme } from './components/Theme';
import Products from './components/Data';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Kitchen from './pages/Kitchen';

interface CartItem {
  quantity: number;
  price: number;
  id: number;
}

function App(): JSX.Element {
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);
  const [itemId, setItemId] = useState('');
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartQuantity, setCartQuantity] = useState(0);

  const search = (data: any[]) => {
    return data.filter(
      (item: { name: string; id: number; category: string }) =>
        item.name.toLowerCase().includes(query) ||
        item.id.toString().startsWith(query) ||
        item.category.includes(query),
    );
  };

  const prd = Products?.find(el => el.id?.toString() === itemId);

  const handleClick = (idItem: string) => {
    setModal(true);
    setItemId(idItem);
    setTotal(total + prd!.price);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  return (
    <Theme>
      <C.Container>
        <div className="app">
          <div>
            <h2 className="welcome">Seja bem vindo!</h2>
            <input
              type="text"
              placeholder="O que você procura?"
              className="search"
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          <C.Categories>
            <h2>Categorias</h2>
            <p>Navegue por categoria</p>
            <div className="categorias" id="myBtnContainer">
              <div
                className="categorias--categoria"
                onClick={() => setQuery('Combo')}
              >
                <img
                  src="https://i.postimg.cc/P5nBLgV2/Combo.png"
                  alt="combo"
                  height="80"
                />
                <h3>Combos</h3>
              </div>
              <div className="categorias--categoria">
                <img
                  src="https://i.postimg.cc/bwrzx2qJ/batata.png"
                  height="80"
                  alt="petiscos"
                  onClick={() => setQuery('Acompanhamento')}
                />
                <h3>Acompanhamentos</h3>
              </div>
              <div className="categorias--categoria">
                <img
                  src="https://i.postimg.cc/1tLfDRq8/bebidaspng.png"
                  height="80"
                  alt="refrigerantes"
                  onClick={() => setQuery('Bebida')}
                />
                <h3>Bebidas</h3>
              </div>
              <div className="categorias--categoria">
                <img
                  src="https://i.postimg.cc/JnCfX9h1/acai.png"
                  alt="sobremesas"
                  height="80"
                  onClick={() => setQuery('Sobremesa')}
                />
                <h3>Sobremesas</h3>
              </div>
            </div>
          </C.Categories>

          <div>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
          </div>
          <div className="container">
            {search(Products).map(item => (
              <C.Show>
                <div
                  className="products"
                  id={item.category}
                  onClick={() => handleClick(item.id.toString())}
                  key={item.id}
                >
                  <img src={item.img} alt={item.name} width="80" />
                  <div className="description">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <h4>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </h4>
                  </div>
                </div>
              </C.Show>
            ))}
          </div>

          {cartQuantity > 0 && (
            <Cart item={prd!.name} price={prd!.price} quantity={quantity} />
          )}

          <div className="buttons">
            <button
              type="button"
              className="cancelar"
              disabled={!(cartQuantity > 0)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="finalizar"
              disabled={!(cartQuantity > 0)}
            >
              Finalizar Pedido
            </button>
          </div>
        </div>

        {modal && (
          <Modal onClick={() => setModal(false)}>
            <div className="productSection">
              <div className="picture" id={prd?.category}>
                <img src={prd?.img} alt={prd?.category} width="80" />
                <p>foto</p>
              </div>
              <div className="info">
                <h4>{prd?.name}</h4>
                <p>{prd?.description}</p>
                <div className="increment">
                  <button onClick={() => decrement()}> - </button>
                  <input type="number" readOnly value={quantity} />
                  <button onClick={() => increment()}> + </button>
                </div>
              </div>
              <h3>
                {prd?.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h3>
            </div>
          </Modal>
        )}
      </C.Container>
    </Theme>
  );
}

export default App;
