import React from 'react';

export default {
  title: 'Text',
  component: Text,
};

export const Titre = () => (
  <h1 style={{ color: 'blue' }}>Hello ceci est un test</h1>
);

export const SubTitre = () => (
  <h2 style={{ color: 'purple' }}>Hello ceci est un test</h2>
);

export const SimpleText = () => (
  <p style={{ fontSize: '14px', fontWeight: '900' }}>Hello ceci est un test</p>
);

<Accordion
  items={[
    {
      title: 'First Row',
      children: (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      ),
    },
    {
      title: 'Second Row',
      children: (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      ),
    },
  ]}
/>;