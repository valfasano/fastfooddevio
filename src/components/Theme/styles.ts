import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  * {
    margin: 50;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  @media only screen and (max-device-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Page = styled.div`
  .app {
    margin: 0 auto;
    max-width: 1000px;
    width: 100vw;
  }
`;
