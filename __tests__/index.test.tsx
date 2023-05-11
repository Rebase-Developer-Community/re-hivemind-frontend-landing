import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the greeting', () => {
    render(<Home />);

    const greeting = screen.getByText('Hello World!');

    expect(greeting).toBeInTheDocument();
  });
});
