import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { GlobalStyle } from '../src/app.styles';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};
const withGlobal = (story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
);

addDecorator(StoryRouter());
addDecorator(withGlobal);
configure(loadStories, module);
