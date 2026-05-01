import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { TopBar } from '../components/TopBar';
import { Footer } from '../components/Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  margin-top: 35px;
  flex: 1;
`;

export function Layout() {
  return (
    <LayoutWrapper>
      <TopBar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </LayoutWrapper>
  );
}
