import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../styles/_index.scss';

import BaseButton, { styleProps } from './BaseButton';
import { ButtonStyled } from './BaseButtonsStyled';

// eslint-disable-next-line react/prop-types
const StoryRow = ({ children }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px' }}>
    {children}
  </div>
);

// eslint-disable-next-line react/prop-types
const StoryItem = ({ children }) => (
  <div style={{ display: 'flex', margin: '10px' }}>{children}</div>
);

storiesOf('Basic button component', module)
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <StoryItem>
      <BaseButton
        type={radios('Type', styleProps.allowedTypes, styleProps.defaultType)}
        size={radios('Sizes', styleProps.allowedSizes, styleProps.defaultSize)}
        mode={radios('Modes', styleProps.allowedModes, styleProps.defaultMode)}
        layout={radios(
          'Layouts',
          styleProps.allowedLayouts,
          styleProps.defaultLayout
        )}
        radius={radios(
          'Radius',
          styleProps.allowedRadius,
          styleProps.defaultRadius
        )}
      >
        Primary Button
      </BaseButton>
    </StoryItem>
  ))
  .add('by Type', () => (
    <StoryRow>
      <StoryItem>
        <BaseButton
          type="default"
          size={radios(
            'Sizes',
            styleProps.allowedSizes,
            styleProps.defaultSize
          )}
          mode={radios(
            'Modes',
            styleProps.allowedModes,
            styleProps.defaultMode
          )}
          radius={radios(
            'Radius',
            styleProps.allowedRadius,
            styleProps.defaultRadius
          )}
        >
          Primary Button
        </BaseButton>
      </StoryItem>
      <StoryItem>
        <BaseButton
          type="primary"
          size={radios(
            'Sizes',
            styleProps.allowedSizes,
            styleProps.defaultSize
          )}
          mode={radios(
            'Modes',
            styleProps.allowedModes,
            styleProps.defaultMode
          )}
          radius={radios(
            'Radius',
            styleProps.allowedRadius,
            styleProps.defaultRadius
          )}
        >
          Primary Button
        </BaseButton>
      </StoryItem>

      <StoryItem>
        <BaseButton
          type="secondary"
          size={radios(
            'Sizes',
            styleProps.allowedSizes,
            styleProps.defaultSize
          )}
          mode={radios(
            'Modes',
            styleProps.allowedModes,
            styleProps.defaultMode
          )}
          radius={radios(
            'Radius',
            styleProps.allowedRadius,
            styleProps.defaultRadius
          )}
        >
          Primary Button
        </BaseButton>
      </StoryItem>
    </StoryRow>
  ))
  .add('as ReactRouter Link tag', () => (
    <Router>
      <StoryItem>
        <ButtonStyled
          as={Link}
          to="/"
          type={radios('Type', styleProps.allowedTypes, styleProps.defaultType)}
          size={radios(
            'Sizes',
            styleProps.allowedSizes,
            styleProps.defaultSize
          )}
          mode={radios(
            'Modes',
            styleProps.allowedModes,
            styleProps.defaultMode
          )}
          layout={radios(
            'Layouts',
            styleProps.allowedLayouts,
            styleProps.defaultLayout
          )}
          radius={radios(
            'Radius',
            styleProps.allowedRadius,
            styleProps.defaultRadius
          )}
        >
          Primary Button
        </ButtonStyled>
      </StoryItem>
    </Router>
  ))
  .add('as anchor tag', () => (
    <StoryItem>
      <ButtonStyled
        as="a"
        href="/"
        type={radios('Type', styleProps.allowedTypes, styleProps.defaultType)}
        size={radios('Sizes', styleProps.allowedSizes, styleProps.defaultSize)}
        mode={radios('Modes', styleProps.allowedModes, styleProps.defaultMode)}
        layout={radios(
          'Layouts',
          styleProps.allowedLayouts,
          styleProps.defaultLayout
        )}
        radius={radios(
          'Radius',
          styleProps.allowedRadius,
          styleProps.defaultRadius
        )}
      >
        Primary Button
      </ButtonStyled>
    </StoryItem>
  ));
