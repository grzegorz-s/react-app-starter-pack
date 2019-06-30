import React from 'react';
import { withRouter } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';

const CapturePathsLayer = withRouter(({ children, location }) => {
  return location && location.state && location.state.notFoundError ? (
    <NotFound />
  ) : (
    children
  );
});

export default CapturePathsLayer;
