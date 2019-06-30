import React from 'react';
import { Redirect, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AnimatedRoute from 'components/AnimatedRoute/AnimatedRoute';
import Home from 'pages/Home/Home';
import Listing from 'pages/Listing/Listing';
import Details from 'pages/Details/Details';

// needed for not animinating details if thay are nested
// excample with details in modal - first part of pathname stays the same
// animation can be handled than separatly
const getMainRouteName = pathname => {
  return pathname.split('/')[1];
};

const DefinedRoutes = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={getMainRouteName(location.pathname)}
        timeout={300}
        appear
        classNames="fade"
      >
        <Switch>
          <AnimatedRoute path="/" exact component={Home} />
          <AnimatedRoute path="/listing" component={Listing} />
          <AnimatedRoute
            path="/details/:someId"
            render={props => <Details {...props} />}
          />
          <Redirect
            to={{ pathname: '/upss', state: { notFoundError: true } }}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default DefinedRoutes;
