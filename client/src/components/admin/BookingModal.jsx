import toast from "react-hot-toast";
import { useState } from "react";
import {
  approveBooking,
  rejectBooking,
} from "../../services/bookingApi";

const BookingModal = ({
  booking,
  open,
  onClose,
  refreshBookings,
}) => {
  if (!open || !booking) return null;
const [approving, setApproving] = useState(false);
const [rejecting, setRejecting] = useState(false);
  const handleApprove = async () => {
  try {

    setApproving(true);

    await approveBooking(booking._id);

    toast.success("Booking Approved");

    refreshBookings();

    onClose();

  } catch (error) {

    console.log(error);

    toast.error("Approval Failed");

  } finally {

    setApproving(false);

  }
};
  const handleReject = async () => {
  try {

    setRejecting(true);

    await rejectBooking(booking._id);

    toast.success("Booking Rejected");

    refreshBookings();

    onClose();

  } catch (error) {

    console.log(error);

    toast.error("Rejection Failed");

  } finally {

    setRejecting(false);

  }
};

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-sm p-6">

      <div className="relative my-10 mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-[#101827] overflow-hidden">

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <h2 className="text-3xl font-bold text-white">
            Booking Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-white"
          >
            ×
          </button>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 p-8 max-h-[75vh] overflow-y-auto">

          <div className="space-y-5">

            <Info title="Booking ID" value={booking.bookingId} />
            <Info title="Full Name" value={booking.fullName} />
            <Info title="Email" value={booking.email} />
            <Info title="Mobile" value={booking.mobile} />
            <Info title="City" value={booking.city} />
            <Info title="Age" value={booking.age} />
            <Info title="Gender" value={booking.gender} />
            <Info title="Tickets" value={booking.tickets} />
            <Info title="Transaction ID" value={booking.transactionId} />

            <Info
  title="Status"
  value={booking.paymentStatus}
/>

{booking.paymentStatus === "Pending" && (
  <div className="flex gap-4 pt-5">

    <button
  onClick={handleApprove}
  disabled={approving}
  className="flex-1 rounded-xl bg-green-600 py-3 font-bold text-white hover:bg-green-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
>
  {approving ? (
    <>
      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      Approving...
    </>
  ) : (
    "Approve"
  )}
</button>

    <button
  onClick={handleReject}
  disabled={rejecting}
  className="flex-1 rounded-xl bg-red-600 py-3 font-bold text-white hover:bg-red-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
>
  {rejecting ? (
    <>
      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      Rejecting...
    </>
  ) : (
    "Reject"
  )}
</button>

  </div>
)}
          </div>

          <div>

            <p className="mb-4 text-gray-400">
              Payment Screenshot
            </p>

            <img
  src={booking.paymentScreenshot}
  alt="Payment Screenshot"
  className="w-full rounded-2xl border border-white/10 object-contain max-h-[500px]"
/>
          </div>

        </div>

      </div>

    </div>
  );
};

const Info = ({ title, value }) => (
  <div>
    <p className="text-sm text-gray-500">
      {title}
    </p>

    <p className="mt-1 text-lg font-semibold text-white">
      {value}
    </p>
  </div>
);

export default BookingModal;