import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  height: 60px;
  padding: 0;
  background: #a61149;
  color: #fff;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90px;
    margin-left: 3rem;
  }
  .logo img {
    height: 30px;
    width: 30px;
    background-color: #fff;
    border-radius: 50%;
    padding: 3px;
  }
  .logo h1 {
    font-size: 20px;
    margin-left: 1rem;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 20rem;
    margin-right: 3rem;
  }
  .navBar a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    padding: 1px;
  }
  .navBar button {
    display: none;
  }
  .ativo {
    background-color: #a61149;
    border-radius: 5px;
  }
  @media only screen and (max-device-width: 600px) {
    .logo {
      margin-left: 1rem;
    }
    .navBar {
      position: relative;
    }
    .navBar button {
      display: initial;
      position: absolute;
      right: 30px;
      top: 0;
      background: none;
      border: none;
      color: #fff;
      line-height: 1px;
      font-weight: bold;
      z-index: 10;
      cursor: pointer;
    }
    .menuNav {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: scroll;
      list-style: none;
      position: fixed;
      margin: 0;
      top: 0;
      background: #a61149;
      right: 0;
      bottom: 0;
      height: 100vh;
      width: 0;
      overflow: hidden;
      max-width: 290px;
      z-index: 9;
    }

    .menuNav.showMenu {
      width: 50%;
    }

    li {
      display: block;
      padding: 10px 40px;
      text-decoration: none;
      color: #a61149;
      text-transform: uppercase;
      font-weight: bold;
      margin-right: 1rem;
    }

    .menuNav li:first-child {
      margin-top: 0;
    }
  }
`;
