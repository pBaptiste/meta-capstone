const formatDate = (dateString) => {
  if (!dateString) {
    return 'your selected date';
  }
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatTime = (time) => {
  if (!time) {
    return 'your selected time';
  }
  const [hourString, minute] = time.split(':');
  const hour = Number(hourString);
  const period = hour >= 12 ? 'PM' : 'AM';
  const standardHour = ((hour + 11) % 12) + 1;
  return `${standardHour}:${minute} ${period}`;
};

function ConfirmedBooking({ booking }) {
  const dateText = formatDate(booking?.date);
  const timeText = formatTime(booking?.time);

  return (
    <section className="booking-confirmation" aria-labelledby="confirmation-title">
      <div className="confirmation-card">
        <div className="confirmation-badge" aria-hidden="true">
          ✓
        </div>
        <h1 id="confirmation-title">Booking confirmed</h1>
        <p>
          Your reservation for {dateText} at {timeText} has been successfully submitted. We look
          forward to seeing you soon.
        </p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
