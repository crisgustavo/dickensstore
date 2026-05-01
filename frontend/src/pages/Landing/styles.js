import styled from 'styled-components';

import headerBackground from '../../assets/headerBackground.png';

export const Header = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.$isCollapsed ? 'space-evenly' : 'center'};
  position: fixed;
  width: 100%;
  height: ${(props) => (props.$isCollapsed ? '150px' : '45px')};
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: center;
  padding: 10px 50px;
  align-items: center;

  transition: 0.3s ease-in-out;

  img {
    height: ${(props) => (props.$isCollapsed ? '100%' : '170%')};
    transition: 0.5s;
  }
`;
