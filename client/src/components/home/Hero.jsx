import banner from "../../assets/images/banner.png";
import { motion } from "framer-motion";
import {
  LuCalendarDays,
  LuMapPin,
  LuClock3,
  LuTicket,
  LuArrowRight,
} from "react-icons/lu";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center pt-28 lg:pt-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[170px]" />

      </div>

      {/* Background Banner */}

      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center scale-125"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/60"></div>

      {/* Container */}

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
          >

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 mt-4">

              <span className="text-yellow-300 text-sm font-semibold tracking-wider uppercase">

                🎵 Bhuj Unplugged Presents

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-[54px] md:text-[70px] xl:text-[84px] font-black leading-[1.08] tracking-[-2px]">

              <span className="block text-white">

                JamVerse

              </span>

              <span className="block text-yellow-400 mt-2">

                Bhuj

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-9 text-slate-300">

              Experience a magical evening of
              <span className="text-white font-medium">
                {" "}LoFi,
              </span>

              <span className="text-white font-medium">
                {" "}Sufi
              </span>

              and soulful live performances,
              meaningful conversations and memories that
              last forever.

            </p>

            {/* Event Info */}

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-5">

                <div className="h-14 w-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">

                  <LuCalendarDays
                    className="text-yellow-400"
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">

                    12 July 2026

                  </h4>

                  <p className="text-slate-400">

                    Sunday Evening

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="h-14 w-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">

                  <LuMapPin
                    className="text-yellow-400"
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">

                    HVR Bhuj

                  </h4>

                  <p className="text-slate-400">

                    Premium Outdoor Venue

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="h-14 w-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">

                  <LuClock3
                    className="text-yellow-400"
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">

                    8:00 PM – 9:30 PM

                  </h4>

                  <p className="text-slate-400">

                    Live Musical Experience

                  </p>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-14 flex flex-col sm:flex-row gap-5">

              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-9 py-4 text-lg font-bold text-black shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <LuTicket size={22} />

                Book Your Seat

              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-yellow-400 px-9 py-4 text-lg font-semibold text-yellow-300 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Learn More

                <LuArrowRight size={20} />

              </a>

            </div>
                      </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Glow */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-[650px] h-[650px] rounded-full bg-yellow-400/15 blur-[150px]" />

            </div>

            {/* Decorative Circle */}

            <div className="absolute -top-12 -left-8 h-36 w-36 rounded-full border border-yellow-400/10"></div>

            <div className="absolute bottom-10 right-0 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl"></div>

            {/* Floating Banner */}

            <motion.div
              animate={{
                y: [-12, 10, -12],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <img
                src={banner}
                alt="JamVerse Bhuj"
                className="relative w-full max-w-[760px] rounded-[36px] border border-yellow-400/20 shadow-[0_35px_90px_rgba(250,204,21,0.18)] z-10"
              />

            </motion.div>

          </motion.div>

        </div>

      </div>
            {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050816] via-[#050816]/90 to-transparent pointer-events-none"></div>

    </section>
  );
};

export default Hero;