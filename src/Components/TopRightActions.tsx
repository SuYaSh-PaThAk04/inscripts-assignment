// components/TopRightActions.tsx
const TopRightActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search within sheet"
        className="border rounded px-2 py-1 text-sm w-48"
      />
      <div className="flex items-center space-x-2">
        <img
          src="https://i.pravatar.cc/32?img=3"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm">John Doe</span>
      </div>
      <button className="bg-green-600 text-white text-sm px-4 py-1 rounded hover:bg-green-700">
        + New Action
      </button>
    </div>
  );
};

export default TopRightActions;
