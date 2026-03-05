import { useState } from 'react';

function BookingForm({ availableTimes, dispatchAvailableTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  const handleDateChange = (event) => {
    const nextDate = event.target.value;
    setDate(nextDate);
    dispatchAvailableTimes(nextDate);
  };

  const isFormValid = Boolean(date) && Boolean(time) && guests >= 1 && guests <= 10;

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="On Click">
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={handleDateChange}
          aria-label="On Click"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          aria-label="On Click"
          required
        >
          {availableTimes.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          aria-label="On Click"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          aria-label="On Click"
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit" disabled={!isFormValid} aria-label="On Click">
        Submit reservation
      </button>
    </form>
  );
}

export default BookingForm;
