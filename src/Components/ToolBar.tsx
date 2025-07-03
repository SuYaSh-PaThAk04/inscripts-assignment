import { useState } from "react";

const Toolbar = () => {
      const tools = ['Tool bar ▼', 'Hide fields', 'Sort', 'Filter', 'Cell view'];
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="relative border-y px-4 py-2 bg-white">
      <div className="flex items-center space-x-4 text-sm">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-150"
        >
          Tool bar ▼
        </button>
        {showOptions && (
          <div className="absolute mt-2 left-4 bg-white border rounded shadow w-40 z-10 p-2">
            {tools.map((tool) => (
              <button
                key={tool}
                onClick={() => console.log(`${tool} clicked`)}
                className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100"
              >
                {tool}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
      <div className="text-sm text-gray-700">Showing 3 results</div>
      <div className="space-x-2">
        <button className="text-sm px-3 py-1 border rounded hover:bg-gray-100">Export</button>
        <button className="text-sm px-3 py-1 border rounded hover:bg-gray-100">Refresh</button>
      </div>
    </div>
  );
};

export default Toolbar;
