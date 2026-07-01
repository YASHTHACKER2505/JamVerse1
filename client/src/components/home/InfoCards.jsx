import { motion } from "framer-motion";
import {
  LuTicket,
  LuMapPin,
  LuArmchair,
  LuMail,
  LuArrowRight,
} from "react-icons/lu";

const cards = [
  {
    icon: <LuTicket size={40} />,
    title: "₹499",
    subtitle: "",
    description:
      "One ticket. One unforgettable evening of music and memories.",
  },
  {
    icon: <LuMapPin size={40} />,
    title: "HVR Bhuj",
    subtitle: "Premium Venue",
    description:
      "Beautiful outdoor venue with an amazing musical atmosphere.",
  },
  {
    icon: <LuArmchair size={40} />,
    title: "First Come",
    subtitle: "First Serve",
    description:
      "Comfortable floor seating with gaddas and cushions for everyone.",
  },
  {
    icon: <LuMail size={40} />,
    title: "Email Ticket",
    subtitle: "Instant Delivery",
    description:
      "Receive your ticket after successful payment verification.",
  },
];

const InfoCards = () => {
  return (
    <section
      id="event"
      className="relative bg-[#050816] py-32 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[6px] text-yellow-400 font-semibold text-sm">

            EVENT HIGHLIGHTS

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">

            Everything You Need

            <span className="block text-yellow-400">

              Before Booking

            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-400">

            Discover everything about JamVerse Bhuj before
            reserving your seat for an unforgettable evening.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mt-24">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 min-h-[430px] flex flex-col transition duration-500 hover:-translate-y-4 hover:border-yellow-400 hover:shadow-[0_25px_70px_rgba(250,204,21,0.15)]"
            >

              {/* Glow */}

              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}

              <div className="relative h-20 w-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black shadow-xl">

                {card.icon}

              </div>

              {/* Title */}

              <h3 className="mt-10 text-[34px] font-black leading-tight text-white">

                {card.title}

              </h3>

              {/* Subtitle */}

              <p className="mt-4 text-yellow-400 font-semibold text-lg">

                {card.subtitle}

              </p>

              {/* Description */}

              <p className="mt-8 text-slate-400 leading-8 flex-grow">

                {card.description}

              </p>

              {/* Bottom */}

              <div className="mt-10 flex items-center gap-2 text-yellow-400 font-semibold">

                

               

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default InfoCards;