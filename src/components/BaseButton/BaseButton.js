import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './BaseButtonsStyled';

export const styleProps = {
  allowedTypes: ['default', 'primary', 'secondary'],
  defaultType: 'default',
  allowedSizes: ['normal', 'small', 'big'],
  defaultSize: 'normal',
  allowedLayouts: ['normal', 'wide', 'block'],
  defaultLayout: 'normal',
  allowedModes: ['normal', 'border', 'flat'],
  defaultMode: 'normal',
  allowedRadius: ['none', 'small', 'big'],
  defaultRadius: 'small'
};

const BaseButton = ({
  type,
  size,
  mode,
  layout,
  radius,
  onClick,
  children
}) => {
  return (
    <ButtonStyled
      type={type}
      size={size}
      mode={mode}
      layout={layout}
      radius={radius}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

BaseButton.propTypes = {
  type: PropTypes.oneOf(styleProps.allowedTypes),
  size: PropTypes.oneOf(styleProps.allowedSizes),
  layout: PropTypes.oneOf(styleProps.allowedLayouts),
  mode: PropTypes.oneOf(styleProps.allowedModes),
  radius: PropTypes.oneOf(styleProps.allowedRadius),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

BaseButton.defaultProps = {
  type: styleProps.defaultType,
  size: styleProps.defaultSize,
  layout: styleProps.defaultLayout,
  mode: styleProps.defaultMode,
  radius: styleProps.defaultRadius,
  onClick: null,
  children: null
};

export default BaseButton;
