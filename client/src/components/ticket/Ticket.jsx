import "./Ticket.css";

import Header from "./Header";
import Details from "./Details";
import QRCard from "./QRCard";
import Footer from "./Footer";
import { useRef } from "react";
import { downloadTicket } from "../../utils/downloadTicket";
import "./Ticket.css";


const Ticket = ({ booking }) => {
    const ticketRef = useRef(null);
  return (
    <div className="ticket-page">

      <div
    className="ticket"
    ref={ticketRef}
>

        <Header />

        <div className="ticket-content">

          <Details booking={booking} />

          <QRCard booking={booking} />

        </div>

        <Footer />
        <div className="download-area">

<button
onClick={() =>
downloadTicket(
ticketRef,
booking.bookingId
)
}
className="download-btn"
>

Download Ticket

</button>

</div>

      </div>

    </div>
  );
};

export default Ticket;