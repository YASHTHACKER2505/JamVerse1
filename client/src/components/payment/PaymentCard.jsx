import qr from "../../assets/images/qr.jpg";
import { LuCopy, LuCircleCheckBig } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";

const PaymentCard = () => {
  const upi = "shekhwatadi@oksbi";
  const [copied, setCopied] = useState(false);

  const copyUPI = async () => {
    await navigator.clipboard.writeText(upi);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="relative bg-[#050816] py-32 overflow-hidden">

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-yellow-400 text-sm font-semibold">

            PAYMENT

          </p>

          <h2 className="mt-6 text-5xl font-black text-white">

            Complete Your Payment

          </h2>

          <p className="mt-6 text-lg text-slate-400">

            Scan the QR Code using any UPI App.

          </p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-14"
        >

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* QR */}

            <div className="flex justify-center">

              <img
                src={qr}
                alt="QR"
                className="w-72 rounded-3xl border border-white/10"
              />

            </div>

            {/* Details */}

            <div>

              <h3 className="text-3xl font-bold text-white">

                UPI ID

              </h3>

              <div className="mt-6 flex gap-3">

                <input
                  value={upi}
                  readOnly
                  className="flex-1 rounded-xl bg-[#0F172A] border border-white/10 px-5 py-4 text-white"
                />

                <button
                  onClick={copyUPI}
                  className="rounded-xl bg-yellow-400 px-5 text-black"
                >

                  <LuCopy size={20} />

                </button>

              </div>

              {copied && (

                <p className="mt-4 flex items-center gap-2 text-green-400">

                  <LuCircleCheckBig />

                  UPI Copied Successfully

                </p>

              )}

              <div className="mt-10 space-y-5">

                <div className="flex gap-3">

                  <LuCircleCheckBig className="text-yellow-400 mt-1" />

                  <p className="text-slate-300">

                    Ticket Price : <strong>₹499</strong>

                  </p>

                </div>

                <div className="flex gap-3">

                  <LuCircleCheckBig className="text-yellow-400 mt-1" />

                  <p className="text-slate-300">

                    Upload Payment Screenshot.

                  </p>

                </div>

                <div className="flex gap-3">

                  <LuCircleCheckBig className="text-yellow-400 mt-1" />

                  <p className="text-slate-300">

                    Enter correct Transaction ID.

                  </p>

                </div>

                <div className="flex gap-3">

                  <LuCircleCheckBig className="text-yellow-400 mt-1" />

                  <p className="text-slate-300">

                    Ticket will be sent after verification.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default PaymentCard;