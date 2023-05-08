import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBooksPage from './pages/SearchBooksPage';

test('renders learn react link', () => {
  render(<SearchBooksPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
