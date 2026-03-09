import { useState } from 'react';

const formatTime = (time) => {
  const [hourString, minute] = time.split(':');
  const hour = Number(hourString);
  const period = hour >= 12 ? 'PM' : 'AM';
  const standardHour = ((hour + 11) % 12) + 1;
  return `${standardHour}:${minute} ${period}`;
};

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

  const hasTimes = availableTimes.length > 0;
  const isFormValid = Boolean(date) && Boolean(time) && guests >= 1 && guests <= 10 && hasTimes;

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table reservation form">
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={handleDateChange}
          aria-label="Reservation date"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          aria-label="Reservation time"
          required
          disabled={!hasTimes}
        >
        {availableTimes.map((slot) => (
          <option key={slot} value={slot}>
            {formatTime(slot)}
          </option>
        ))}
        </select>
        {!hasTimes ? (
          <span className="field-hint" role="status">
            No times available for this date. Please select another date.
          </span>
        ) : null}
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
          aria-label="Number of guests"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          aria-label="Occasion"
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit" disabled={!isFormValid} aria-label="Submit reservation">
        Submit reservation
      </button>
    </form>
  );
}

export default BookingForm;
