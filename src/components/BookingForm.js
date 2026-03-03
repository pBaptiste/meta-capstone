import { useState } from 'react';

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setAvailableTimes((times) => [...times]);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Table reservation form">
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      >
        {availableTimes.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(Number(event.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Submit reservation</button>
    </form>
  );
}

export default BookingForm;
