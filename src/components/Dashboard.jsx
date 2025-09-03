// src/components/Dashboard.jsx
import { useState } from "react";
import {
  ShoppingCart,
  Package,
  DollarSign,
  Users,
  Menu,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full ">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "flex" : "hidden"} min-w-screen flex-col`}
      >
        <div className="flex w-full items-center justify-center gap-10">
          <h2 className="text-xl font-bold text-blue-600">E-Shop Admin</h2>
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <ShoppingCart size={18} /> Orders
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <Package size={18} /> Products
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <Users size={18} /> Customers
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <LogOut size={18} /> Logout
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Total Sales"
              value="$12,450"
              icon={<DollarSign className="text-green-500" size={28} />}
            />
            <DashboardCard
              title="Orders"
              value="1,245"
              icon={<ShoppingCart className="text-blue-500" size={28} />}
            />
            <DashboardCard
              title="Products"
              value="320"
              icon={<Package className="text-purple-500" size={28} />}
            />
            <DashboardCard
              title="Customers"
              value="890"
              icon={<Users className="text-pink-500" size={28} />}
            />
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">#1001</td>
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">$120.00</td>
                  <td className="py-2 px-4 text-green-600">Completed</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">#1002</td>
                  <td className="py-2 px-4">Jane Smith</td>
                  <td className="py-2 px-4">$85.00</td>
                  <td className="py-2 px-4 text-yellow-600">Pending</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">#1003</td>
                  <td className="py-2 px-4">Alex Brown</td>
                  <td className="py-2 px-4">$200.00</td>
                  <td className="py-2 px-4 text-red-600">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
      <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
