import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import CapturePathsLayer from 'components/CapturePathsLayer/CapturePathsLayer';
import Header from 'components/Header/Header';
import Nav from 'components/Navbar/Navbar';
import DefinedRoutes from 'utils/definedRoutes';
import { StyledAppContent, StyledLayoutRow } from 'styles/StyledLayout';

const App = () => (
  <Router>
    <Switch>
      <CapturePathsLayer>
        <Header />
        <StyledLayoutRow>
          <Nav />
          <StyledAppContent>
            <DefinedRoutes />
          </StyledAppContent>
        </StyledLayoutRow>
      </CapturePathsLayer>
    </Switch>
  </Router>
);

export default App;
