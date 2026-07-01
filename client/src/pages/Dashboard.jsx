import { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import StatCard from "../components/admin/StatCard";
import BookingTable from "../components/admin/BookingTable";

import {
  getStats,
  getBookings,
} from "../services/dashboardApi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pending: 0,
    approved: 0,
    revenue: 0,
  });

  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(true);

  const refreshDashboard = async () => {
    try {
      const statsData = await getStats();
      const bookingData = await getBookings();

      setStats({
        totalBookings: statsData.totalBookings,
        pending: statsData.pending,
        approved: statsData.approved,
        revenue: statsData.revenue,
      });

      setBookings(bookingData.bookings);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshDashboard();
  }, []);
const filteredBookings =
  filter === "All"
    ? bookings
    : filter === "Bookings"
    ? bookings
    : bookings.filter(
        (booking) => booking.paymentStatus === filter
      );
  return (
    <div className="flex min-h-screen bg-[#050816]">

      <Sidebar
  filter={filter}
  setFilter={setFilter}
/>

      <main className="flex-1 p-10 overflow-auto">

        <Topbar />

        {loading ? (
          <div className="mt-20 text-center text-white text-xl">
            Loading Dashboard...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

              <StatCard
                title="Total Bookings"
                value={stats.totalBookings}
              />

              <StatCard
                title="Pending"
                value={stats.pending}
              />

              <StatCard
                title="Approved"
                value={stats.approved}
              />

              <StatCard
                title="Revenue"
                value={`₹${stats.revenue}`}
              />

            </div>

            <div className="mt-12">

              <h2 className="text-3xl font-bold text-white">
                Recent Bookings
              </h2>

              <BookingTable
  bookings={filteredBookings}
  refreshDashboard={refreshDashboard}
/>
            </div>
          </>
        )}

      </main>

    </div>
  );
};

export default Dashboard;