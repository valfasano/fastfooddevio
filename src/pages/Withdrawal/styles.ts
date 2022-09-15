import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  .main {
    padding: 1rem;
  }
  .retirada {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .retirada p {
    margin: 0;
  }
  h1 {
    font-size: 45px;
    margin-top: 0.5rem;
  }
  h2 {
    font-size: 35px;
  }
  .preparando {
    margin-top: 2rem;
    margin-left: -2rem;
  }
  .pedidoPronto {
    margin-top: 4rem;
    margin-left: -2rem;
  }
  .done h1 {
    color: #a61149;
  }
  @media only screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: top;
    .pedidoPronto {
      margin-top: 0;
      margin-left: 40%;
    }
    .main {
      padding: 1rem;
    }
    h1 {
      font-size: 90px;
    }
    h2 {
      font-size: 70px;
    }
    .preparando {
      margin-left: 40%;
      height: 70vh;
      margin-right: -100%;
      border-right: 7px solid #a61149;
    }
  }
`;
