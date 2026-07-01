import Ticket from "../components/ticket/Ticket";

const dummyBooking = {
  bookingId: "EVT-2026-0006",
  fullName: "YASH THACKER",
  email: "yashthacker5340@gmail.com",
  mobile: "8485941351",
  tickets: 2,
  totalAmount: 998,

  qrCode:
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=EVT-2026-0006",
};

const TicketPreview = () => {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-10">
      <Ticket booking={dummyBooking} />
    </div>
  );
};

export default TicketPreview;