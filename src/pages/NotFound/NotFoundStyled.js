import styled, { css, keyframes } from 'styled-components';
import * as Colors from 'styles/Variables';
import * as Typo from 'styles/Typography';

const testAnimation = keyframes`
  90% {
    transform: translateY(calc(100vh - 160px)) scaleY(0.25);
  }
  100% {
    transform: translateY(calc(100vh + 160px)) scaleY(1);
  }
`;

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TextBlockStyled = styled.div`
  position: relative;
  text-align: center;
  z-index: 10;

  h1 {
    margin: 0;
    font-size: 8rem;
    letter-spacing: -0.1em;
  }
  h2 {
    font-size: ${Typo.FZ26};
    margin: 1rem 0;
  }
`;

export const BackgroundStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const BackgroundLineStyled = styled.div`
  position: relative;
  width: 1px;
  height: 100%;
  background: #ededed;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1px;
    left: -1px;
    width: 3px;
    height: 160px;
    background: ${Colors.AccentLight};
    transform: translateY(-160px);
    animation-name: ${testAnimation};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 3s;
    animation-delay: 0.2s
      ${props =>
        props.order === 2 &&
        css`
          animation-duration: 2s;
          animation-delay: 0.7s;
        `};
    ${props =>
      props.order === 3 &&
      css`
        animation-duration: 3s;
        animation-delay: 0.9s;
      `};

    ${props =>
      props.order === 4 &&
      css`
        animation-duration: 2s;
        animation-delay: 1.2s;
      `};
  }
`;

export const ImageStyled = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 400px;
`;
