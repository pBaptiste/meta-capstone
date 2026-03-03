import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the Little Lemon headline', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headline = screen.getByText(/little lemon/i);
  expect(headline).toBeInTheDocument();
});
