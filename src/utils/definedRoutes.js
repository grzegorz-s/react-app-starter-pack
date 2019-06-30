import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from 'pages/Home/Home';
import Listing from 'pages/Listing/Listing';
import Details from 'pages/Details/Details';

const AnimatedRoute = props => (
  <div
    className="yolo"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: '20px',
      WebkitBackfaceVisibility: 'hidden'
    }}
  >
    <Route {...props} />
  </div>
);

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
