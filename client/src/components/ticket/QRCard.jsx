const QRCard = ({ booking }) => {
  return (
    <div className="qr-card">

      <img
        src={booking.qrCode}
        alt="QR Code"
      />

      <h3>
        Scan To Enter
      </h3>

      <p>
        Show this QR at the Entry Gate
      </p>

    </div>
  );
};

export default QRCard;