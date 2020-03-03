import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'title',
  component: ,
};

export const Test1 = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀
    </span>
  </Button>
);
