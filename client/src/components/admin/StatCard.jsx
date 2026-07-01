const StatCard = ({
  title,
  value,
}) => {
  return (
    <div className="rounded-3xl bg-[#121A2D] border border-white/10 p-7">

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="mt-4 text-5xl font-black text-white">
        {value}
      </h2>

    </div>
  );
};

export default StatCard;