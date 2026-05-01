import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 80px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: #1f1f1f;
  color: #fff;
  font-size: 12px;
`;

export const Navigation = styled.nav``;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#b7b7b7' : '#FFFFFF')};
  border-bottom: ${(props) => (props.$isActive ? '1px solid #b7b7b7' : 'none')};
  font-weight: 700;
  padding: 5px;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: ${(props) => (props.$isLogged ? 'default' : 'pointer')};
  }

  span {
    font-weight: 700;

    &:hover {
      opacity: 0.5;
    }

    &:active {
      opacity: 0.3;
    }
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: red;
  font-weight: 500;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const OrderButton = styled(Link)`
  display: flex;
  align-items: center;
  border: none;
  color: ${(props) => (props.$isActive ? '##b7b7b7' : '#FFFFFF')};
  border-bottom: ${(props) => (props.$isActive ? '1px solid #b7b7b7' : 'none')};
  gap: 5px;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;
