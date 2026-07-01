import { useState } from "react";
import { getBookingById } from "../../services/bookingApi";
import BookingModal from "./BookingModal";

const BookingTable = ({ bookings, refreshDashboard }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleView = async (id) => {
    try {
      const data = await getBookingById(id);

      setSelectedBooking(data.booking);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10 bg-[#121A2D]">

        <table className="min-w-full">

          <thead className="border-b border-white/10">

            <tr className="text-left text-gray-300">

              <th className="px-6 py-5">Booking ID</th>
              <th className="px-6 py-5">Name</th>
              <th className="px-6 py-5">Mobile</th>
              <th className="px-6 py-5">Tickets</th>
              <th className="px-6 py-5">Amount</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Action</th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr
                key={booking._id}
                className="border-b border-white/5 hover:bg-white/5"
              >

                <td className="px-6 py-5 text-yellow-400 font-semibold">
                  {booking.bookingId}
                </td>

                <td className="px-6 py-5 text-white">
                  {booking.fullName}
                </td>

                <td className="px-6 py-5 text-gray-300">
                  {booking.mobile}
                </td>

                <td className="px-6 py-5 text-white">
                  {booking.tickets}
                </td>

                <td className="px-6 py-5 text-white">
                  ₹{booking.totalAmount}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      booking.paymentStatus === "Approved"
                        ? "bg-green-500/20 text-green-400"
                        : booking.paymentStatus === "Rejected"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <button
                    onClick={() => handleView(booking._id)}
                    className="rounded-xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {bookings.length === 0 && (
          <div className="py-12 text-center text-gray-400">
            No bookings found.
          </div>
        )}

      </div>

      <BookingModal
        booking={selectedBooking}
        open={openModal}
        onClose={() => setOpenModal(false)}
        refreshBookings={refreshDashboard}
      />
    </>
  );
};

export default BookingTable;