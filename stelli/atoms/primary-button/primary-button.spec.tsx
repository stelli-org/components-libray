import React from 'react';
import { render } from '@testing-library/react';
import { BasicPrimaryButton } from './primary-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPrimaryButton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
