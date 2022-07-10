import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('it should be Render Ricky Morty Wiki Application', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ricky Morty Wiki/i);
  expect(linkElement).toBeInTheDocument();
});
