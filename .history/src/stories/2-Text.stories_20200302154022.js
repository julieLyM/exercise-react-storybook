import React from 'react';

export default {
  title: 'Molecule/Text',
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
