import styled from 'styled-components';
import * as Colors from 'styles/Variables';
import { StyledHeading } from 'styles/Typography';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 66px;
  padding: 10px 26px;
  background: ${Colors.Accent};
`;

export const StyledHeaderCol = styled.div`
  flex: 1;
`;

export const TitleStyled = styled(StyledHeading)`
  color: ${Colors.White};
`;
