function ConfirmedBooking() {
  return (
    <section className="booking-confirmation" aria-labelledby="confirmation-title">
      <div className="confirmation-card">
        <div className="confirmation-badge" aria-hidden="true">
          ✓
        </div>
        <h1 id="confirmation-title">Booking confirmed</h1>
        <p>Your reservation has been successfully submitted. We look forward to seeing you soon.</p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
