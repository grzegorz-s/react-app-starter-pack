import React from 'react';
import { withRouter } from 'react-router-dom';
import paths from 'utils/definedPaths';
import { SidebarStyled, NavbarStyled, LinkStyled } from './NavbarStyled';

const Navbar = () => (
  <SidebarStyled>
    <NavbarStyled>
      <ul>
        {paths.map(node => (
          <LinkStyled key={node.key} to={node.path}>
            {node.name}
          </LinkStyled>
        ))}
      </ul>
    </NavbarStyled>
  </SidebarStyled>
);

export default withRouter(Navbar);
