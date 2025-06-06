import React from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', patients: 30, visits: 50 },
  { name: 'Feb', patients: 45, visits: 60 },
  { name: 'Mar', patients: 50, visits: 70 },
  { name: 'Apr', patients: 60, visits: 80 },
  { name: 'May', patients: 80, visits: 100 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Doctor Portal Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Total Patients</h2>
          <p className="text-2xl font-bold text-blue-700">120</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Upcoming Appointments</h2>
          <p className="text-2xl font-bold text-green-600">8</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Revenue (This Month)</h2>
          <p className="text-2xl font-bold text-purple-600">$2,400</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <h2 className="text-lg font-semibold mb-4">Patient Growth</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="patients" stroke="#2563eb" strokeWidth={3} />
            <Line type="monotone" dataKey="visits" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <nav className="flex gap-4">
        <Link to="/patients" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Patients</Link>
        <Link to="/appointments" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Appointments</Link>
        <Link to="/messaging" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Messaging</Link>
        <Link to="/documents" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Documents</Link>
        <Link to="/billing" className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">Billing</Link>
        <Link to="/admin" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Admin</Link>
      </nav>
    </div>
  );
};

export default Dashboard; 