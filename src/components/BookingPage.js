import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatchAvailableTimes, submitForm, submitError }) {
  return (
    <section className="booking" aria-labelledby="booking-title">
      <h1 id="booking-title">Reserve a Table</h1>
      <p>
        Choose a date, time, and party size to reserve your table. We look forward to hosting you.
      </p>
      {submitError ? <p className="form-error" role="alert">{submitError}</p> : null}
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
