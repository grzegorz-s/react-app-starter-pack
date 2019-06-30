import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const AnimatedRoute = props => (
  <AnimatedRouteStyled>
    <Route {...props} />
  </AnimatedRouteStyled>
);

const AnimatedRouteStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
`;

export default AnimatedRoute;
