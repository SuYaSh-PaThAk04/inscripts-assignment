import { useState } from "react";

type BottomTabs = {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
};
const BottomTabs = () => {
  const [tab, setTab] = useState('All Orders');
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t p-2 flex justify-center space-x-4 z-10">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`px-3 py-1 text-sm rounded ${
            tab === t
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default BottomTabs;