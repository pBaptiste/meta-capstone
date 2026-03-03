import BookingForm from './BookingForm';

function BookingPage({ availableTimes, setAvailableTimes }) {
  return (
    <section className="booking" aria-labelledby="booking-title">
      <h1 id="booking-title">Reserve a Table</h1>
      <p>
        Choose a date, time, and party size to reserve your table. We look forward to hosting you.
      </p>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
    </section>
  );
}

export default BookingPage;
