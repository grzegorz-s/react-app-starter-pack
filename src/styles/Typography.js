import styled from 'styled-components';
import * as colors from './Variables';

export const FZ10 = '0.65rem';
export const FZ12 = '0.85rem';
export const FZ14 = '1rem';
export const FZ16 = '1.14rem';
export const FZ18 = '1.28rem';
export const FZ26 = '1.86rem';

export const FW300 = '300';
export const FW400 = '400';
export const FW700 = '700';

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: ${FZ16};
`;

export const StyledHeading = styled.h3`
  font-size: ${FZ18};
  font-weight: ${FW300};
  line-height: 1.2;
  color: ${colors.Black};
`;
