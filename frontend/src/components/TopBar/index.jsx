import {
  Container,
  HeaderLink,
  Navigation,
  Options,
  Profile,
  LogoutButton,
  OrderButton,
} from './styles';
import {
  Logout,
  Person,
  PersonOutlined,
  ShoppingCart,
} from '@mui/icons-material';
import { useCallback, useMemo } from 'react';
import { useUser } from '../../hooks/userContext';
import { useResolvedPath } from 'react-router-dom';

export function TopBar() {
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();

  const isLogged = useMemo(() => Boolean(userInfo?.name), [userInfo]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Container>
      <Navigation>
        <HeaderLink to='/' $isActive={pathname === '/'}>
          Home
        </HeaderLink>
      </Navigation>
      <Options>
        <Profile $isLogged={isLogged}>
          {isLogged ? <Person /> : <PersonOutlined />}
          {isLogged ? <span>Olá, {userInfo.name}</span> : 'Entrar / Registrar'}
        </Profile>
        {isLogged && (
          <OrderButton to='/cart' $isActive={pathname === '/cart'}>
            <ShoppingCart />
            Pedidos
          </OrderButton>
        )}
        {isLogged && (
          <LogoutButton onClick={handleLogout}>
            <Logout /> Sair
          </LogoutButton>
        )}
      </Options>
    </Container>
  );
}
