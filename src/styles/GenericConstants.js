import { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import * as colors from './Variables';

const shake = keyframes`
  0% { transform: translate(6px) }
  20% { transform: translate(-6px) }
  40% { transform: translate(3px) }
  60% { transform: translate(-3px) }
  80% { transform: translate(1px) }
  100% { transform: translate(0px) }
`;

export const shakeAnitmation = css`
  animation: ${shake} 0.4s 1 linear;
`;
export const errorBorder = css`
  border: 1px solid ${colors.ButtonError};
  box-shadow: 0 0 10px ${rgba(colors.ButtonError, 0.2)};
  ${shakeAnitmation}
`;
export const CubicTransition = 'cubic-bezier(0.35, 1.15, 1, 1)';
