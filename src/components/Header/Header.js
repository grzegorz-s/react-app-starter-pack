import React from 'react';
import { StyledHeader, StyledHeaderCol, TitleStyled } from './HeaderStyled';

const Header = () => (
  <StyledHeader>
    <StyledHeaderCol>
      <TitleStyled>React App Starter Pack</TitleStyled>
    </StyledHeaderCol>
    <StyledHeaderCol />
    <StyledHeaderCol />
  </StyledHeader>
);

export default Header;
