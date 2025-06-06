import React from 'react';

const charges = [
  { id: 1, description: 'Consultation', amount: 100, status: 'Paid' },
  { id: 2, description: 'Lab Test', amount: 200, status: 'Unpaid' },
];

const Billing: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Billing</h1>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <h2 className="text-lg font-semibold mb-4">Charges</h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {charges.map(charge => (
            <li key={charge.id} className="py-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{charge.description}</div>
                <div className="text-gray-500 text-sm">${charge.amount}</div>
              </div>
              <div className="flex gap-2 items-center">
                <span className={`px-3 py-1 rounded text-xs font-bold ${charge.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{charge.status}</span>
                {charge.status === 'Unpaid' && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Pay with Stripe</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Billing; 