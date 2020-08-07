import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Test if BARETTO is in the DOM', () => {
  const { getByText } = render(<App />);
  const headerTextDark = getByText("BARETTO");
  expect(headerTextDark).toBeInTheDocument();
});

test('Test if CREATIVE is in the DOM', () => {
  const { getByText } = render(<App />);
  const headerTextLight = getByText("CREATIVE");
  expect(headerTextLight).toBeInTheDocument();
});
