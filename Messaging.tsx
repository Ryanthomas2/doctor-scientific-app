import React, { useState } from 'react';

const conversations = [
  { id: 1, name: 'John Doe', last: 'See you at 10am!' },
  { id: 2, name: 'Jane Smith', last: 'Thank you, doctor.' },
];

const Messaging: React.FC = () => {
  const [selected, setSelected] = useState(1);
  const [message, setMessage] = useState('');
  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
        <h2 className="text-lg font-semibold mb-4">Conversations</h2>
        <ul>
          {conversations.map(conv => (
            <li key={conv.id} className={`p-2 rounded cursor-pointer mb-2 ${selected === conv.id ? 'bg-blue-100 dark:bg-blue-800' : ''}`} onClick={() => setSelected(conv.id)}>
              <div className="font-semibold">{conv.name}</div>
              <div className="text-gray-500 text-sm">{conv.last}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="text-gray-400 text-center mt-8">[Chat messages will appear here]</div>
        </div>
        <form className="flex gap-2" onSubmit={e => { e.preventDefault(); setMessage(''); }}>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Messaging; 