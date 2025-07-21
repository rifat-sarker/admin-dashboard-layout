import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const API_BASE = import.meta.env.VITE_API_BASE_URL; // replace with actual
const AUTH_TOKEN = "sdfdfdf"; // replace with actual

const DashboardPage = () => {
  const [stats, setStats] = useState({
    apiClients: 0,
    bulkClients: 0,
    devices: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Token ${AUTH_TOKEN}` };

        const [apiRes, bulkRes, deviceRes] = await Promise.all([
          axios.get(`${API_BASE}/client/apiClient/list/`, { headers }),
          axios.get(`${API_BASE}/client/bulkClient/list/`, { headers }),
          axios.get(`${API_BASE}/device/devices/list/`, { headers }),
        ]);

        setStats({
          apiClients: apiRes.data.length || 0,
          bulkClients: bulkRes.data.length || 0,
          devices: deviceRes.data.length || 0,
        });
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
      }
    };

    fetchData();
  }, []);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  const pieData = [
    { name: "API Clients", value: stats.apiClients },
    { name: "Bulk Clients", value: stats.bulkClients },
  ];

  const barData = [
    { month: "Jan", users: 30 },
    { month: "Feb", users: 45 },
    { month: "Mar", users: 60 },
    { month: "Apr", users: 80 },
  ];

  const lineData = [
    { name: "Device 1", usage: 40 },
    { name: "Device 2", usage: 70 },
    { name: "Device 3", usage: 55 },
  ];

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Admin Dashboard
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold mb-2">API Clients</h3>
          <p className="text-3xl font-bold">{stats.apiClients}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold mb-2">Bulk Clients</h3>
          <p className="text-3xl font-bold">{stats.bulkClients}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold mb-2">Devices</h3>
          <p className="text-3xl font-bold">{stats.devices}</p>
        </div>
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Client Type Ratio</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#82ca9d"
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Device Usage</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="usage" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
