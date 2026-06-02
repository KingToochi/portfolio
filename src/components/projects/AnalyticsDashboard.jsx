import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const summaryCards = [
  { title: "Revenue", value: "$128.4K", trend: "+12.3%", description: "vs last month" },
  { title: "Orders", value: "3.8K", trend: "+8.1%", description: "completed" },
  { title: "Conversion", value: "4.6%", trend: "+0.7%", description: "checkout rate" },
  { title: "AOV", value: "$84.20", trend: "+5.9%", description: "average order value" },
];

const salesByCategory = [
  { category: "Apparel", value: 38 },
  { category: "Electronics", value: 29 },
  { category: "Home", value: 18 },
  { category: "Beauty", value: 15 },
];

const topProducts = [
  { name: "Metro Sneaker", revenue: "$14.2K", orders: 190 },
  { name: "Smart Speaker", revenue: "$12.4K", orders: 145 },
  { name: "Kitchen Pro Set", revenue: "$9.7K", orders: 112 },
  { name: "Wellness Kit", revenue: "$7.8K", orders: 95 },
];

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Button>
        </Link>

        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">E-commerce Analytics Dashboard</h1>
              <p className="text-gray-600 mt-3 max-w-2xl">A high-level e-commerce performance dashboard for monitoring revenue, orders, conversion, and category sales performance.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">Last 30 days</Button>
              <Button variant="secondary">Export report</Button>
            </div>
          </div>

          <div className="grid gap-5 mt-10 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-gray-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-sm font-medium text-gray-500">{card.title}</p>
                <p className="text-3xl font-semibold text-gray-900 mt-3">{card.value}</p>
                <p className="mt-2 text-sm text-green-600 font-medium">{card.trend}</p>
                <p className="text-sm text-gray-500 mt-1">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 mt-10 xl:grid-cols-3">
            <div className="xl:col-span-2 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Revenue Trend</h2>
                  <p className="text-sm text-gray-500">Daily revenue performance for the past 30 days.</p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700">+18.2% vs prior period</span>
              </div>
              <div className="mt-8 space-y-4">
                <div className="h-44 rounded-3xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 p-4">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-end gap-3">
                      <div className="h-16 w-10 rounded-full bg-slate-300"></div>
                      <div className="h-24 w-10 rounded-full bg-slate-400"></div>
                      <div className="h-20 w-10 rounded-full bg-slate-300"></div>
                      <div className="h-28 w-10 rounded-full bg-slate-500"></div>
                      <div className="h-14 w-10 rounded-full bg-slate-300"></div>
                      <div className="h-18 w-10 rounded-full bg-slate-400"></div>
                      <div className="h-22 w-10 rounded-full bg-slate-500"></div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-[10px] text-gray-500">
                      {Array.from({ length: 7 }).map((_, index) => (
                        <div key={index} className="text-center">Day {index + 1}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm text-gray-600">
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="font-semibold">$4.2K</p>
                    <p className="mt-1">Best day</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="font-semibold">$2.1K</p>
                    <p className="mt-1">Avg daily</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="font-semibold">$92.5</p>
                    <p className="mt-1">Avg order</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Sales by Category</h2>
              <p className="text-sm text-gray-500 mt-1">Revenue distribution by product category.</p>
              <div className="mt-6 space-y-4">
                {salesByCategory.map((item) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                      <span>{item.category}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div className="h-3 rounded-full bg-slate-900" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Top Products</h2>
                <p className="text-sm text-gray-500">Best-selling product performance for the current month.</p>
              </div>
              <Button variant="outline">View details</Button>
            </div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Revenue</th>
                    <th className="px-6 py-4">Orders</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {topProducts.map((product) => (
                    <tr key={product.name} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{product.name}</td>
                      <td className="px-6 py-4 text-slate-700">{product.revenue}</td>
                      <td className="px-6 py-4 text-slate-700">{product.orders}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button className="flex-1">Open analytics</Button>
            <Button variant="outline" className="flex-1">Download report</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
