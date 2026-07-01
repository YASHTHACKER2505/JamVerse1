import InfoRow from "./InfoRow";

const Details = ({ booking }) => {
  return (
    <div className="ticket-details">

      <div className="customer-name">
        {booking.fullName}
      </div>

      <InfoRow
        label="Booking ID"
        value={booking.bookingId}
      />

      <InfoRow
        label="Email"
        value={booking.email}
      />

      <InfoRow
        label="Mobile"
        value={booking.mobile}
      />

      <InfoRow
        label="Tickets"
        value={booking.tickets}
      />

      <InfoRow
        label="Amount"
        value={`₹${booking.totalAmount}`}
      />

      <InfoRow
        label="Venue"
        value="HVR Bhuj"
      />

      <InfoRow
        label="Date"
        value="12 July 2026"
      />

      <InfoRow
        label="Time"
        value="8:00 PM"
      />

    </div>
  );
};

export default Details;