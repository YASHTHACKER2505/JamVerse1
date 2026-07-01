import { motion } from "framer-motion";
import banner from "../../assets/images/banner.png";
import {
  LuMusic4,
  LuSparkles,
  LuHeartHandshake,
  LuArrowRight,
} from "react-icons/lu";

const features = [
  {
    icon: <LuMusic4 size={28} />,
    title: "Live Musical Experience",
    desc: "LoFi, Sufi and soulful performances in a magical atmosphere.",
  },
  {
    icon: <LuSparkles size={28} />,
    title: "Premium Ambience",
    desc: "Warm lights, cozy seating and unforgettable vibes.",
  },
  {
    icon: <LuHeartHandshake size={28} />,
    title: "Meet Amazing People",
    desc: "Conversations, connections and beautiful memories.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl"></div>

            <img
              src={banner}
              alt="JamVerse"
              className="relative rounded-[32px] border border-yellow-400/20 shadow-[0_35px_90px_rgba(250,204,21,.15)]"
            />

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <p className="uppercase tracking-[6px] text-yellow-400 text-sm font-semibold">

              ABOUT THE EVENT

            </p>

            <h2 className="mt-6 text-5xl lg:text-6xl font-black leading-tight">

              <span className="text-white">

                More Than Music,

              </span>

              <span className="block text-yellow-400">

                It's An Experience

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              JamVerse Bhuj is a community-driven musical evening where
              strangers become friends through soulful music, warm vibes,
              meaningful conversations and unforgettable memories.

            </p>

            <div className="mt-12 space-y-8">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-5"
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black flex-shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-2 text-slate-400 leading-8">

                      {item.desc}

                    </p>

                  </div>

                </div>

              ))}

            </div>

            <a
              href="#booking"
              className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-9 py-4 text-black text-lg font-bold hover:scale-105 transition"
            >

              Book Your Seat

              <LuArrowRight />

            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;