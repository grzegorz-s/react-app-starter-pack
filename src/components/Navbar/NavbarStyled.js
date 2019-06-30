import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Colors from 'styles/Variables';
import * as Typo from 'styles/Typography';

export const SidebarStyled = styled.div`
  display: flex;
  flex: 0 0 240px;
  background: ${Colors.LightGray};
  height: calc(100vh - 66px);
  overflow: hidden;
`;

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 100px;

  ul {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const LinkStyled = styled(Link)`
  margin: 0 16px;
  padding: 10px 10px;
  color: ${Colors.Black};
  font-size: ${Typo.FZ14};
  text-transform: uppercase;
  transition: color ease-in 0.1s, transform ease-in 0.2s;

  &:hover {
    color: ${Colors.Accent};
    transform: translateX(5px);
  }
`;
