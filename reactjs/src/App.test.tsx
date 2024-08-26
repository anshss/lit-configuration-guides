import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('@lit-protocol/lit-node-client'); // Uses the mock defined globally

describe('App', () => {
  it('should display "Connecting to Lit..." and then "Connected!" when the button is clicked', async () => {
    render(<App />);

    const button = screen.getByText(/Instantiate Lit/i);

    fireEvent.click(button);

    // Check if "Connecting to Lit..." is displayed
    expect(await screen.findByText('Connecting to Lit...')).toBeInTheDocument();

    // Wait for "Connected!" to be displayed with increased timeout
    expect(await screen.findByText('Connected!', {}, { timeout: 10000 })).toBeInTheDocument();
  });
});
