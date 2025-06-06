import React from 'react';

const users = [
  { id: 1, name: 'Dr. John Doe', role: 'Doctor', status: 'Active' },
  { id: 2, name: 'Jane Smith', role: 'Patient', status: 'Active' },
  { id: 3, name: 'Admin User', role: 'Admin', status: 'Active' },
];

const Admin: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-2xl font-bold text-blue-700">3</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Active Doctors</h2>
          <p className="text-2xl font-bold text-green-600">1</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Revenue (This Month)</h2>
          <p className="text-2xl font-bold text-purple-600">$2,400</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4">User Management</h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {users.map(user => (
            <li key={user.id} className="py-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{user.name}</div>
                <div className="text-gray-500 text-sm">{user.role}</div>
              </div>
              <div className="flex gap-2 items-center">
                <span className={`px-3 py-1 rounded text-xs font-bold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{user.status}</span>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin; 