import React from 'react';

const documents = [
  { id: 1, name: 'Lab Results.pdf', uploaded: '2025-06-01' },
  { id: 2, name: 'Prescription.docx', uploaded: '2025-06-03' },
];

const Documents: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Documents</h1>
      <div className="mb-4 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Upload Document</button>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Uploaded Documents</h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {documents.map(doc => (
            <li key={doc.id} className="py-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{doc.name}</div>
                <div className="text-gray-500 text-sm">Uploaded: {doc.uploaded}</div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Download</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents; 