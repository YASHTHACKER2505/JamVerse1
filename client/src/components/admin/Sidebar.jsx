import {
  LayoutDashboard,
  CalendarCheck,
  Clock3,
  CheckCircle2,
  XCircle,
  LogOut,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Bookings",
    icon: CalendarCheck,
  },
  {
    title: "Pending",
    icon: Clock3,
  },
  {
    title: "Approved",
    icon: CheckCircle2,
  },
  {
    title: "Rejected",
    icon: XCircle,
  },
];

const Sidebar = ({ filter, setFilter }) => {
  return (
    <aside className="w-72 bg-[#0D1323] border-r border-white/10 flex flex-col">
      <div className="p-8 border-b border-white/10">
        <h1 className="text-3xl font-black text-white">
          Jam<span className="text-yellow-400">Verse</span>
        </h1>

        <p className="text-gray-400 mt-2">
          Admin Dashboard
        </p>
      </div>

      <div className="flex-1 px-5 py-8 space-y-3">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <button
  key={menu.title}
  onClick={() =>
    setFilter(
      menu.title === "Dashboard"
        ? "All"
        : menu.title
    )
  }
  className={`flex items-center gap-4 w-full rounded-2xl px-5 py-4 transition
  ${
    (menu.title === "Dashboard" && filter === "All") ||
    menu.title === filter
      ? "bg-yellow-400 text-black"
      : "text-gray-300 hover:bg-yellow-400 hover:text-black"
  }`}
>
              {menu.title}
            </button>
          );
        })}
      </div>

      <div className="p-5 border-t border-white/10">
        <button className="flex items-center gap-4 w-full rounded-2xl bg-red-500 px-5 py-4 font-semibold text-white hover:bg-red-600 transition">
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;