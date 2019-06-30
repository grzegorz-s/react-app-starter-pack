import styled from 'styled-components';
import { rgba } from 'polished';
import * as Colors from 'styles/Variables';

export const ModalWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${rgba(0, 0, 0, 0.9)};
  cursor: pointer;
`;

export const ModalBody = styled.div`
  position: relative;
  max-width: 70vw;
  width: 100%;
  max-height: 50vh;
  padding: 20px;
  border-radius: 4px;
  background: ${Colors.White};
  z-index: 10;
`;
