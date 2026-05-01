import styled from 'styled-components';

export const Dev = styled.div`
  background-color: #1f1f1f;
  padding: 5px;
  display: flex;
  justify-content: center;
  color: #bdbdbdd8;
  border-top: solid 1px #bdbdbdd8;
  font-size: 10px;
`;

export const Grid = styled.div`
  position: relative;
  width: 100%;
  padding: 2% 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #1f1f1f;
  color: #fff;
  font-size: 12px;
  bottom: 0;
  z-index: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
  color: #fff;
  transform: translateX(-4%);

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    transform: translateX(35%);

    &:hover {
      font-weight: 600;
    }
  }

  .mercado-pago {
    width: 80%;
    border-radius: 15px;
    align-self: center;
  }
`;

export const SocialsGrid = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(3, 40px);
  justify-content: center;
  align-items: center;
  transform: translateX(2%);
  gap: 20px;
`;
