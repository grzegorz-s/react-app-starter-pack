import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalWrapperStyled,
  ModalBody,
  ModalBackdrop
} from './BaseModalStyled';

const BaseModal = ({ onClose, children }) => (
  <ModalWrapperStyled>
    <ModalBody>{children}</ModalBody>
    <ModalBackdrop onClick={onClose} />
  </ModalWrapperStyled>
);

BaseModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
};

BaseModal.defaultProps = {
  children: null,
  onClose: () => {}
};

export default BaseModal;
