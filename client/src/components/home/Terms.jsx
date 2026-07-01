import { motion } from "framer-motion";
import {
  LuClock3,
  LuMail,
  LuBan,
  LuHeart,
} from "react-icons/lu";

const terms = [
  {
    icon: <LuClock3 size={28} />,
    title: "Arrive Early",
    desc: "Please arrive 30–35 minutes before the event. Seating is First Come, First Served.",
  },
  {
    icon: <LuMail size={28} />,
    title: "Email Confirmation",
    desc: "Your ticket and QR Code will be sent to your registered email after payment verification.",
  },
  {
    icon: <LuBan size={28} />,
    title: "No Refund",
    desc: "Tickets are non-refundable unless the event is cancelled by the organizer.",
  },
  {
    icon: <LuHeart size={28} />,
    title: "Special Evening",
    desc: "Outside food & drinks are not allowed. Enjoy an unforgettable musical experience.",
  },
];

const Terms = () => {
  return (
    <section className="bg-[#050816] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-yellow-400 font-semibold text-sm">

            IMPORTANT NOTES

          </p>

          <h2 className="mt-6 text-5xl font-black text-white">

            Before You Book

          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {terms.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-black">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 text-slate-400 leading-8">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Terms;