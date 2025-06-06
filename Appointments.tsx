import React from 'react';

const appointments = [
  { id: 1, patient: 'John Doe', date: '2025-06-10', time: '10:00', type: 'Consultation' },
  { id: 2, patient: 'Jane Smith', date: '2025-06-11', time: '14:00', type: 'Follow-up' },
];

const Appointments: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Appointments</h1>
      <div className="mb-4 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Schedule Appointment</button>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {appointments.map(app => (
            <li key={app.id} className="py-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{app.patient}</div>
                <div className="text-gray-500 text-sm">{app.date} at {app.time} ({app.type})</div>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">View</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Calendar (Coming Soon)</h2>
        <div className="h-40 flex items-center justify-center text-gray-400">[Calendar Widget Placeholder]</div>
      </div>
    </div>
  );
};

export default Appointments; 