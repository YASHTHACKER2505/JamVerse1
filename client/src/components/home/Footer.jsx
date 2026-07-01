const Footer = () => {
  return (
    <footer className="bg-[#04060F] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-3xl font-black text-white">

              JamVerse

              <span className="text-yellow-400">

                {" "}Bhuj

              </span>

            </h2>

            <p className="mt-2 text-slate-500">

              One Night • Endless Memories

            </p>

          </div>

          <p className="text-slate-500 text-center">

            © 2026 JamVerse Bhuj. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;