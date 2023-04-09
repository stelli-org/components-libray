import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicButton } from './button.composition';

it('should render with the correct text', () => {
  render(<BasicButton />);
  
  expect(screen.getByText('hello world!')).toBeVisible();
});
