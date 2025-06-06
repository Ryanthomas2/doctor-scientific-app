import React, { useState } from 'react';

const patients = [
  { id: 1, name: 'John Doe', dob: '1980-01-01', history: 'Hypertension' },
  { id: 2, name: 'Jane Smith', dob: '1975-05-12', history: 'Diabetes' },
  { id: 3, name: 'Alice Johnson', dob: '1990-09-23', history: 'Asthma' },
];

const Patients: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Patients</h1>
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search patients..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Patient</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(patient => (
          <div key={patient.id} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">{patient.name}</h2>
            <p className="text-gray-500">DOB: {patient.dob}</p>
            <p className="text-gray-500 mb-4">History: {patient.history}</p>
            <button className="mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients; 