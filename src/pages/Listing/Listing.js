import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import { ButtonStyled } from 'components/BaseButton/BaseButtonsStyled';
import ModalDetails from 'pages/ModalDetails/ModalDetails';
import { LinksRowStyled } from './ListingStyled';

const Listing = ({ match }) => {
  return (
    <div>
      <h1>Listing</h1>
      <LinksRowStyled>
        <ButtonStyled as={Link} to="/details/asd" type="primary" mode="normal">
          Details as new page
        </ButtonStyled>
        <ButtonStyled
          as={Link}
          to={`${match.path}/qwe`}
          type="primary"
          mode="normal"
        >
          Details in Modal
        </ButtonStyled>
      </LinksRowStyled>
      <Route
        path={`${match.path}/:someId`}
        render={props => <ModalDetails {...props} />}
      />
    </div>
  );
};

Listing.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({}),
    path: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Listing;
