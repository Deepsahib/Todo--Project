import React, { useState } from 'react';

const App = () => {
  const [first, setfirst] = useState('');
  const [task, settask] = useState([]);

  function handlechange(e) {
    setfirst(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (!first.trim()) return;
    if (task.includes(first.trim())) {
      alert('Already exists');
      return;
    }
    settask((prev) => [...prev, first.trim()]);
    setfirst('');
  }

  function hanldedelete(index) {
    settask(task.filter((_, i) => i !== index));
  }

  function handleClearAll() {
    settask([]);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      <div className="text-3xl font-bold mb-6 text-blue-600">Todo App</div>

      <form onSubmit={handlesubmit} className="flex gap-3 w-full max-w-md mb-6">
        <input
          type="text"
          value={first}
          onChange={handlechange}
          placeholder="Enter task"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      <ul className="w-full max-w-md space-y-2">
        {task.map((item, index) => (
          <li
            key={index}
            className="bg-white p-3 rounded-xl shadow border border-gray-200 flex justify-between items-center"
          >
            <span>{item}</span>
            <button
              onClick={() => hanldedelete(index)}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {task.length > 0 && (
        <button
          onClick={handleClearAll}
          className="mt-6 px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default App;
