import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { Button } from '../library/Button';
export default {
  title: 'Button/',
  component: Button,
};

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Sun = () => (
  <Button onClick={action('clicked')} text={'Hello this is a sun button'}>
    sun life
  </Button>
);
