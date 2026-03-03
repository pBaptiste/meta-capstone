import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon headline', () => {
  render(<App />);
  const headline = screen.getByText(/little lemon/i);
  expect(headline).toBeInTheDocument();
});
