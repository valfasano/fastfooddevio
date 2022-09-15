import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    list-style-type: none;
  }
  .main {
    padding: 1rem;
  }
  .pronto {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .retirada {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  h2 {
    font-size: 25px;
    margin-top: 0.5rem;
  }
  h4 {
    margin-top: 2rem;
    font-size: 13px;
    margin-left: 2%;
  }
  .preparando {
    margin-top: 2rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  .observacoes textarea {
    width: 270px;
    height: 90px;
    border-radius: 10px;
    background: #f4f4f4;
    padding: 15px;
    font-weight: bold;
    font-size: 13px;
    resize: none;
    margin-top: -1rem;
  }
  .pedidosPreparando {
    width: 270px;
    height: 90px;
    border-radius: 10px;
    background: #f4f4f4;
    padding: 15px;
    font-weight: bold;
    font-size: 17px;
    resize: none;
  }
  .pedidosPronto {
    width: 270px;
    height: 90px;
    border-radius: 10px;
    background: #edcfda;
    padding: 15px;
    font-weight: bold;
    font-size: 17px;
    resize: none;
    border-style: solid;
    border-color: #a61149;
  }
  @media only screen and (min-width: 900px) {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: top;
    padding: 2rem;
    justify-content: space-between;
    white-space: nowrap;
    .preparando {
      margin-left: 100%;
    }
    .pedidosPreparando {
      margin-left: 100%;
    }
    .imgPedidosPreparando img {
      margin-left: 100%;
      padding: 0;
    }
    .pronto {
      margin-top: 1.5rem;
      margin-left: -100%;
    }
    .pedidosPronto {
      margin-left: -100%;
    }
    .imgPedidosPronto {
      margin-left: -100%;
    }
    h2 {
      font-size: 50px;
      margin-top: 0.5rem;
    }
    h3 {
      font-size: 40px;
    }
    .observacoes textarea {
      width: 350px;
      height: 100px;
      border-radius: 10px;
      background: #f4f4f4;
      font-size: 16px;
      resize: none;
      margin-top: -1rem;
      margin-left: 100%;
    }
    .pedidosPreparando {
      width: 350px;
      height: 100px;
      border-radius: 10px;
      background: #f4f4f4;
      padding: 15px;
      font-weight: bold;
      font-size: 20px;
      resize: none;
    }
    .pedidosPronto {
      width: 350px;
      height: 100px;
      border-radius: 10px;
      background: #edcfda;
      padding: 15px;
      font-weight: bold;
      font-size: 20px;
      resize: none;
    }
    h4 {
      margin-top: 5rem;
      margin-left: 101%;
      font-size: 17px;
    }
  }
`;
