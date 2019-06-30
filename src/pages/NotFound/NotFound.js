import React from 'react';
import { Link } from 'react-router-dom';

import travaolta from 'assets/images/travolta.gif';
import { ButtonStyled } from 'components/BaseButton/BaseButtonsStyled';
import {
  SectionStyled,
  TextBlockStyled,
  BackgroundStyled,
  BackgroundLineStyled,
  ImageStyled
} from './NotFoundStyled';

const NotFound = () => (
  <SectionStyled>
    <TextBlockStyled>
      <h1>404</h1>
      <h2>Page not found</h2>
      <ButtonStyled
        as={Link}
        to="/"
        type="primary"
        size="big"
        mode="border"
        layout="wide"
      >
        Home page
      </ButtonStyled>
    </TextBlockStyled>
    <BackgroundStyled>
      {[...Array(4).keys()].map(el => (
        <BackgroundLineStyled key={el} order={el + 1} />
      ))}
    </BackgroundStyled>
    <ImageStyled src={travaolta} alt="No page found Travolta gif" />
  </SectionStyled>
);

export default NotFound;
