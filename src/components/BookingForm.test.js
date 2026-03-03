import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const renderBookingForm = () =>
  render(<BookingForm availableTimes={['17:00']} dispatchAvailableTimes={() => {}} />);

test('renders booking form labels', () => {
  renderBookingForm();
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});
