import React from 'react';
import BaseModal from 'components/BaseModal/BaseModal';

// eslint-disable-next-line react/prop-types
const ModalDetails = ({ history }) => (
  <BaseModal onClose={() => history.goBack()}>
    <h1>
      ModalDetails
      <span aria-label="celebration" role="img">
        🎉
      </span>
    </h1>
  </BaseModal>
);

export default ModalDetails;
