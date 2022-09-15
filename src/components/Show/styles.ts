import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  .products {
    position: relative;
    width: 170px;
    height: 210px;
    margin: 2rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all-ease transform 0.5s;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
  }
  .products:hover {
    -webkit-animation: shadow-drop-center 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: shadow-drop-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  #Combo {
    background-color: #f86666;
  }
  #Acompanhamento {
    background: #135c13;
  }
  #Acompanhamento img {
    width: 120px;
    left: 25px;
  }
  #Bebida {
    background: #ffeb70;
  }
  #Bebida img {
    width: 150px;
    left: 10px;
  }
  #Sobremesa {
    background: #5395d9;
  }
  .description {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%;
    height: 65%;
    bottom: 0;
    border-radius: 10px;
  }
  .products img {
    position: absolute;
    top: 20px;
    left: 35px;
    width: 100px;
    z-index: 2;
  }
  .products h4 {
    margin-bottom: 1rem;
    font-size: 14px;
  }
  .products h5 {
    margin-top: 2.5rem;
    font-size: 14px;
  }
  p {
    font-size: 11px;
    margin: 5px 20px;
  }
  @-webkit-keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
`;
