import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const renderBookingForm = () =>
  render(
    <BookingForm
      availableTimes={['17:00']}
      dispatchAvailableTimes={() => {}}
      submitForm={() => {}}
    />
  );

test('renders booking form labels', () => {
  renderBookingForm();
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test('applies HTML5 validation attributes', () => {
  renderBookingForm();
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(dateInput).toBeRequired();
  expect(timeSelect).toBeRequired();
  expect(occasionSelect).toBeRequired();
  expect(guestInput).toHaveAttribute('min', '1');
  expect(guestInput).toHaveAttribute('max', '10');
});

test('disables submit button when form is invalid', () => {
  renderBookingForm();
  const submitButton = screen.getByRole('button', { name: /submit reservation/i });
  expect(submitButton).toBeDisabled();
});
