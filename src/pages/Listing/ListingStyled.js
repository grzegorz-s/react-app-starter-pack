import styled from 'styled-components';

import { ButtonStyled } from 'components/BaseButton/BaseButtonsStyled';

export const LinksRowStyled = styled.div`
  display: flex;

  ${ButtonStyled} + ${ButtonStyled} {
    margin-left: 20px; 
  }
`;
