import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 2rem;
  min-height: 10rem;
  ul {
    min-height: 5rem;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
  .total {
    border-top: 1px dashed #9f9f9f;
    height: 4.5rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    opacity: 0;
    font-size: 24px;
    font-weight: bold;
  }
`;
