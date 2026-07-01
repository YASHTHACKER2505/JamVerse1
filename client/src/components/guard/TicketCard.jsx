import React from "react";

const TicketCard = ({
  booking,
  onAllowEntry,
  onClose,
  loading,
}) => {
  if (!booking) return null;

  return (
    <div className="mt-8 bg-[#171717] rounded-2xl border border-yellow-500/30 p-6 shadow-xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-yellow-400">
          Ticket Details
        </h2>

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            booking.paymentStatus === "Approved"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {booking.paymentStatus}
        </span>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <Info
          label="Booking ID"
          value={booking.bookingId}
        />

        <Info
          label="Full Name"
          value={booking.fullName}
        />

        <Info
          label="Email"
          value={booking.email}
        />

        <Info
          label="Mobile"
          value={booking.mobile}
        />

        <Info
          label="City"
          value={booking.city}
        />

        <Info
          label="Gender"
          value={booking.gender}
        />

        <Info
          label="Age"
          value={booking.age}
        />

        <Info
          label="Tickets"
          value={booking.tickets}
        />

      </div>

      <div className="mt-8 flex gap-4">

  {booking.checkedIn ? (

    <>
      <button
        className="flex-1 bg-red-600 rounded-xl py-4 font-bold text-white cursor-default"
      >
        ❌ Already Checked In
      </button>

      <button
        onClick={onClose}
        className="px-8 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold text-white"
      >
        Close
      </button>
    </>

  ) : (

    <>
      <button
        onClick={onAllowEntry}
        disabled={loading}
        className="flex-1 bg-green-600 hover:bg-green-700 transition rounded-xl py-4 text-lg font-bold text-white"
      >
        {loading
          ? "Allowing Entry..."
          : "✅ ALLOW ENTRY"}
      </button>

      <button
        onClick={onClose}
        className="px-8 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold text-white"
      >
        Close
      </button>
    </>

  )}

</div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="bg-[#222] rounded-xl p-4">

    <p className="text-gray-400 text-sm">
      {label}
    </p>

    <p className="text-white font-semibold mt-1 break-words">
      {value}
    </p>

  </div>
);

export default TicketCard;