const ActionHeader = () => (
  <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
    <div className="space-x-3 text-sm">
      <button className="text-gray-700 hover:underline">Import</button>
      <button className="text-gray-700 hover:underline">Export</button>
      <button className="text-gray-700 hover:underline">Share</button>
    </div>
    <button className="bg-green-600 text-white text-sm px-4 py-1 rounded hover:bg-green-700 transition">
      + New Action
    </button>
  </div>
);
export default ActionHeader;