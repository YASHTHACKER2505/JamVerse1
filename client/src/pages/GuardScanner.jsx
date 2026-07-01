import { useState } from "react";
import toast from "react-hot-toast";

import Scanner from "../components/guard/Scanner";
import TicketCard from "../components/guard/TicketCard";

import {
  verifyTicket,
  checkInTicket,
} from "../services/guardApi";

import { useGuard } from "../context/GuardContext";

const GuardScanner = () => {
  const { token } = useGuard();

  const [booking, setBooking] = useState(null);

  const [loading, setLoading] = useState(false);

  const [scannerKey, setScannerKey] = useState(0);

  // ======================
  // QR SCANNED
  // ======================

  const handleScan = async (qrValue) => {
  try {

    let bookingId = qrValue;

    // If QR contains JSON, extract bookingId
    if (qrValue.startsWith("{")) {
      bookingId = JSON.parse(qrValue).bookingId;
    }

    console.log("Booking ID:", bookingId);

    setLoading(true);

    const { data } = await verifyTicket(
      bookingId,
      token
    );

    setBooking(data.booking);

    toast.success("Ticket Verified");

  } catch (err) {

    toast.error(
      err?.response?.data?.message ||
      "Invalid Ticket"
    );

    restartScanner();

  } finally {

    setLoading(false);

  }
};

  // ======================
  // CHECK IN
  // ======================

  const handleAllowEntry = async () => {
    try {

      setLoading(true);

      await checkInTicket(
        booking.bookingId,
        token
      );

      toast.success("Entry Allowed");

      setBooking(null);

      restartScanner();

    } catch (err) {

      toast.error(
        err?.response?.data?.message ||
          "Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  // ======================
  // RESTART CAMERA
  // ======================

  const restartScanner = () => {
    setTimeout(() => {
      setScannerKey((prev) => prev + 1);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      <div className="max-w-5xl mx-auto p-8">

        <h1 className="text-4xl font-black text-center text-yellow-400">

          JAMVERSE SECURITY

        </h1>

        <p className="text-center text-gray-400 mt-2">

          Scan Guest Ticket

        </p>

        {!booking && (

          <div className="mt-10">

            <Scanner
              key={scannerKey}
              onScan={handleScan}
            />

          </div>

        )}

        <TicketCard
  booking={booking}
  loading={loading}
  onAllowEntry={handleAllowEntry}
  onClose={() => {
    setBooking(null);
    restartScanner();
  }}
/>

      </div>

    </div>
  );
};

export default GuardScanner;