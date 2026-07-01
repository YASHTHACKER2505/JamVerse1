import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const Scanner = ({ onScan }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      false
    );

    scanner.render(
  (decodedText) => {
    console.log("QR VALUE:", decodedText);

    scanner.clear();

    onScan(decodedText.trim());
  },
  (error) => {}
);

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div
      id="reader"
      className="w-full"
    />
  );
};

export default Scanner;