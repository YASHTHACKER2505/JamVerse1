const Topbar = () => {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-black text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back, Administrator 👋
        </p>
      </div>

      <div className="bg-yellow-400 text-black rounded-2xl px-6 py-3 font-bold">
        Admin
      </div>

    </div>
  );
};

export default Topbar;