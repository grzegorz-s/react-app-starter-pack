import styled, { css } from 'styled-components';
import * as Colors from 'styles/Variables';
import * as Typo from 'styles/Typography';
import { rgba } from 'polished';

export const ButtonStyled = styled.button`
  display: inline-block;
  border: 0;
  padding: 10px 14px;
  background: #fff;
  border: 1px solid ${Colors.Border};
  border-radius: 4px;
  color: ${Colors.Black};
  font-size: ${Typo.FZ12};
  text-align: center;
  cursor: pointer;

  ${props =>
    props.type === 'primary' &&
    css`
      background: ${Colors.Primary};
      border-color: ${Colors.Primary};
      color: ${Colors.White};
    `}

  ${props =>
    props.type === 'secondary' &&
    css`
      background: ${Colors.Secondary};
      border-color: ${Colors.Secondary};
      color: ${Colors.White};
    `}

  ${props =>
    props.size === 'small' &&
    css`
      padding: 6px 10px;
    `}

  ${props =>
    props.size === 'big' &&
    css`
      padding: 14px 20px;
      font-weight: ${Typo.FW700};
      letter-spacing: 0.085em;
    `}

  ${props =>
    props.mode === 'border' &&
    css`
      background: #fff;
      color: ${Colors.Black};
    `}
  
  ${props =>
    props.mode !== 'normal' &&
    props.type === 'primary' &&
    css`
      color: ${Colors.Primary};
    `}

  ${props =>
    props.mode !== 'normal' &&
    props.type === 'secondary' &&
    css`
      color: ${Colors.Secondary};
    `}

    ${props =>
      props.mode === 'flat' &&
      css`
        background: #fff;
        border: none;
        box-shadow: 0px 3px 6px -5px ${rgba(0, 0, 0, 0.4)};
      `}

    ${props =>
      props.layout === 'wide' &&
      css`
        width: 230px;
      `};

    ${props =>
      props.layout === 'block' &&
      css`
        display: block;
        width: 100%;
      `};

    ${props =>
      props.radius === 'none' &&
      css`
        border-radius: 0;
      `};
    
    ${props =>
      props.radius === 'big' &&
      css`
        border-radius: 20px;
      `};
`;

export const LinkStyled = styled.a`
  ${ButtonStyled}
`;
