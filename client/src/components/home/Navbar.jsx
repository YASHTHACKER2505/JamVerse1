import { useEffect, useState } from "react";
import { LuMusic2, LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Home",
      link: "#hero",
    },
    {
      title: "Highlights",
      link: "#event",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Book Pass",
      link: "#booking",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#hero"
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black shadow-lg">

              <LuMusic2 size={26} />

            </div>

            <div>

              <h2 className="text-2xl font-extrabold text-white leading-none">

                JamVerse

                <span className="text-yellow-400">
                  {" "}Bhuj
                </span>

              </h2>

              <p className="text-sm text-yellow-300 mt-1">

                One Night • Endless Memories

              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-12">

            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-gray-300 font-medium hover:text-yellow-400 transition"
              >
                {item.title}
              </a>
            ))}

          </nav>

          {/* Book Button */}

          <a
            href="#booking"
            className="hidden lg:inline-flex px-7 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-lg hover:scale-105 transition"
          >
            Book Now
          </a>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <LuX size={32} /> : <LuMenu size={32} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#08101F] border-t border-white/10">

          <div className="flex flex-col py-6 px-6 gap-5">

            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                {item.title}
              </a>
            ))}

            <a
              href="#booking"
              className="mt-2 text-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-bold text-black"
            >
              Book Now
            </a>

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;